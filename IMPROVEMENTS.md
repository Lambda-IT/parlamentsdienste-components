# Monorepo Improvements Analysis

This document contains a comprehensive analysis of the monorepo structure and recommendations for improvements.

## Current Architecture Overview

**Structure:**
- Stencil core library (`packages/core`)
- Framework wrappers: Angular, React, Vue (`packages/*`)
- Custom Angular output target (`libs/angular-output-target`)
- Test apps for each framework (`apps/*`)
- Storybook documentation (`docs/`)

**Tooling Mix:**
- pnpm workspaces for package management
- Nx for task orchestration and caching
- Stencil for core components
- Vite for React/Vue builds
- ng-packagr for Angular build

---

## Key Issues & Improvements

### 1. **Dependency Version Mismatches** ✅ **RESOLVED**

**Issue:** Different Stencil versions across packages
- Root: `@stencil/core: ^4.31.0`
- Core package: `@stencil/core: ^4.27.1`

**Resolution:** Aligned all Stencil versions to `^4.31.0` in both root and `packages/core/package.json`.

**Note:** `@stencil/core` is kept in root `package.json` because:
- Multiple packages need it (`packages/core` and `libs/angular-output-target`)
- pnpm hoists it to root `node_modules` making it available to all workspace packages
- Keeps versions consistent across the monorepo

**Files changed:**
- `package.json` (root) - kept at `^4.31.0`
- `packages/core/package.json` - updated to `^4.31.0`

### 2. **Nx Version Inconsistencies** ✅ **RESOLVED**

**Issue:** Multiple Nx package versions
- Some at `21.1.2`, others at `21.2.2`

**Resolution:** Aligned all `@nx/*` packages and `nx` to version `21.2.2`.

**Files changed:**
- `package.json` (root) - all Nx packages now at `21.2.2`
- `packages/angular/package.json` - updated `@nx/vite` peerDependency to `21.2.2`

### 3. **Mixed Monorepo Tooling** 🔧

**Current state:** Both pnpm workspace features AND Nx features are used, but not optimally integrated.

**Issues:**
- React and Vue packages have empty `project.json` targets (Nx relies on Vite plugin inference)
- Core package uses `nx:run-commands` executor (manual wrapper around Stencil CLI)
- Build dependencies are properly configured, but could leverage Nx cache better

**Recommendations:**

**Option A - Lean more into Nx:**
- Add proper build targets for React/Vue packages in their `project.json` files
- Define explicit inputs/outputs for better caching
- Remove reliance on Vite plugin auto-inference

**Option B - Simplify with pnpm-only approach:**
- Remove Nx entirely and use pnpm workspace commands
- Use `pnpm --filter` for targeted builds
- Use Turborepo if you need caching/orchestration (lighter than Nx)

**My recommendation:** Stick with Nx but improve configuration (Option A) since you're already invested in it.

### 4. **Build Configuration Improvements**

**React/Vue Build Issues:**
```typescript
// packages/react/vite.config.ts:38
formats: ['es' as const]  // Only ESM format
```

**Recommendation:** Add CommonJS format for better compatibility:
```typescript
formats: ['es', 'cjs']
```

Update `package.json` accordingly with proper `exports` field.

**Files to change:**
- `packages/react/vite.config.ts`
- `packages/react/package.json`
- `packages/vue/vite.config.ts`
- `packages/vue/package.json`

### 5. **Project Dependency Management** ✅ **RESOLVED**

**Issue:** Root package.json had framework dependencies as production deps:
```json
"dependencies": {
  "@angular/common": "~19.2.0",
  "react": "19.0.0",
  "vue": "^3.5.13"
}
```

**Resolution:** Moved all framework dependencies to devDependencies since they're only needed for test apps.

**What was moved:**
- All Angular packages (`@angular/common`, `@angular/core`, `@angular/forms`, etc.)
- React packages (`react`, `react-dom`)
- Vue (`vue`)
- Supporting packages (`rxjs`, `zone.js`)

**What remained in dependencies:**
- Nothing! The root `package.json` now has no `dependencies` section at all.

**Note:**
- The workspace packages (`@parlamentsdienste-components/angular` and `@parlamentsdienste-components/core`) are automatically linked by pnpm workspaces and don't need to be listed as dependencies in the root package.json
- `@popperjs/core` and `flatpickr` were already correctly placed in `packages/core/package.json` as dependencies (they're needed at runtime by the core components)

**Files changed:**
- `package.json` (root) - moved framework deps to devDependencies

**Verified:** Builds for angular-test and react-test apps work correctly after this change.

### 6. **Workspace Configuration**

**Issue:** Duplicate workspace configuration
- Both `pnpm-workspace.yaml` AND `package.json` workspaces field exist
- With pnpm, only `pnpm-workspace.yaml` is needed

**Recommendation:** Remove `workspaces` field from root `package.json` (line 32-37).

**Files to change:**
- `package.json` (root)

### 7. **Missing NX Configuration**

**Issues:**
- React/Vue packages have empty targets in `project.json`
- No explicit build/test caching configuration for wrapper libs
- Missing proper input/output definitions

**Recommendation:** Add explicit targets:

```json
// packages/react/project.json
{
  "name": "react",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "packages/react/src",
  "projectType": "library",
  "tags": [],
  "targets": {
    "build": {
      "executor": "@nx/vite:build",
      "outputs": ["{projectRoot}/dist"],
      "dependsOn": ["^build"],
      "options": {
        "configFile": "packages/react/vite.config.ts"
      }
    }
  }
}
```

**Files to change:**
- `packages/react/project.json`
- `packages/vue/project.json`

### 8. **Script Improvements**

**Current Issues:**
```json
"build:all": "npx nx reset && rm -f -r .angular && npx nx run-many -t build"
```

**Recommendations:**
- `nx reset` on every build is aggressive (clears all cache). Consider removing.
- Use Nx's built-in parallel execution better: `npx nx run-many -t build --parallel=3`
- Add a `clean` script instead: `"clean": "npx nx reset && rm -rf dist .angular"`

**Suggested scripts:**
```json
{
  "build": "npx nx run-many -t build --parallel=3",
  "build:affected": "npx nx affected -t build",
  "clean": "npx nx reset && rm -rf dist .angular",
  "dev": "npx nx run-many -t serve --parallel=3",
  "lint": "npx nx run-many -t lint",
  "test": "npx nx run-many -t test"
}
```

**Files to change:**
- `package.json` (root)

### 9. **TypeScript Configuration**

**Issue:** `tsconfig.base.json` paths reference source files:
```json
"@parlamentsdienste-components/angular": ["packages/angular/src/index.ts"]
```

**Recommendation:** For production, these should point to built artifacts. Consider separate tsconfig for development vs production builds.

**Note:** This is fine for development but be aware of implications for production builds.

**Files to review:**
- `tsconfig.base.json`

### 10. **Package Publishing Workflow**

**Current approach:** Manual pack scripts for each package

**Recommendation:**
- Use Nx release feature or changesets for versioning
- Automate the build → version → publish workflow
- The `update-versions.ts` script is good but could be integrated with Nx release

**Resources:**
- [Nx Release Documentation](https://nx.dev/features/manage-releases)
- [Changesets](https://github.com/changesets/changesets)

### 11. **Missing Features**

**Not Critical but Recommended:**

- **No CI/CD configuration files** (GitHub Actions, GitLab CI, etc.)
  - Add `.github/workflows/ci.yml` for automated testing and building

- **No husky/git hooks** for pre-commit linting/testing
  - Install husky and lint-staged
  - Add pre-commit hooks for linting and formatting

- **No commitlint** for conventional commits
  - Enforce consistent commit messages

- **No renovate/dependabot** config for dependency updates
  - Automate dependency updates

- **Coverage thresholds** not defined in vitest config
  - Add minimum coverage requirements

### 12. **Documentation Issues**

**Issues:**
- `documentation.md` contains todos and breaking changes (should be in CHANGELOG)
- Missing architecture decision records (ADRs)
- README could include development workflow

**Recommendations:**
- Create `CHANGELOG.md` for breaking changes and version history
- Move todos from `documentation.md` to GitHub Issues or project management tool
- Add `docs/architecture/` folder for ADRs
- Enhance README with:
  - Development setup instructions
  - Build process explanation
  - Contributing guidelines
  - Testing instructions

---

## Priority Recommendations

### High Priority ⚠️

1. ✅ **~~Fix Stencil version mismatch~~** - COMPLETED
   - Aligned all Stencil versions to `^4.31.0`
   - Files changed: `package.json`, `packages/core/package.json`

2. ✅ **~~Move framework deps from dependencies to devDependencies~~** - COMPLETED
   - Moved Angular, React, Vue and related packages to devDependencies
   - Files changed: `package.json`

3. **Remove duplicate workspaces config** from package.json
   - Impact: Avoid confusion, follow pnpm best practices
   - Effort: Low
   - Files: `package.json`

4. **Add explicit Nx targets** for React/Vue packages
   - Impact: Better caching, clearer build process
   - Effort: Medium
   - Files: `packages/react/project.json`, `packages/vue/project.json`

5. ✅ **~~Align Nx package versions~~** - COMPLETED
   - Aligned all Nx packages to `21.2.2`
   - Files changed: `package.json`, `packages/angular/package.json`

### Medium Priority 📋

6. **Add dual format builds (ESM + CJS)** for React/Vue wrappers
   - Impact: Better compatibility with different build systems
   - Effort: Medium
   - Files: `packages/react/vite.config.ts`, `packages/vue/vite.config.ts`, package.json files

7. **Improve build scripts** (remove excessive nx reset, add parallelization)
   - Impact: Faster builds, better developer experience
   - Effort: Low
   - Files: `package.json`

8. **Add CI/CD pipeline configuration**
   - Impact: Automated testing and deployment
   - Effort: High
   - Files: New `.github/workflows/` or `.gitlab-ci.yml`

9. **Set up git hooks** with husky + lint-staged
   - Impact: Code quality enforcement
   - Effort: Medium
   - Files: New `.husky/`, `package.json`

### Low Priority 💡

10. **Consider Nx release for versioning workflow**
    - Impact: Streamlined release process
    - Effort: High
    - Files: `nx.json`, new release configs

11. **Add automated dependency updates (Renovate)**
    - Impact: Keep dependencies up to date
    - Effort: Low
    - Files: New `renovate.json`

12. **Improve TypeScript path configuration**
    - Impact: Better type checking in production builds
    - Effort: Medium
    - Files: `tsconfig.base.json`, new tsconfig files

13. **Add missing documentation** (ADRs, contribution guide)
    - Impact: Better onboarding and knowledge sharing
    - Effort: High
    - Files: New documentation files

---

## Implementation Checklist

### Phase 1: Quick Wins (1-2 hours)
- [x] ~~Align Stencil versions~~ - COMPLETED
- [x] ~~Align Nx package versions~~ - COMPLETED
- [x] ~~Move framework deps to devDependencies~~ - COMPLETED
- [ ] Remove duplicate workspaces field
- [ ] Improve build scripts

### Phase 2: Core Improvements (4-6 hours)
- [ ] Add explicit Nx targets for React/Vue
- [ ] Add dual format builds (ESM + CJS)
- [ ] Set up git hooks (husky + lint-staged)
- [ ] Create proper CHANGELOG.md

### Phase 3: Infrastructure (1-2 days)
- [ ] Add CI/CD pipeline
- [ ] Set up automated dependency updates
- [ ] Improve documentation structure
- [ ] Consider Nx release workflow

---

## Questions to Consider

1. **Do you plan to publish these packages to npm?**
   - If yes, prioritize packaging and versioning improvements

2. **What's your typical development workflow?**
   - This will help optimize build scripts and Nx configuration

3. **Do you need CommonJS support?**
   - Some older build systems might require it

4. **Are you planning to add more framework wrappers?**
   - If yes, consider creating a template or generator

5. **What's your deployment strategy for Storybook?**
   - This affects CI/CD setup

---

## Additional Resources

- [Nx Documentation](https://nx.dev)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Stencil Output Targets](https://stenciljs.com/docs/output-targets)
- [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)

---

## Changelog

### 2025-11-10 - Updates (Latest)
- ✅ Resolved Project Dependency Management - moved framework deps to devDependencies
  - Moved Angular, React, Vue and supporting packages to devDependencies
  - Only workspace packages remain in dependencies
  - Verified builds work correctly after changes

### 2025-11-10 - Updates
- ✅ Resolved Stencil version mismatches - aligned to `^4.31.0`
- ✅ Resolved Nx version inconsistencies - aligned all packages to `21.2.2`
- Updated implementation checklist to reflect completed items

### 2025-11-10 - Initial Analysis
- Created comprehensive analysis of monorepo structure
- Identified 12 key improvement areas
- Prioritized recommendations into High/Medium/Low categories

---

**Last Updated:** 2025-11-10
**Analyzed By:** Claude Code
