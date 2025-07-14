import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdRadioCss = "pd-radio{display:block}:host{display:inline-block}.pd-radio-label{display:flex;align-items:center;margin:0.375rem 0;margin-top:var(--pd-radio-vertical-adjust, inherit)}.pd-radio-label .pd-radio-input{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);margin:-1px;padding:0;border:0}.pd-radio-label .pd-radio-input+.pd-radio-inner{cursor:pointer;position:relative;width:1.25rem;min-width:1.25rem;height:1.25rem}.pd-radio-label .pd-radio-input+.pd-radio-inner:before,.pd-radio-label .pd-radio-input+.pd-radio-inner:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0}.pd-radio-label .pd-radio-input+.pd-radio-inner:before{background-color:transparent}.pd-radio-label .pd-radio-input+.pd-radio-inner:after{border:0.125em solid #0b7285;border-radius:100%}.pd-radio-label .pd-radio-input:hover:enabled+.pd-radio-inner:after{border-color:#15aabf}.pd-radio-label .pd-radio-input:active:enabled+.pd-radio-inner:after{border-color:#66d9e8}.pd-radio-label .pd-radio-input:focus-visible:enabled+.pd-radio-inner:after{border-color:#0b7285;border-width:0.125rem}.pd-radio-label .pd-radio-input:focus-visible:enabled+.pd-radio-inner:before{width:1.25rem;height:1.25rem;border-radius:100%;background-color:#ffec99}.pd-radio-label .pd-radio-input:disabled+.pd-radio-inner{cursor:default}.pd-radio-label .pd-radio-input:disabled+.pd-radio-inner:after{border-color:#cfcfcf}.pd-radio-label .pd-radio-input:disabled~.pd-radio-text{font-style:italic}.pd-radio-label .pd-radio-input:checked+.pd-radio-inner:after{border:0.375rem solid #0b7285}.pd-radio-label .pd-radio-input:checked:hover:enabled+.pd-radio-inner:after{border-color:#15aabf}.pd-radio-label .pd-radio-input:checked:active:enabled+.pd-radio-inner:after{border-color:#66d9e8}.pd-radio-label .pd-radio-input:checked:focus-visible:enabled+.pd-radio-inner:after{border-color:#ffec99;border-width:0.375rem}.pd-radio-label .pd-radio-input:checked:focus-visible:enabled+.pd-radio-inner:before{width:0.625em;height:0.625em;margin:0.3em;background-color:#0b7285}.pd-radio-label .pd-radio-input:checked:disabled+.pd-radio-inner:after{border-color:#cfcfcf}.pd-radio-label.pd-radio-readonly{pointer-events:none;cursor:default}.pd-radio-label.pd-radio-readonly>.pd-radio-input+.pd-radio-inner:after{background-color:#e5e8eb;border:none}.pd-radio-label.pd-radio-readonly>.pd-radio-input:checked+.pd-radio-inner:after{content:\"\";border:0.375em solid #e5e8eb;background-color:#0b0b0b}.pd-radio-label.pd-radio-readonly>.pd-radio-input~.pd-radio-text{font-style:normal}.pd-radio-label.pd-radio-error>.pd-radio-input+.pd-radio-inner:before{background-color:transparent}.pd-radio-label.pd-radio-error>.pd-radio-input+.pd-radio-inner:after{border-color:#fa5252}.pd-radio-label.pd-radio-error>.pd-radio-input:hover:enabled+.pd-radio-inner:after{border-color:#c92a2a}.pd-radio-label.pd-radio-error>.pd-radio-input:active:enabled+.pd-radio-inner:after{border-color:#ffa8a8}.pd-radio-label.pd-radio-error>.pd-radio-input:focus-visible:enabled+.pd-radio-inner:after{border-color:#ffec99}.pd-radio-label .pd-radio-text{padding-left:0.625em;flex-grow:1;overflow:hidden;text-overflow:ellipsis}";

const Radio = /*@__PURE__*/ proxyCustomElement(class Radio extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    get element() { return this; }
    /**
     * Checks radio
     */
    checked = false;
    /**
     * Value of radio
     */
    value;
    /**
     * Label used by radio
     */
    label = null;
    /**
     * Name of radio. Used to group radios together
     */
    name = '';
    /**
     * Sets radio to disabled state
     */
    disabled = false;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly = false;
    /**
     * Default vertical adjustment for inline forms
     */
    verticalAdjust = false;
    /**
     * Shows error state
     */
    error = false;
    render() {
        const { name, value, label, checked } = this;
        return (h(Host, { key: 'ded30f87c639b7142ae8b87314b909e35b7b2120', role: "radio", "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("label", { key: '3ea0933d06f113087e2c4ed7c39889bd2a982aea', class: {
                'pd-radio-label': true,
                'pd-radio-readonly': this.readonly,
                'pd-radio-error': this.error,
            }, style: this.verticalAdjust ? { '--pd-radio-vertical-adjust': '2.3rem' } : {}, "data-test": "pd-radio-label" }, h("input", { key: 'c08bad9b59250a7532664781c285c08dbd9cd40a', class: "pd-radio-input", type: "radio", checked: checked, name: name, value: value, disabled: this.disabled || this.readonly }), h("div", { key: 'd6de4a6bf77a2ecd932bc30fe93d8ea491487326', class: "pd-radio-inner" }), h("div", { key: '73d692d127b269574e77eeec0faaf0462f681dca', class: "pd-radio-text", "data-test": "pd-radio-text" }, label))));
    }
    static get style() { return pdRadioCss; }
}, [0, "pd-radio", {
        "checked": [4],
        "value": [8],
        "label": [1],
        "name": [513],
        "disabled": [4],
        "readonly": [4],
        "verticalAdjust": [4, "vertical-adjust"],
        "error": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-radio"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Radio);
            }
            break;
    } });
}
defineCustomElement$1();

const PdRadio = Radio;
const defineCustomElement = defineCustomElement$1;

export { PdRadio, defineCustomElement };
//# sourceMappingURL=pd-radio.js.map

//# sourceMappingURL=pd-radio.js.map