import { getAssetPath } from './index.js';

let customScriptUrl = null;
function getCustomScriptUrl() {
    if (!customScriptUrl) {
        customScriptUrl = document.querySelector('meta[name="parlamentsdienste-base-path"]')?.getAttribute('content');
    }
    return customScriptUrl;
}
function getURL(path) {
    const scriptUrl = getCustomScriptUrl();
    return scriptUrl ? new URL(path, scriptUrl).href : getAssetPath(path);
}

export { getURL as g };
//# sourceMappingURL=p-CjSBDARv.js.map

//# sourceMappingURL=p-CjSBDARv.js.map