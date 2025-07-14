import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { c as clamp } from './p-BSH2m8vG.js';

const pdProgressBarCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:flex;position:relative}*,::before,::after{box-sizing:border-box;outline:none}.pd-progress-bar-background{display:flex;height:1rem;overflow:hidden;font-size:0.75em;line-height:1rem;background-color:#dee2e6;border-radius:0.25em;width:100%}.pd-progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;text-align:center;white-space:nowrap;width:100%;height:1rem;background-color:#0b7285;transform-origin:left top;transition:width 200ms ease;color:#ffffff}.pd-progress-bar.pd-progress-bar-success{background-color:#5c940d;color:#ffffff}.pd-progress-bar.pd-progress-bar-warning{background-color:#df7900;color:#ffffff}.pd-progress-bar.pd-progress-bar-danger{background-color:#c92a2a;color:#ffffff}.pd-progress-bar.pd-progress-bar-info{background-color:#1864ab;color:#ffffff}.pd-progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}";

const ProgressBar = /*@__PURE__*/ proxyCustomElement(class ProgressBar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * status color of progress-bar
     */
    color = 'primary';
    /**
     * current value of progress bar 0.0 to 1.0
     */
    value = 0.0;
    /**
     * description of progress-bar
     */
    label = false;
    /**
     * decimals of value
     */
    decimals = 2;
    /**
     * show striped version of progress-bar
     */
    striped = false;
    render() {
        return h(Host, { key: '607dc4eb3f6b17a8075b49c5dd30090cb028f083' }, this.renderDeterminate(this.value, this.decimals));
    }
    renderDeterminate(value, decimals = 2) {
        const finalValue = clamp(0, value, 1) || 0;
        const percent = parseFloat((finalValue * 100).toFixed(decimals));
        return (h("div", { class: "pd-progress-bar-background" }, h("div", { class: {
                'pd-progress-bar': true,
                'pd-progress-bar-striped': this.striped,
                [`pd-progress-bar-${this.color}`]: !!this.color,
            }, style: { width: `${percent}%` }, "data-test": "pd-progress-bar" }, this.label ? `${percent}%` : '')));
    }
    static get style() { return pdProgressBarCss; }
}, [1, "pd-progress-bar", {
        "color": [1],
        "value": [2],
        "label": [4],
        "decimals": [2],
        "striped": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-progress-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-progress-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProgressBar);
            }
            break;
    } });
}
defineCustomElement$1();

const PdProgressBar = ProgressBar;
const defineCustomElement = defineCustomElement$1;

export { PdProgressBar, defineCustomElement };
//# sourceMappingURL=pd-progress-bar.js.map

//# sourceMappingURL=pd-progress-bar.js.map