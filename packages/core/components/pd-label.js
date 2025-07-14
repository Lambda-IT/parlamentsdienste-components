import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdLabelCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:inline-block}*,::before,::after{box-sizing:border-box;appearance:none;outline:none;line-height:1}.pd-label{display:inline-flex;align-items:center;font-size:0.875rem;font-weight:700;background-color:#dee2e6;border-radius:0.8rem;color:var(--pd-label-text-color, #0b0b0b);padding:0.25rem 0.5rem}.pd-label .pd-label-dot{display:inline-block;background-color:#bababa;width:0.75rem;height:0.75rem;border-radius:100%;margin-right:0.25rem}";

const Label = /*@__PURE__*/ proxyCustomElement(class Label extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * Switch between background and dot color mode
     */
    hasDot = false;
    /**
     * Background or dot color depending on hasDot
     */
    color;
    render() {
        return (h(Host, { key: 'df174fc3c6e4a3c11b843d982af46fe1fe2af052' }, h("span", { key: '8746bd23fb809a7226efa9d639d948a378303b14', class: "pd-label", style: !this.hasDot && this.color ? { 'background-color': this.color } : {} }, this.renderDot(), h("slot", { key: 'e4d27559753817b767dddd06c0a55a93d9094fcd' }))));
    }
    renderDot() {
        if (!this.hasDot)
            return;
        return h("div", { class: "pd-label-dot", style: { 'background-color': this.color } });
    }
    static get style() { return pdLabelCss; }
}, [1, "pd-label", {
        "hasDot": [4, "has-dot"],
        "color": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-label"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Label);
            }
            break;
    } });
}
defineCustomElement$1();

const PdLabel = Label;
const defineCustomElement = defineCustomElement$1;

export { PdLabel, defineCustomElement };
//# sourceMappingURL=pd-label.js.map

//# sourceMappingURL=pd-label.js.map