import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-CGp-npjr.js';

const pdSidebarItemCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block}*,::before,::after{box-sizing:border-box;outline:none}.pd-sidebar-item{display:flex;flex-direction:column;align-items:center;justify-content:center;width:5.5rem;height:5rem;color:#033840;fill:#033840;border:none;overflow:hidden;text-decoration:none;background-color:transparent;cursor:pointer}.pd-sidebar-item *{font-size:0.6875rem;line-height:0.75rem;font-weight:700}.pd-sidebar-item.pd-sidebar-active{background-color:#f5f5f5;color:#033840}.pd-sidebar-item:hover{background-color:#15aabf;color:#ffffff;fill:#ffffff}.pd-sidebar-item:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-sidebar-item:active{background-color:#66d9e8;color:#033840;fill:#033840}.pd-sidebar-text{text-align:center;padding:0 0.375rem}.pd-sidebar-icon{padding:0.375rem;font-weight:normal;font-size:1rem}";

const SidebarItem = /*@__PURE__*/ proxyCustomElement(class SidebarItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * Item text
     */
    text = '';
    /**
     * show an item as active
     */
    active = false;
    /**
     * Set href to create a link button
     */
    href;
    /**
     * Path to an svg asset
     */
    icon;
    /**
     * Name of an icon from the library
     */
    iconName;
    /**
     * Icon size
     */
    size = 2;
    /**
     * Sets target for link button e.g. '_blank'
     */
    target = '_blank';
    render() {
        const { href, active, text, target } = this;
        const TagType = href ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? {} : { href, target };
        return (h(TagType, { key: '42115c1907ed41c2e1865e2373ebb69c785913ef', ...typeAttrs, class: { 'pd-sidebar-item': true, 'pd-sidebar-active': active } }, h("div", { key: 'fe3c8704779c5f569d03bf0de04998b96f6adafb', class: "pd-sidebar-icon" }, this.renderIcon()), h("div", { key: 'aaf6c8a7b3eea2e9efdbc8b94408b46fa55cf504', class: "pd-sidebar-text", "data-test": "pd-sidebar-item-text" }, text)));
    }
    renderIcon() {
        if (this.iconName)
            return h("pd-icon", { name: this.iconName, size: this.size });
        return h("pd-icon", { src: this.icon, size: this.size, "data-test": "pd-sidebar-item-icon" });
    }
    static get style() { return pdSidebarItemCss; }
}, [1, "pd-sidebar-item", {
        "text": [1],
        "active": [4],
        "href": [1],
        "icon": [1],
        "iconName": [1, "icon-name"],
        "size": [2],
        "target": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-sidebar-item", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-sidebar-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SidebarItem);
            }
            break;
        case "pd-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const PdSidebarItem = SidebarItem;
const defineCustomElement = defineCustomElement$1;

export { PdSidebarItem, defineCustomElement };
//# sourceMappingURL=pd-sidebar-item.js.map

//# sourceMappingURL=pd-sidebar-item.js.map