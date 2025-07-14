import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { g as getURL } from './p-CjSBDARv.js';

const iconContent = new Map();
const requests = new Map();
const getSvgContent = (url) => {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        if (typeof fetch !== 'undefined') {
            // we don't already have a request
            req = fetch(url).then((rsp) => {
                if (rsp.ok) {
                    return rsp.text().then((svgContent) => {
                        iconContent.set(url, svgContent);
                    });
                }
                iconContent.set(url, '');
            });
            // cache for the same requests
            requests.set(url, req);
        }
        else {
            // set to empty for ssr scenarios and resolve promise
            iconContent.set(url, '');
            return Promise.resolve();
        }
    }
    return req;
};

const pdIconCss = ":host{display:inline-block;width:1em;height:1em;vertical-align:bottom}*,::before,::after{box-sizing:border-box;outline:none}.pd-icon-inner,.pd-icon-inner svg{display:block;height:100%;width:100%}:host(.spin){-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin-reverse{100%{-webkit-transform:rotate(-360deg)}}";

const Icon = /*@__PURE__*/ proxyCustomElement(class Icon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    io;
    wrapperElement;
    get element() { return this; }
    svgContent;
    isVisible = false;
    /**
     * Specifies the `src` url of an SVG file to use.
     */
    src;
    /**
     * Name of an icon from the provided gallery
     */
    name;
    /**
     * Size of the icon in 'rem'
     */
    size;
    /**
     * Icon will be loaded lazily when it is visible
     */
    lazy = true;
    /**
     * Rotation in 'deg'
     */
    rotate = 0;
    /**
     * Flip in X/Y direction
     */
    flip;
    /**
     * Spin animation in ms per rotation
     */
    spin;
    /** change animation direction */
    spinReverse = false;
    /** title tag in svg for accessability */
    iconTitle;
    /** description tag in svg for accessability*/
    iconDescription;
    // public componentDidLoad() {
    componentDidRender() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.element, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, cb) {
        if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            const io = (this.io = new window.IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        io.disconnect();
                        this.io = undefined;
                        cb();
                    }
                });
            }, { rootMargin }));
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    loadIcon() {
        if (this.isVisible) {
            const url = this.src || (this.name ? getURL(`./assets/icons/icon_${this.name}.svg`) : null);
            if (url) {
                if (iconContent.has(url)) {
                    // sync if it's already loaded
                    this.svgContent = iconContent.get(url);
                    this.appendSVGContent(this.svgContent, this.wrapperElement);
                }
                else {
                    // async if it hasn't been loaded
                    getSvgContent(url).then(() => {
                        this.svgContent = iconContent.get(url);
                        this.appendSVGContent(this.svgContent, this.wrapperElement);
                    });
                }
            }
        }
    }
    render() {
        const flipX = this.flip?.includes('x') ? 'scaleX(-1)' : undefined;
        const flipY = this.flip?.includes('y') ? 'scaleY(-1)' : undefined;
        const rotate = this.rotate ? `rotate(${this.rotate}deg` : undefined;
        const transformStyle = [flipX, flipY, rotate].filter(x => x !== undefined).join(' ');
        return (h(Host, { key: '875c78ddaf00a1eeeb43aa4eb7135f0b278d219b', role: "img", class: {
                spin: !!this.spin,
            }, style: {
                fontSize: this.size ? `${this.size}rem` : null,
                transform: transformStyle ?? null,
                animationDuration: this.spin ? `${this.spin}ms` : null,
                animationName: this.spinReverse ? `spin-reverse` : null,
            } }, h("div", { key: '4dbf93e7428475603d66f5be774fd902a1d9883a', class: "pd-icon-inner", ref: textarea => (this.wrapperElement = textarea) })));
    }
    appendSVGContent(svgContent, appendElement) {
        if (appendElement.hasChildNodes())
            this.removeAllChildNodes(appendElement);
        const doc = new DOMParser().parseFromString(svgContent, 'image/svg+xml');
        const svgElement = appendElement.ownerDocument.importNode(doc.documentElement, true);
        // append accessability elements
        if (this.iconDescription) {
            const descriptionElement = doc.createElement('desc');
            descriptionElement.innerHTML = this.iconDescription;
            svgElement.prepend(descriptionElement);
        }
        let titleElement = svgElement.getElementsByTagName('title').item(0);
        if (titleElement && this.iconTitle)
            titleElement.innerHTML = this.iconTitle;
        if (!titleElement && this.iconTitle) {
            titleElement = doc.createElement('title');
            titleElement.innerHTML = this.iconTitle;
            svgElement.prepend(titleElement);
        }
        appendElement.appendChild(svgElement);
    }
    removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    static get assetsDirs() { return ["assets/icons"]; }
    static get watchers() { return {
        "src": ["loadIcon"],
        "name": ["loadIcon"]
    }; }
    static get style() { return pdIconCss; }
}, [1, "pd-icon", {
        "src": [1],
        "name": [1],
        "size": [2],
        "lazy": [4],
        "rotate": [2],
        "flip": [1],
        "spin": [2],
        "spinReverse": [4, "spin-reverse"],
        "iconTitle": [1, "icon-title"],
        "iconDescription": [1, "icon-description"]
    }, undefined, {
        "src": ["loadIcon"],
        "name": ["loadIcon"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Icon);
            }
            break;
    } });
}
defineCustomElement();

export { Icon as I, defineCustomElement as d };
//# sourceMappingURL=p-CGp-npjr.js.map

//# sourceMappingURL=p-CGp-npjr.js.map