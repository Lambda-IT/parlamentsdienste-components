import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdPanelFooterCss = ":host{display:flex;align-items:center;border-top:0.125em solid #dee2e6;padding:0 1rem;min-height:3em}*,::before,::after{box-sizing:border-box;outline:none}";

const PanelFooter = /*@__PURE__*/ proxyCustomElement(class PanelFooter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '550d2ae4d93265cda7d0f70a9491f0cf4bd3a416' }, h("slot", { key: 'bb6ccc07e6f1831f3443e2170cbe33d5cf8f6d22' })));
    }
    static get style() { return pdPanelFooterCss; }
}, [1, "pd-panel-footer"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-panel-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-panel-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PanelFooter);
            }
            break;
    } });
}
defineCustomElement$1();

const PdPanelFooter = PanelFooter;
const defineCustomElement = defineCustomElement$1;

export { PdPanelFooter, defineCustomElement };
//# sourceMappingURL=pd-panel-footer.js.map

//# sourceMappingURL=pd-panel-footer.js.map