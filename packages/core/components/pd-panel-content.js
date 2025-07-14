import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdPanelContentCss = "pd-panel-content{display:block;position:relative;padding:var(--pd-panel-content-padding, 1rem);overflow-x:auto}";

const PanelContent = /*@__PURE__*/ proxyCustomElement(class PanelContent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'a076360269959b726ea73c0ea294fe0cd356ee88' }, h("slot", { key: 'eddf03357cabde239aca15180c8ea41d2c91f3ce' })));
    }
    static get style() { return pdPanelContentCss; }
}, [4, "pd-panel-content"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-panel-content"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-panel-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PanelContent);
            }
            break;
    } });
}
defineCustomElement$1();

const PdPanelContent = PanelContent;
const defineCustomElement = defineCustomElement$1;

export { PdPanelContent, defineCustomElement };
//# sourceMappingURL=pd-panel-content.js.map

//# sourceMappingURL=pd-panel-content.js.map