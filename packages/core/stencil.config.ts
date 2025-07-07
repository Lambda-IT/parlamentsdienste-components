import { angularOutputTarget } from '@parlamentsdienste-components/angular-output-target';
import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { sass } from '@stencil/sass';
import { mdxGenerator } from './utils/markdown';

export const config: Config = {
    namespace: 'ParlamentsdiensteCore',
    globalStyle: 'src/styles/pd-bootstrap.scss',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
            copy: [
                { src: 'styles/typography.css', dest: 'typography.css' },
                { src: 'assets/fonts', dest: 'assets/fonts' },
            ],
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'auto-define-custom-elements',
            externalRuntime: false,
            dir: 'components',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
            copy: [{ src: 'styles/typography.css', dest: 'build/typography.css' }],
        },
        angularOutputTarget({
            componentCorePackage: '@parlamentsdienste-components/core',
            outputType: 'standalone',
            directivesProxyFile: '../angular/src/lib/angular/components.ts',
            directivesArrayFile: '../angular/src/lib/angular/index.ts',
            valueAccessorConfigs: [
                // ℹ️ there is a INPUTMAP in the value-accessor.ts file, who maps the input property to the output event of the components
                // Don't forget to update the INPUTMAP if you add a new component
                // --> packages/angular/src/lib/angular/value-accessor.ts
                {
                    elementSelectors: ['pd-input', 'pd-radio-group', 'pd-textarea', 'pd-slider'],
                    event: 'pd-change',
                    targetAttr: 'value',
                    type: 'text',
                },
                {
                    elementSelectors: ['pd-checkbox'],
                    event: 'pd-checked',
                    targetAttr: 'value',
                    type: 'boolean',
                },
                {
                    elementSelectors: ['pd-datepicker'],
                    event: 'pd-change',
                    targetAttr: 'date',
                    type: 'text',
                },
                {
                    elementSelectors: ['pd-dropdown', 'pd-combobox'],
                    event: 'pd-change',
                    targetAttr: 'selected',
                    type: 'text',
                },
            ],
            // excludeComponents: ['pd-input'],
        }),
        {
            type: 'docs-readme',
        },
        {
            type: 'docs-custom',
            generator: (docs: JsonDocs) => mdxGenerator(docs),
        },
    ],
    testing: {
        browserHeadless: 'shell',
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
