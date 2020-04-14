export const iconContent = new Map<string, string>();
const requests = new Map<string, Promise<any>>();

export const getSvgContent = (url: string) => {
    // see if we already have a request for this url
    let req = requests.get(url);

    if (!req) {
        if (typeof fetch !== 'undefined') {
            // we don't already have a request
            req = fetch(url).then(rsp => {
                if (rsp.ok) {
                    return rsp.text().then(svgContent => {
                        iconContent.set(url, validateContent(svgContent));
                    });
                }
                iconContent.set(url, '');
            });

            // cache for the same requests
            requests.set(url, req);
        } else {
            // set to empty for ssr scenarios and resolve promise
            iconContent.set(url, '');
            return Promise.resolve();
        }
    }

    return req;
};

export const validateContent = (svgContent: string | null) => {
    if (svgContent && typeof document !== 'undefined') {
        const div = document.createElement('div');
        div.innerHTML = svgContent;

        // setup this way to ensure it works on our buddy IE
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }

        // must only have 1 root element
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            const svgClass = svgElm.getAttribute('class') || '';
            svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim());

            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm as any)) {
                return div.innerHTML;
            }
        }
    }
    return '';
};

export const isValid = (elm: HTMLElement) => {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }

        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }

        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i] as any)) {
                return false;
            }
        }
    }
    return true;
};

export const isStr = (val: any): val is string => typeof val === 'string';
