import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { mdGenerator, mdxGenerator } from './utils/markdown';

export const config: Config = {
  namespace: 'ParlamentsdiensteCore',
  globalStyle: 'src/styles/pd-bootstrap.scss',
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'styles/typography.css', dest: 'typography.css' },
        { src: 'assets/fonts', dest: 'assets-fonts' },
      ],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => mdGenerator(docs),
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => mdxGenerator(docs),
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'styles/typography.css', dest: 'build/typography.css' }],
    },
    angularOutputTarget({
      componentCorePackage: '@lambda-it/parlamentsdienste-component-library',
      outputType: 'component',
      directivesProxyFile: './dist/angular/components.ts',
      directivesArrayFile: './dist/angular/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@lambda-it/parlamentsdienste-component-library',
      proxiesFile: './dist/vue/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/variables',
        'src/styles/functions',
        'src/styles/mixins',
        'node_modules/bootstrap/scss/functions',
        'node_modules/bootstrap/scss/mixins',
        'node_modules/bootstrap/scss/variables',
      ],
    }),
  ],
};
