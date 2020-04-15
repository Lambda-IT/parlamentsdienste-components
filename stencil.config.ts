import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'ParlamentsdiensteCore',
    srcDir: 'src',
    srcIndexHtml: 'vue.html',
    globalStyle: 'src/styles/pd-bootstrap.scss',
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
            copy: [
                { src: 'vue.html' },
                { src: 'index.html' },
              ]
        },
    ],
    plugins: [
        sass({
            injectGlobalPaths: [
                'src/styles/variables.scss',
                'src/styles/functions.scss',
                'src/styles/mixins.scss',
            ],
        }),
    ],
};
