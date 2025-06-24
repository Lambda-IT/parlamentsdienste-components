import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-5FWjR2L-.js';
import { d as defineCustomElement$1 } from './p-CGgTmFwB.js';

const pdDropdownItemCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block}*,::before,::after{box-sizing:border-box;outline:none}:host(.pd-dropdown-current-navigating-item){background-color:#ffec99;color:#0b0b0b}.pd-dropdown-item{width:100%;padding:0.75rem 0.825rem;display:flex;align-items:center;cursor:pointer;height:3rem}.pd-dropdown-item:hover{background-color:#ffec99;color:#0b0b0b}.pd-dropdown-item:active{background-color:#66d9e8;color:#033840}.pd-dropdown-item strong{font-weight:bold}.pd-dropdown-item span{white-space:pre;overflow-x:hidden;text-overflow:ellipsis}.pd-dropdown-item.pd-dropdown-item-selected{background-color:#e5e8eb;color:#0b0b0b}.pd-dropdown-item.pd-dropdown-item-selected:hover{background-color:#ffec99;color:#0b0b0b}.pd-dropdown-item.pd-dropdown-item-selected:active{background-color:#66d9e8;color:#033840}.pd-dropdown-item .pd-dropdown-item-icon{margin-left:-0.25rem;margin-right:0.25rem;flex:0 0 2rem}";

const DropdownItem = /*@__PURE__*/ proxyCustomElement(class DropdownItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get element() { return this; }
    /**
     * Value for this item
     */
    value = '';
    /**
     * Sets this item to selected
     */
    selected = false;
    /**
     * If `true`, the item displays a checkbox (for multiselect comboboxes).
     */
    multiselect = false;
    /**
     * Find an highlight this text in value
     */
    highlight;
    /**
     * Displays an item from the provided gallery
     */
    iconName;
    /**
     * Specifies the `src` url of an SVG file to use as icon.
     */
    iconSrc;
    render() {
        return (h(Host, { key: '2d2c88b44879cfb2a2ba6240020ddb6bd3343b75' }, h("div", { key: '434d9b9acea285f95d3a82e211957f2b88237fd3', class: { 'pd-dropdown-item': true, 'pd-dropdown-item-selected': this.selected && !this.multiselect } }, this.multiselect ? h("pd-checkbox", { checked: this.selected }) : null, this.iconName || this.iconSrc ? (h("span", { class: "pd-dropdown-item-icon" }, h("pd-icon", { name: this.iconName ?? null, src: this.iconSrc ?? null, size: 2 }))) : (''), h("span", { key: '5858ed6b0d126a5e8e6b2b875af68fbc4baa7c24', innerHTML: this.strong(this.value, this.highlight?.toString()), "data-test": "pd-dropdown-item-text" }))));
    }
    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    strong = (value, strong = undefined) => {
        if (!strong || strong.length === 0)
            return value;
        const regexp = new RegExp(`((.*?)(${this.escapeRegExp(strong)})(.*?))+?`, 'gi');
        return value.replace(regexp, '$2<strong>$3</strong>$4');
    };
    static get style() { return pdDropdownItemCss; }
}, [1, "pd-dropdown-item", {
        "value": [1],
        "selected": [4],
        "multiselect": [4],
        "highlight": [8],
        "iconName": [1, "icon-name"],
        "iconSrc": [1, "icon-src"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-dropdown-item", "pd-checkbox", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-dropdown-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownItem);
            }
            break;
        case "pd-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "pd-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { DropdownItem as D, defineCustomElement as d };
//# sourceMappingURL=p-C-RvljPW.js.map

//# sourceMappingURL=p-C-RvljPW.js.map