import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

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
            directivesProxyFile: '../angular/src/generated/components.ts',
            directivesArrayFile: '../angular/src/generated/index.ts',
        }),
    ],
    testing: {
        browserHeadless: 'shell',
    },
};
