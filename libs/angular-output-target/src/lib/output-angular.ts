import type { CompilerCtx, ComponentCompilerMeta, ComponentCompilerProperty, Config } from '@stencil/core/internal';
import { dirname, join } from 'path';
import { createAngularComponentDefinition, createComponentTypeDefinition } from './generate-angular-component';
import { generateAngularDirectivesFile } from './generate-angular-directives-file';
import { generateAngularModuleForComponent } from './generate-angular-modules';
import generateValueAccessors from './generate-value-accessors';
import type { OutputTargetAngular, PackageJSON } from './types';
import {
    createImportStatement,
    dashToPascalCase,
    isOutputTypeCustomElementsBuild,
    normalizePath,
    OutputTypes,
    readPackageJson,
    relativeImport,
    sortBy,
} from './utils';

export async function angularDirectiveProxyOutput(
    compilerCtx: CompilerCtx,
    outputTarget: OutputTargetAngular,
    components: ComponentCompilerMeta[],
    config: Config,
) {
    const filteredComponents = getFilteredComponents(outputTarget.excludeComponents, components);
    const rootDir = config.rootDir as string;
    const pkgData = await readPackageJson(config, rootDir);

    const finalText = generateProxies(filteredComponents, pkgData, outputTarget, config.rootDir as string);

    await Promise.all([
        compilerCtx.fs.writeFile(outputTarget.directivesProxyFile, finalText),
        copyResources(config, outputTarget),
        generateAngularDirectivesFile(compilerCtx, filteredComponents, outputTarget),
        generateValueAccessors(compilerCtx, filteredComponents, outputTarget, config),
    ]);
}

function getFilteredComponents(excludeComponents: string[] = [], cmps: ComponentCompilerMeta[]) {
    return sortBy(cmps, cmp => cmp.tagName).filter(c => !excludeComponents.includes(c.tagName) && !c.internal);
}

async function copyResources(config: Config, outputTarget: OutputTargetAngular) {
    if (!config.sys || !config.sys.copy || !config.sys.glob) {
        throw new Error('stencil is not properly initialized at this step. Notify the developer');
    }
    const srcDirectory = join(__dirname, '../../../angular-component-lib');
    const destDirectory = join(dirname(outputTarget.directivesProxyFile), '..', '/generated/', 'angular-component-lib');

    return config.sys.copy(
        [
            {
                src: srcDirectory,
                dest: destDirectory,
                keepDirStructure: false,
                warn: false,
                ignore: [],
            },
        ],
        srcDirectory,
    );
}

export function generateProxies(
    components: ComponentCompilerMeta[],
    pkgData: PackageJSON,
    outputTarget: OutputTargetAngular,
    rootDir: string,
) {
    const distTypesDir = dirname(pkgData.types);
    const dtsFilePath = join(rootDir, distTypesDir, GENERATED_DTS);
    const { outputType } = outputTarget;
    const componentsTypeFile = relativeImport(outputTarget.directivesProxyFile, dtsFilePath, '.d.ts');
    const includeSingleComponentAngularModules = outputType === OutputTypes['Scam'];
    const isCustomElementsBuild = isOutputTypeCustomElementsBuild(outputType!);
    const isStandaloneBuild = outputType === OutputTypes['Standalone'];
    const includeOutputImports = components.some(component => component.events.some(event => !event.internal));

    /**
     * The collection of named imports from @angular/core.
     */
    const angularCoreImports = ['ChangeDetectionStrategy', 'ChangeDetectorRef', 'Component', 'ElementRef'];

    if (includeOutputImports) {
        angularCoreImports.push('EventEmitter');
    }

    angularCoreImports.push('NgZone');

    /**
     * The collection of named imports from the angular-component-lib/utils.
     */
    const componentLibImports = ['ProxyCmp'];

    if (includeOutputImports) {
        componentLibImports.push('proxyOutputs');
    }

    if (includeSingleComponentAngularModules) {
        angularCoreImports.push('NgModule');
    }

    const imports = `/* tslint:disable */
/* auto-generated angular directive proxies */
${createImportStatement(angularCoreImports, '@angular/core')}

${createImportStatement(componentLibImports, './../generated/angular-component-lib/utils')}\n`;
    /**
     * Generate JSX import type from correct location.
     * When using custom elements build, we need to import from
     * either the "components" directory or customElementsDir
     * otherwise we risk bundlers pulling in lazy loaded imports.
     */
    const generateTypeImports = () => {
        const importLocation = outputTarget.componentCorePackage
            ? normalizePath(outputTarget.componentCorePackage)
            : normalizePath(componentsTypeFile);
        return `import ${isCustomElementsBuild ? 'type ' : ''}{ ${IMPORT_TYPES} } from '${importLocation}';\n`;
    };

    const typeImports = generateTypeImports();

    let sourceImports = '';

    /**
     * Build an array of Custom Elements build imports and namespace them
     * so that they do not conflict with the Angular wrapper names. For example,
     * IonButton would be imported as IonButtonCmp so as to not conflict with the
     * IonButton Angular Component that takes in the Web Component as a parameter.
     */
    if (isCustomElementsBuild && outputTarget.componentCorePackage !== undefined) {
        const cmpImports = components.map(component => {
            const pascalImport = dashToPascalCase(component.tagName);

            return `import { defineCustomElement as define${pascalImport} } from '${normalizePath(
                outputTarget.componentCorePackage,
            )}/${outputTarget.customElementsDir}/${component.tagName}.js';`;
        });

        sourceImports = cmpImports.join('\n');
    }

    const proxyFileOutput = [];

    const filterInternalProps = (prop: { name: string; internal: boolean }) => !prop.internal;
    const mapPropName = (prop: { name: string }) => prop.name;

    const { componentCorePackage, customElementsDir } = outputTarget;

    for (const cmpMeta of components) {
        const tagNameAsPascal = dashToPascalCase(cmpMeta.tagName);

        const internalProps: ComponentCompilerProperty[] = [];

        if (cmpMeta.properties) {
            internalProps.push(...cmpMeta.properties.filter(filterInternalProps));
        }

        const inputs = internalProps.map(mapPropName);

        if (cmpMeta.virtualProperties) {
            inputs.push(...cmpMeta.virtualProperties.map(mapPropName));
        }

        inputs.sort();

        const outputs: string[] = [];

        if (cmpMeta.events) {
            outputs.push(...cmpMeta.events.filter(filterInternalProps).map(mapPropName));
        }

        const methods: string[] = [];

        if (cmpMeta.methods) {
            methods.push(...cmpMeta.methods.filter(filterInternalProps).map(mapPropName));
        }

        const inlineComponentProps = outputTarget.inlineProperties ? internalProps : [];

        /**
         * For each component, we need to generate:
         * 1. The @Component decorated class
         * 2. Optionally the @NgModule decorated class (if includeSingleComponentAngularModules is true)
         * 3. The component interface (using declaration merging for types).
         */
        const componentDefinition = createAngularComponentDefinition(
            cmpMeta.tagName,
            inputs,
            outputs,
            methods,
            isCustomElementsBuild,
            isStandaloneBuild,
            inlineComponentProps,
            outputTarget.valueAccessorConfigs,
        );
        const moduleDefinition = generateAngularModuleForComponent(cmpMeta.tagName);
        const componentTypeDefinition = createComponentTypeDefinition(
            outputType!,
            tagNameAsPascal,
            cmpMeta.events,
            componentCorePackage,
            customElementsDir,
        );

        proxyFileOutput.push(componentDefinition, '\n');
        if (includeSingleComponentAngularModules) {
            proxyFileOutput.push(moduleDefinition, '\n');
        }
        proxyFileOutput.push(componentTypeDefinition, '\n');
    }

    const final: string[] = [imports, typeImports, sourceImports, ...proxyFileOutput];

    return final.join('\n') + '\n';
}

const GENERATED_DTS = 'components.d.ts';
const IMPORT_TYPES = 'Components';
