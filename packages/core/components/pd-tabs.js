import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const pdTabsCss = ":host{display:flex}*,::before,::after{font-weight:500;box-sizing:border-box;appearance:none;outline:none}.pd-tabs-visually-hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.pd-tabs-control .pd-tabs-label .pd-tabs-radio:checked+.pd-tabs-text{background-color:#033840;color:#ffffff}.pd-tabs-control .pd-tabs-label .pd-tabs-radio:focus-visible+.pd-tabs-text{background-color:#ffec99;color:#033840}.pd-tabs-control .pd-tabs-label .pd-tabs-text{display:block;cursor:pointer;background-color:#e3e0e0;color:#0b0b0b;padding:0.5rem 1.5rem;line-height:1.375rem;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pd-tabs-control .pd-tabs-label .pd-tabs-text:hover{background-color:#15aabf;color:#ffffff}.pd-tabs-control .pd-tabs-label .pd-tabs-text:active{background-color:#0b7285;color:#ffffff}.pd-tabs-control.pd-tabs-light .pd-tabs-label{background-color:transparent}.pd-tabs-control.pd-tabs-light .pd-tabs-label .pd-tabs-radio:checked+.pd-tabs-text{background-color:transparent;color:#0b0b0b;border-bottom:0.125rem solid #033840}.pd-tabs-control.pd-tabs-light .pd-tabs-label .pd-tabs-radio:focus-visible+.pd-tabs-text{background-color:#ffec99;color:#033840}.pd-tabs-control.pd-tabs-light .pd-tabs-label .pd-tabs-text{background-color:transparent;color:#0b7285}.pd-tabs-control.pd-tabs-light .pd-tabs-label .pd-tabs-text:hover{background-color:transparent;color:#15aabf}.pd-tabs-control.pd-tabs-light .pd-tabs-label .pd-tabs-text:active{background-color:transparent;color:#66d9e8}";

const Tabs = /*@__PURE__*/ proxyCustomElement(class Tabs extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdChange = createEvent(this, "pd-change");
    }
    tabsId = `${tabsIds++}`;
    /**
     * List of tab texts
     */
    tabs = [];
    /**
     * Light mode
     */
    light = false;
    /**
     * Emitted when the value has changed.
     */
    pdChange;
    onChange = (tab) => {
        this.pdChange.emit(tab);
    };
    render() {
        return (h(Host, { key: '330fdd36065d325332d74834c8cc1277bfb6dc8b' }, this.tabs.map((tab, i) => {
            return (h("div", { class: { 'pd-tabs-control': true, 'pd-tabs-light': this.light }, "data-test": `pd-tabs-control-${i}` }, h("label", { class: "pd-tabs-label" }, h("input", { checked: tab?.checked, class: "pd-tabs-radio pd-tabs-visually-hidden", type: "radio", name: `pd-tabs-${this.tabsId}`, onChange: () => this.onChange(tab), "data-test": `pd-tabs-radio-${i}` }), h("span", { class: "pd-tabs-text", "data-test": "pd-tabs-text" }, tab.text))));
        })));
    }
    static get style() { return pdTabsCss; }
}, [1, "pd-tabs", {
        "tabs": [16],
        "light": [4]
    }]);
let tabsIds = 0;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-tabs"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tabs);
            }
            break;
    } });
}
defineCustomElement$1();

const PdTabs = Tabs;
const defineCustomElement = defineCustomElement$1;

export { PdTabs, defineCustomElement };
//# sourceMappingURL=pd-tabs.js.map

//# sourceMappingURL=pd-tabs.js.map