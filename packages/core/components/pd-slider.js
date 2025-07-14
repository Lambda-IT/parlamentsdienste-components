import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const pdSliderCss = ":host{display:flex}*,::before,::after{box-sizing:border-box;appearance:none;outline:none}.pd-slider[type=range]{-webkit-appearance:none;background:transparent;margin:0.625em 0;width:100%}.pd-slider[type=range]::-moz-focus-outer{border:0}.pd-slider[type=range]:focus-visible::-webkit-slider-thumb{background:#ffec99;box-shadow:0 0 0 0.125rem #033840}.pd-slider[type=range]:focus-visible::-moz-range-thumb{background:#ffec99;box-shadow:0 0 0 0.125rem #033840}.pd-slider[type=range]:focus-visible::-ms-thumb{background:#ffec99;box-shadow:0 0 0 0.125rem #033840}.pd-slider[type=range]::-webkit-slider-runnable-track{cursor:default;height:0.5em;transition:all 0.2s ease;width:100%;box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#dee2e6;border:none;border-radius:0.5em}.pd-slider[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#0b7285;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em;-webkit-appearance:none;margin-top:-0.375em}.pd-slider[type=range]::-webkit-slider-thumb:hover{background:#15aabf}.pd-slider[type=range]::-webkit-slider-thumb:active{background:#66d9e8}.pd-slider[type=range]::-moz-range-track{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);cursor:default;height:0.5em;transition:all 0.2s ease;width:100%;background:#dee2e6;border:none;border-radius:0.5em;height:0.5em}.pd-slider[type=range]::-moz-range-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#0b7285;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em}.pd-slider[type=range]::-moz-range-thumb:hover{background:#15aabf}.pd-slider[type=range]::-moz-range-thumb:active{background:#66d9e8}.pd-slider[type=range]::-ms-track{cursor:default;height:0.5em;transition:all 0.2s ease;width:100%;background:transparent;border-color:transparent;border-width:0.625em 0;color:transparent}.pd-slider[type=range]::-ms-fill-lower{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#cfd5db;border:none;border-radius:1em}.pd-slider[type=range]::-ms-fill-upper{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#dee2e6;border:none;border-radius:1em}.pd-slider[type=range]::-ms-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#0b7285;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em;margin-top:0.125em}.pd-slider[type=range]::-ms-thumb:hover{background:#15aabf}.pd-slider[type=range]::-ms-thumb:active{background:#66d9e8}.pd-slider[type=range]:disabled::-webkit-slider-thumb,.pd-slider[type=range]:disabled::-moz-range-thumb,.pd-slider[type=range]:disabled::-ms-thumb,.pd-slider[type=range]:disabled::-webkit-slider-runnable-track,.pd-slider[type=range]:disabled::-ms-fill-lower,.pd-slider[type=range]:disabled::-ms-fill-upper{cursor:not-allowed}.pd-slider.pd-slider-disabled::-webkit-slider-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#cfcfcf;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em;box-shadow:0 0 0 0.125rem #0b0b0b;cursor:default}.pd-slider.pd-slider-disabled::-webkit-slider-thumb:hover{background:#cfcfcf}.pd-slider.pd-slider-disabled::-webkit-slider-thumb:active{background:#cfcfcf}.pd-slider.pd-slider-disabled::-moz-range-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#cfcfcf;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em;box-shadow:0 0 0 0.125rem #0b0b0b;cursor:default}.pd-slider.pd-slider-disabled::-moz-range-thumb:hover{background:#cfcfcf}.pd-slider.pd-slider-disabled::-moz-range-thumb:active{background:#cfcfcf}.pd-slider.pd-slider-disabled::-ms-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#cfcfcf;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em;box-shadow:0 0 0 0.125rem #0b0b0b;cursor:default}.pd-slider.pd-slider-disabled::-ms-thumb:hover{background:#cfcfcf}.pd-slider.pd-slider-disabled::-ms-thumb:active{background:#cfcfcf}.pd-slider.pd-slider-readonly::-webkit-slider-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#e5e8eb;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em;box-shadow:0 0 0 0.125rem #0b0b0b;cursor:default}.pd-slider.pd-slider-readonly::-webkit-slider-thumb:hover{background:#e5e8eb}.pd-slider.pd-slider-readonly::-webkit-slider-thumb:active{background:#e5e8eb}.pd-slider.pd-slider-readonly::-moz-range-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#e5e8eb;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em;box-shadow:0 0 0 0.125rem #0b0b0b;cursor:default}.pd-slider.pd-slider-readonly::-moz-range-thumb:hover{background:#e5e8eb}.pd-slider.pd-slider-readonly::-moz-range-thumb:active{background:#e5e8eb}.pd-slider.pd-slider-readonly::-ms-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#e5e8eb;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em;box-shadow:0 0 0 0.125rem #0b0b0b;cursor:default}.pd-slider.pd-slider-readonly::-ms-thumb:hover{background:#e5e8eb}.pd-slider.pd-slider-readonly::-ms-thumb:active{background:#e5e8eb}.pd-slider.pd-slider-error::-webkit-slider-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#fa5252;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em}.pd-slider.pd-slider-error::-webkit-slider-thumb:hover{background:#c92a2a}.pd-slider.pd-slider-error::-webkit-slider-thumb:active{background:#ffa8a8}.pd-slider.pd-slider-error::-moz-range-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#fa5252;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em}.pd-slider.pd-slider-error::-moz-range-thumb:hover{background:#c92a2a}.pd-slider.pd-slider-error::-moz-range-thumb:active{background:#ffa8a8}.pd-slider.pd-slider-error::-ms-thumb{box-shadow:0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(13, 13, 13, 0.2);background:#fa5252;border-radius:100%;border:none;cursor:pointer;height:1.25em;width:1.25em}.pd-slider.pd-slider-error::-ms-thumb:hover{background:#c92a2a}.pd-slider.pd-slider-error::-ms-thumb:active{background:#ffa8a8}";

const Slider = /*@__PURE__*/ proxyCustomElement(class Slider extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdInput = createEvent(this, "pd-input");
        this.pdChange = createEvent(this, "pd-change");
    }
    sliderValue = 0;
    /**
     * max value
     */
    max = 100;
    /**
     * min value
     */
    min = 0;
    /**
     * value steps
     */
    step = 1;
    /**
     * slider name
     */
    name = '';
    /**
     * If `true`, the user cannot interact with the input.
     */
    disabled = false;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly = false;
    /**
     * Shows error state
     */
    error = false;
    /**
     * slider value
     */
    value = null;
    valueChanged(value) {
        this.sliderValue = value;
    }
    /**
     * Emitted when the value has changed.
     */
    pdInput;
    /**
     * Emitted when slider has been released.
     */
    pdChange;
    onInput = (ev) => {
        const input = ev.target;
        if (input) {
            this.value = parseFloat(input.value) || 0;
        }
        this.pdInput.emit(this.value);
    };
    onChange = (ev) => {
        const input = ev.target;
        if (input) {
            this.value = parseFloat(input.value) || 0;
        }
        this.pdChange.emit(this.value);
    };
    componentWillLoad() {
        this.sliderValue = this.value || 0;
    }
    render() {
        return (h(Host, { key: '52e9e3a49309031989c36fa644963fe3f9d3e5f0' }, h("input", { key: 'e00961e3b04dad46a26b97471370865cce383cf0', class: {
                'pd-slider': true,
                'pd-slider-disabled': this.disabled,
                'pd-slider-readonly': this.readonly,
                'pd-slider-error': this.error,
            }, name: this.name, disabled: this.disabled || this.readonly, type: "range", multiple: true, min: this.min, max: this.max, step: this.step, value: this.sliderValue, onChange: this.onChange, onInput: this.onInput, "data-test": "pd-slider-input" })));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return pdSliderCss; }
}, [1, "pd-slider", {
        "max": [2],
        "min": [2],
        "step": [2],
        "name": [1],
        "disabled": [4],
        "readonly": [4],
        "error": [4],
        "value": [1026],
        "sliderValue": [32]
    }, undefined, {
        "value": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-slider"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-slider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Slider);
            }
            break;
    } });
}
defineCustomElement$1();

const PdSlider = Slider;
const defineCustomElement = defineCustomElement$1;

export { PdSlider, defineCustomElement };
//# sourceMappingURL=pd-slider.js.map

//# sourceMappingURL=pd-slider.js.map