// packages/vue-library/lib/plugin.ts

import { applyPolyfills, defineCustomElements } from '@parlamentsdienste-components/core/loader';
import { Plugin } from 'vue';

export const ComponentLibrary: Plugin = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
