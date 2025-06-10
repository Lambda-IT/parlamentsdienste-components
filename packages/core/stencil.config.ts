import { angularOutputTarget } from '@parlamentsdienste-components/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

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
        }),
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
