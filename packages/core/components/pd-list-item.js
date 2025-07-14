import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-CGp-npjr.js';

const pdListItemCss = ":host{display:flex;align-items:center;background-color:var(--pd-list-item-background, transparent);padding:var(--pd-list-item-padding, 0.75rem 1rem)}.pd-list-item-status{width:3.125rem;display:flex;justify-content:center;align-items:center}.pd-list-item-status .pd-list-item-status-background{display:flex;justify-content:center;align-items:center;border-radius:100%;fill:#ffffff}.pd-list-item-content{flex:1 1 auto}.pd-list-item-status{margin:-0.375rem 0 -0.375rem -0.75rem}";

const ListItem = /*@__PURE__*/ proxyCustomElement(class ListItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * Status icon for list item
     */
    status;
    render() {
        return (h(Host, { key: 'b86f240b399e7d85c614b499993d8ed0f9c6fafb' }, this.renderStatus(), h("div", { key: '3f55f14bc545cd528e6e89d7b31e9dc836bfad85', class: "pd-list-item-content" }, h("slot", { key: '127bb573deaa29ffc8f46e2081932f2ce5887291' }))));
    }
    renderStatus = () => {
        if (!this.status)
            return;
        return (h("div", { class: "pd-list-item-status", "data-test": "pd-list-item-status" }, h("div", { class: `pd-list-item-status-background pd-list-item-status-${this.status}` }, this.renderIcon())));
    };
    renderIcon() {
        switch (this.status) {
            case 'success':
                return h("pd-icon", { name: "status_green", size: 2.2 });
            case 'warning':
                return h("pd-icon", { name: "status_orange", size: 2.2 });
            case 'danger':
                return h("pd-icon", { name: "status_red", size: 2.2 });
            case 'info':
                return h("pd-icon", { name: "status_blue", size: 2.2 });
            case 'unset':
                return h("pd-icon", { name: "status_undefined", size: 2.2 });
        }
    }
    static get assetsDirs() { return ["assets-list-item"]; }
    static get style() { return pdListItemCss; }
}, [1, "pd-list-item", {
        "status": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-list-item", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ListItem);
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

const PdListItem = ListItem;
const defineCustomElement = defineCustomElement$1;

export { PdListItem, defineCustomElement };
//# sourceMappingURL=pd-list-item.js.map

//# sourceMappingURL=pd-list-item.js.map