import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'componentlibrary',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
    plugins: [
        sass({
            injectGlobalPaths: [
                'src/styles/functions.scss',
                'src/styles/variables.scss',
                'src/styles/mixins.scss',
                'src/styles/typography.scss',
            ],
        }),
    ],
};
