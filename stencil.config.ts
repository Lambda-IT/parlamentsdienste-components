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
            copy: [{ src: 'vue.html' }, { src: 'index.html' }],
        },
    ],
    plugins: [
        sass({
            injectGlobalPaths: [
                'node_modules/bootstrap/scss/functions',
                'src/styles/variables.scss',
                'node_modules/bootstrap/scss/variables',
                'src/styles/functions.scss',
                'src/styles/mixins.scss',
            ],
        }),
    ],
};
