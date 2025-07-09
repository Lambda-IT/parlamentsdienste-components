import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const pdCheckboxCss = ":host{display:block}*,::before,::after{box-sizing:border-box;appearance:none;outline:none}.pd-checkbox-label{display:flex;align-items:center;margin-top:var(--pd-checkbox-vertical-adjust, inherit)}.pd-checkbox-label .pd-checkbox-input{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);margin:-1px;padding:0;border:0}.pd-checkbox-label .pd-checkbox-input+.pd-checkbox-inner{cursor:pointer;position:relative;width:1.25rem;min-width:1.25rem;height:1.25rem;background-color:var(--pd-checkbox-background-color, transparent);border-radius:0.25rem}.pd-checkbox-label .pd-checkbox-input+.pd-checkbox-inner:before,.pd-checkbox-label .pd-checkbox-input+.pd-checkbox-inner:after{position:absolute;top:0;left:0;right:0;bottom:0}.pd-checkbox-label .pd-checkbox-input+.pd-checkbox-inner:before{content:\"\";background-color:transparent}.pd-checkbox-label .pd-checkbox-input+.pd-checkbox-inner:after{content:\"\";border:0.125rem solid #0b7285;border-radius:0.25rem}.pd-checkbox-label .pd-checkbox-input+.pd-checkbox-inner.pd-checkbox-checked{background-color:#0b7285}.pd-checkbox-label .pd-checkbox-input+.pd-checkbox-inner .pd-checkbox-checkmark{position:absolute;display:inline-block;transform:rotate(45deg);height:0.75rem;width:0.375rem;top:0.15rem;left:0.45rem;border-bottom:0.125rem solid #ffffff;border-right:0.125rem solid #ffffff}.pd-checkbox-label .pd-checkbox-input+.pd-checkbox-inner .pd-checkbox-indeterminate{position:absolute;display:inline-block;transform:rotate(90deg);height:0.75rem;width:0.375rem;top:0.15rem;left:0.45rem;border-bottom:none;border-right:0.125rem solid #ffffff}.pd-checkbox-label .pd-checkbox-input:hover:enabled+.pd-checkbox-inner:after{border-color:#15aabf}.pd-checkbox-label .pd-checkbox-input:hover:enabled+.pd-checkbox-inner.pd-checkbox-checked{background-color:#15aabf}.pd-checkbox-label .pd-checkbox-input:active:enabled+.pd-checkbox-inner:after{border-color:#66d9e8}.pd-checkbox-label .pd-checkbox-input:active:enabled+.pd-checkbox-inner.pd-checkbox-checked{background-color:#66d9e8}.pd-checkbox-label .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner{background-color:#ffec99}.pd-checkbox-label .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner:after{border-color:#0b7285}.pd-checkbox-label .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner.pd-checkbox-checked{background-color:#ffec99}.pd-checkbox-label .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner.pd-checkbox-checked:after{border-color:#ffec99}.pd-checkbox-label .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-checkmark,.pd-checkbox-label .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-indeterminate{border-color:#0b7285}.pd-checkbox-label .pd-checkbox-input:disabled+.pd-checkbox-inner{cursor:default}.pd-checkbox-label .pd-checkbox-input:disabled+.pd-checkbox-inner:after{border-color:#cfcfcf}.pd-checkbox-label .pd-checkbox-input:disabled+.pd-checkbox-inner.pd-checkbox-checked{background-color:#cfcfcf}.pd-checkbox-label .pd-checkbox-input:disabled~.pd-checkbox-text{font-style:italic}.pd-checkbox-label.pd-checkbox-readonly{pointer-events:none;cursor:default}.pd-checkbox-label.pd-checkbox-readonly>.pd-checkbox-input+.pd-checkbox-inner{background-color:#e5e8eb}.pd-checkbox-label.pd-checkbox-readonly>.pd-checkbox-input+.pd-checkbox-inner.pd-checkbox-checked{background-color:#e5e8eb}.pd-checkbox-label.pd-checkbox-readonly>.pd-checkbox-input+.pd-checkbox-inner:after{border-color:#e5e8eb}.pd-checkbox-label.pd-checkbox-readonly>.pd-checkbox-input+.pd-checkbox-inner .pd-checkbox-checkmark,.pd-checkbox-label.pd-checkbox-readonly>.pd-checkbox-input+.pd-checkbox-inner .pd-checkbox-indeterminate{border-color:#0b0b0b;border-color:#0b0b0b}.pd-checkbox-label.pd-checkbox-readonly>.pd-checkbox-input~.pd-checkbox-text{font-style:normal}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input+.pd-checkbox-inner:after{border-color:#fa5252}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input+.pd-checkbox-inner.pd-checkbox-checked{background-color:#fa5252}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input+.pd-checkbox-inner.pd-checkbox-checked:after{border-color:#fa5252}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-checkmark,.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-indeterminate{border-color:#0b0b0b}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:hover:enabled+.pd-checkbox-inner:after{border-color:#c92a2a}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:hover:enabled+.pd-checkbox-inner.pd-checkbox-checked{background-color:#c92a2a}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:hover:enabled+.pd-checkbox-inner.pd-checkbox-checked:after{border-color:#c92a2a}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:hover:enabled+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-checkmark,.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:hover:enabled+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-indeterminate{border-color:#ffffff}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:active:enabled+.pd-checkbox-inner:after{border-color:#ffa8a8}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:active:enabled+.pd-checkbox-inner.pd-checkbox-checked{background-color:#ffa8a8}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:active:enabled+.pd-checkbox-inner.pd-checkbox-checked:after{border-color:#ffa8a8}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:active:enabled+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-checkmark,.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:active:enabled+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-indeterminate{border-color:#c92a2a}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner{background-color:#ffec99}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner:after{border-color:#fa5252}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner.pd-checkbox-checked{background-color:#ffec99}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner.pd-checkbox-checked:after{border-color:#ffec99}.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-checkmark,.pd-checkbox-label.pd-checkbox-error .pd-checkbox-input:focus-visible:enabled+.pd-checkbox-inner.pd-checkbox-checked .pd-checkbox-indeterminate{border-color:#0b7285}.pd-checkbox-label .pd-checkbox-text{padding-left:var(--pd-checkbox-text-padding-left, 0.625rem);flex-grow:1;overflow:hidden;text-overflow:ellipsis}";

const Checkbox = /*@__PURE__*/ proxyCustomElement(class Checkbox extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdChecked = createEvent(this, "pd-checked");
    }
    /**
     * Checkbox description text
     */
    text = '';
    /**
     * Sets checkbox to disabled state
     */
    disabled = false;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * Sets check state of the checkbox true/false
     */
    checked = false;
    /**
     * value of checkbox
     */
    value = false;
    /**
     * indeterminate state
     */
    isIndeterminate = false;
    /**
     * checkbox name
     */
    name;
    /**
     * Shows error state
     */
    error = false;
    /**
     * Default vertical adjustment for inline forms
     */
    verticalAdjust = false;
    pdChecked;
    onClick = () => {
        this.checked = !this.checked;
        this.value = this.checked;
        this.pdChecked.emit(this.value);
    };
    render() {
        return (h(Host, { key: 'd8552ce82ce483b6de3fbae3b9ab06468ff7692d', role: "checkbox", "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("label", { key: '35d9c27c436f4ed4954eefcc7003abb8bb8833f4', class: {
                'pd-checkbox-label': true,
                'pd-checkbox-readonly': this.readonly,
                'pd-checkbox-error': this.error,
            }, style: this.verticalAdjust ? { '--pd-checkbox-vertical-adjust': '2.3rem' } : {}, "data-test": "pd-checkbox-label" }, h("input", { key: 'fb2ca00cd8f8d63c1865beb0ad4d32e7fe7e8f4b', class: "pd-checkbox-input", type: "Checkbox", checked: this.checked, disabled: this.disabled || this.readonly, required: this.required, value: `${this.value}`, name: this.name, onClick: this.onClick }), h("div", { key: '0efe8127afb265de45d31a3723dd6a37cd973846', class: {
                'pd-checkbox-inner': true,
                'pd-checkbox-checked': this.checked || this.isIndeterminate,
            } }, h("div", { key: '706bf0959e69b0cd29be5fe6d757907255cf4bd4', class: { 'pd-checkbox-checkmark': this.checked && !this.isIndeterminate } }), h("div", { key: 'aa8c6b19ef03fa17f4c91109d8648f635dae4c3d', class: { 'pd-checkbox-indeterminate': this.isIndeterminate } })), h("div", { key: 'acb122c198decb5fba764f9769cffeffb7ad0b94', class: "pd-checkbox-text", "data-test": "pd-checkbox-text" }, this.text))));
    }
    static get style() { return pdCheckboxCss; }
}, [1, "pd-checkbox", {
        "text": [1],
        "disabled": [4],
        "readonly": [4],
        "required": [4],
        "checked": [1028],
        "value": [1028],
        "isIndeterminate": [4, "is-indeterminate"],
        "name": [1],
        "error": [4],
        "verticalAdjust": [4, "vertical-adjust"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Checkbox);
            }
            break;
    } });
}
defineCustomElement();

export { Checkbox as C, defineCustomElement as d };
//# sourceMappingURL=p-vOTrkory.js.map

//# sourceMappingURL=p-vOTrkory.js.map