export const namespace = 'parlamentsdienstecore'; // this should be imported into your stencil.config.ts file and used as the namespace for your project

let currentScriptUrl: string;

export function getCurrentScriptUrl(): string {
    if (!currentScriptUrl) {
        const script = Array.from(document.querySelectorAll('script')).find((s) =>
            new RegExp(`${namespace}(\.esm)?\.js$`).test(s.src),
        );
        currentScriptUrl = (script && script.src) || document.baseURI;
    }
    return currentScriptUrl;
}

export function getURL(path: string): string {
    return new URL(path, getCurrentScriptUrl()).href;
}
