import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const pdInputCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block}*,::before,::after{box-sizing:border-box;appearance:none;outline:none}.pd-input-label{width:100%;margin-bottom:0;max-width:100%}.pd-input-label .pd-input-label-text{font-size:0.875rem;padding-bottom:0.25rem;overflow:hidden;text-overflow:ellipsis}.pd-input{display:block;padding:0.625rem 0.875rem;border-radius:0.25rem;border:0.125rem solid #0b7285;width:100%;margin-top:var(--pd-input-vertical-adjust, inherit)}.pd-input:hover:enabled{border-color:#15aabf}.pd-input:disabled{border-color:#cfcfcf;background-color:transparent;font-style:italic;color:#0b0b0b}.pd-input:focus-visible:enabled{background:#fff3bf}.pd-input.pd-input-readonly{background-color:#dee2e6;border-color:#dee2e6}.pd-input.pd-input-readonly:hover:enabled,.pd-input.pd-input-readonly:disabled,.pd-input.pd-input-readonly:focus-visible:enabled{border-color:#dee2e6;cursor:default;background-color:#dee2e6}.pd-input.pd-input-error{border-color:#b33529;background:#ffa8a8}.pd-input.pd-input-error:hover:enabled{border-color:#c92a2a}.pd-input-label-viewonly{font-weight:700}.pd-input-viewonly{display:block;margin:0;padding:0.125rem 0 0.75rem 0}";

const Input = /*@__PURE__*/ proxyCustomElement(class Input extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdInput = createEvent(this, "pd-input");
        this.pdChange = createEvent(this, "pd-change");
        this.pdBlur = createEvent(this, "pd-blur");
        this.pdFocus = createEvent(this, "pd-focus");
    }
    nativeInput;
    /**
     * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
     */
    accept;
    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     */
    autocapitalize = 'off';
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    autocomplete = 'off';
    /**
     * Whether auto correction should be enabled when the user is entering/editing the text value.
     */
    autocorrect = 'off';
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    autofocus = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    clearInput = false;
    /**
     * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
     */
    clearOnEdit;
    /**
     * If `true`, the user cannot interact with the input.
     */
    disabled = false;
    /**
     * If `true`, the input is replaced with a simple text
     */
    viewOnly = false;
    /**
     * A hint to the browser for which keyboard to display.
     * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
     * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
     */
    inputmode;
    /**
     * The maximum value, which must not be less than its minimum (min attribute) value.
     */
    max;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
     */
    maxlength;
    /**
     * The minimum value, which must not be greater than its maximum (max attribute) value.
     */
    min;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
     */
    minlength;
    /**
     * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
     */
    multiple;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name;
    /**
     * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
     */
    pattern;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * Works with the min and max attributes to limit the increments at which a value can be set.
     * Possible values are: `"any"` or a positive floating point number.
     */
    step;
    /**
     * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
     */
    size = 1;
    /**
     * The type of control to display. The default type is text.
     */
    type = 'text';
    /**
     * The value of the input.
     */
    value = '';
    /**
     * Label text
     */
    label;
    /**
     * Shows error state
     */
    error = false;
    /**
     * Default vertical adjustment for inline forms
     */
    verticalAdjust = false;
    /**
     * Emitted when a keyboard input occurred.
     */
    pdInput;
    /**
     * Emitted when the value has changed.
     */
    pdChange;
    /**
     * Emitted when the input loses focus.
     */
    pdBlur;
    /**
     * Emitted when the input has focus.
     */
    pdFocus;
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        // this.pdChange.emit({ value: this.value == null ? this.value : this.value.toString() });
        this.pdChange.emit(this.value == null ? this.value : this.value.toString());
    }
    /**
     * Sets focus on the specified `pd-input`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    onInput = (ev) => {
        const input = ev.target;
        if (input) {
            this.value = input.value || '';
        }
        this.pdInput.emit(ev);
    };
    onBlur = () => {
        if (!this.disabled || !this.readonly)
            this.pdBlur.emit();
    };
    onFocus = () => {
        this.pdFocus.emit();
    };
    onKeydown = () => { };
    getValue() {
        return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
    }
    render() {
        const value = this.getValue();
        return (h(Host, { key: 'c0916cd63a2ed75b0d14d55d42b9a63ab30c3927' }, h("label", { key: '231c1f781eab3389816418a5a23f174271e3698d', class: "pd-input-label" }, this.label ? (h("div", { class: {
                'pd-input-label-text': true,
                'pd-input-label-viewonly': this.viewOnly,
            }, "data-test": "pd-input-label" }, this.label)) : (''), !this.viewOnly ? (h("input", { class: {
                'pd-input': true,
                'pd-input-readonly': this.readonly,
                'pd-input-error': this.error,
            }, ref: input => (this.nativeInput = input), disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readonly: this.readonly, required: this.required, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown, style: this.verticalAdjust ? { '--pd-input-vertical-adjust': '1.5625rem' } : {}, "data-test": "pd-input", tabIndex: this.readonly ? -1 : undefined })) : (h("p", { class: "pd-input-viewonly" }, this.value)))));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return pdInputCss; }
}, [1, "pd-input", {
        "accept": [1],
        "autocapitalize": [1],
        "autocomplete": [1],
        "autocorrect": [1],
        "autofocus": [4],
        "clearInput": [4, "clear-input"],
        "clearOnEdit": [4, "clear-on-edit"],
        "disabled": [4],
        "viewOnly": [4, "view-only"],
        "inputmode": [1],
        "max": [1],
        "maxlength": [2],
        "min": [1],
        "minlength": [2],
        "multiple": [4],
        "name": [1],
        "pattern": [1],
        "placeholder": [1],
        "readonly": [4],
        "required": [4],
        "step": [1],
        "size": [2],
        "type": [1],
        "value": [1032],
        "label": [1],
        "error": [4],
        "verticalAdjust": [4, "vertical-adjust"],
        "setFocus": [64]
    }, undefined, {
        "value": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-input"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Input);
            }
            break;
    } });
}
defineCustomElement$1();

const PdInput = Input;
const defineCustomElement = defineCustomElement$1;

export { PdInput, defineCustomElement };
//# sourceMappingURL=pd-input.js.map

//# sourceMappingURL=pd-input.js.map