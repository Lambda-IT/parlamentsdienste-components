import { Config } from '@stencil/core';
import { angularOutputTarget } from '@parlamentsdienste-components/angular-output-target';

export const config: Config = {
    namespace: 'core',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
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
};
