import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdListCss = "pd-list{display:flex;flex-direction:column;padding:var(--pd-list-content-padding, 0)}pd-list pd-list-item{border-bottom:0.125rem solid var(--pd-list-border-color, #dee2e6)}pd-list pd-list-item:last-child{border-bottom:none}";

const List = /*@__PURE__*/ proxyCustomElement(class List extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '3fd103834e86d18cd7ec51f1980c4260ef2f43f6' }, h("slot", { key: '0cc63e44cc112c2f252876b15cd5c12949b26bc5' })));
    }
    static get style() { return pdListCss; }
}, [4, "pd-list"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-list"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, List);
            }
            break;
    } });
}
defineCustomElement$1();

const PdList = List;
const defineCustomElement = defineCustomElement$1;

export { PdList, defineCustomElement };
//# sourceMappingURL=pd-list.js.map

//# sourceMappingURL=pd-list.js.map