/// <reference types='vitest' />
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(() => ({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/react-test',
    server: {
        port: 4200,
        host: 'localhost',
    },
    preview: {
        port: 4300,
        host: 'localhost',
    },
    plugins: [
        react(),
        nxViteTsPaths(),
        nxCopyAssetsPlugin(['*.md']),
        viteStaticCopy({
            targets: [
                {
                    src: '../../node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/assets',
                    dest: '.',
                },
            ],
        }),
    ],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
        outDir: '../../dist/apps/react-test',
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
}));
