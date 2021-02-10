export const namespace = 'parlamentsdienstecore'; // this should be imported into your stencil.config.ts file and used as the namespace for your project

let currentScriptUrl: string;

export function getCurrentScriptUrl(): string {
    if (!currentScriptUrl) {
        currentScriptUrl =
            document.querySelector('meta[name="parlamentsdienste-base-path"]')?.getAttribute('content') ||
            document.baseURI;
    }
    return currentScriptUrl;
}

export function getURL(path: string): string {
    return new URL(path, getCurrentScriptUrl()).href;
}
