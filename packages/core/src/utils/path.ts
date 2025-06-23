import { getAssetPath } from '@stencil/core';

export const namespace = 'parlamentsdienstecore'; // this should be imported into your stencil.config.ts file and used as the namespace for your project

let customScriptUrl: string = null;

export function getCustomScriptUrl(): string {
    if (!customScriptUrl) {
        customScriptUrl = document.querySelector('meta[name="parlamentsdienste-base-path"]')?.getAttribute('content');
    }
    return customScriptUrl;
}

export function getURL(path: string): string {
    const scriptUrl = getCustomScriptUrl();
    return scriptUrl ? new URL(path, scriptUrl).href : getAssetPath(path);
}
