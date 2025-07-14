import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdMenuItemCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block}*,::before,::after{box-sizing:border-box;outline:none}.pd-menu-item{width:100%;padding:0.5rem 0.5rem;display:flex;align-items:center;cursor:pointer;color:#0b7285;fill:#0b7285;border:none;background-color:#ffffff}.pd-menu-item .pd-menu-item-text{margin-left:0.5rem}.pd-menu-item:hover{background-color:#0b7285;color:#ffffff;fill:#ffffff}.pd-menu-item:active{background-color:#66d9e8;color:#0b0b0b;fill:#0b0b0b}.pd-menu-item strong{font-weight:bold}.pd-menu-item span{white-space:pre;overflow-x:hidden;text-overflow:ellipsis}.pd-menu-item:disabled{cursor:default;color:#cfcfcf;fill:#cfcfcf}.pd-menu-item:disabled:hover{background-color:#ffffff}";

const MenuItem = /*@__PURE__*/ proxyCustomElement(class MenuItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get element() { return this; }
    /**
     * Text for this item
     */
    text = '';
    /**
     * Sets item to disbaled state
     */
    disabled = false;
    render() {
        return (h(Host, { key: '3eb2309c0f246d0228eaf9f0106a07ffb8664a21' }, h("button", { key: '44b7820595e1fd8668f78e35ea7a21466acdbbff', class: "pd-menu-item", disabled: this.disabled }, h("slot", { key: 'b5a14e8210f5d2608b62d7412c5c4db936a02cd9' }), h("div", { key: 'cb56ee9c2d55badebea78f2107486463e99cbe6e', class: "pd-menu-item-text", "data-test": "pd-menu-item-text" }, this.text))));
    }
    static get style() { return pdMenuItemCss; }
}, [1, "pd-menu-item", {
        "text": [1],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-menu-item"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-menu-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuItem);
            }
            break;
    } });
}
defineCustomElement$1();

const PdMenuItem = MenuItem;
const defineCustomElement = defineCustomElement$1;

export { PdMenuItem, defineCustomElement };
//# sourceMappingURL=pd-menu-item.js.map

//# sourceMappingURL=pd-menu-item.js.map