import { p as proxyCustomElement, H, h } from './index.js';

const pdNavbarItemCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block;padding:0 1em}*,::before,::after{box-sizing:border-box;outline:none}.pd-navbar-item{display:inline-block;padding:0.0625rem 0.375rem;background-color:transparent;border:none;color:#66d9e8;font-weight:700;text-decoration:none;cursor:pointer}.pd-navbar-item:hover{color:#ffffff}.pd-navbar-item:focus-visible{color:#ffec99}.pd-navbar-item:active{color:#15aabf}";

const NavbarItem = /*@__PURE__*/ proxyCustomElement(class NavbarItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    text = '';
    enabled = false;
    /**
     * Set href to create a link button
     */
    href;
    /**
     * Sets target for link button e.g. '_blank'
     */
    target = '_blank';
    render() {
        const { href, enabled, target, text } = this;
        const TagType = href ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? {} : { href, target };
        return (h(TagType, { key: '03bc7c87aa13d2b3d3c3fde007a3b8e1525f72b7', ...typeAttrs, class: `pd-navbar-item ${enabled ? 'pd-navbar-enabled' : ''}` }, h("span", { key: '8647258ed8ddd2caea7a4ea2bd33ab2f53aba797', class: "pd-navbar-text", "data-test": "pd-navbar-text" }, text)));
    }
    static get style() { return pdNavbarItemCss; }
}, [1, "pd-navbar-item", {
        "text": [1],
        "enabled": [4],
        "href": [1],
        "target": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-navbar-item"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-navbar-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, NavbarItem);
            }
            break;
    } });
}
defineCustomElement$1();

const PdNavbarItem = NavbarItem;
const defineCustomElement = defineCustomElement$1;

export { PdNavbarItem, defineCustomElement };
//# sourceMappingURL=pd-navbar-item.js.map

//# sourceMappingURL=pd-navbar-item.js.map