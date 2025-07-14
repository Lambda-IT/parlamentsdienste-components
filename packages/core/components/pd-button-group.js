import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdButtonGroupCss = ":host{display:inline-flex;vertical-align:bottom}::slotted(pd-button){--pd-button-right-radius:0;--pd-button-left-radius:0}::slotted(pd-button:first-child){--pd-button-left-radius:0.25rem}::slotted(pd-button:last-child){--pd-button-right-radius:0.25rem}";

const ButtonGroup = /*@__PURE__*/ proxyCustomElement(class ButtonGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'e0e2fdff66ed3a2265b0029e2107e13a2f12063a' }, h("slot", { key: '0f6b98875962214a71f95e8dcab9d818fb254d8c' })));
    }
    static get style() { return pdButtonGroupCss; }
}, [1, "pd-button-group"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-button-group"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-button-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ButtonGroup);
            }
            break;
    } });
}
defineCustomElement$1();

const PdButtonGroup = ButtonGroup;
const defineCustomElement = defineCustomElement$1;

export { PdButtonGroup, defineCustomElement };
//# sourceMappingURL=pd-button-group.js.map

//# sourceMappingURL=pd-button-group.js.map