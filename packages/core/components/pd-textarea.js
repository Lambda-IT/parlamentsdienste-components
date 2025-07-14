import { p as proxyCustomElement, H, c as createEvent, r as readTask, h, a as Host } from './index.js';

const pdTextareaCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block}*,::before,::after{box-sizing:border-box;appearance:none;outline:none}.pd-textarea-label{width:100%;margin-bottom:0;max-width:100%}.pd-textarea-label .pd-textarea-label-text{padding-bottom:0.25rem;font-size:0.875rem;overflow:hidden;text-overflow:ellipsis}.pd-textarea{display:block;padding:0.625rem 0.875rem;border-radius:0.25rem;border:0.125rem solid #0b7285;width:100%;margin-top:var(--pd-input-vertical-adjust, inherit)}.pd-textarea:hover:enabled{border-color:#15aabf}.pd-textarea:disabled{border-color:#cfcfcf;background-color:transparent;font-style:italic;color:#0b0b0b}.pd-textarea:focus-visible:enabled{background:#fff3bf}.pd-textarea.pd-textarea-readonly{background-color:#dee2e6;border-color:#dee2e6}.pd-textarea.pd-textarea-readonly:hover:enabled,.pd-textarea.pd-textarea-readonly:disabled,.pd-textarea.pd-textarea-readonly:focus-visible:enabled{border-color:#dee2e6;cursor:default;background-color:#dee2e6}.pd-textarea.pd-textarea-error{border-color:#b33529;background:#ffa8a8}.pd-textarea.pd-textarea-error:hover:enabled{border-color:#c92a2a}.pd-textarea.pd-textarea-autogrow{resize:none;overflow-x:hidden}.pd-textarea-label-viewonly{font-weight:700}.pd-textarea-viewonly{display:block;margin:0;padding:0.125rem 0 0.75rem 0}";

const Textarea = /*@__PURE__*/ proxyCustomElement(class Textarea extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdChange = createEvent(this, "pd-change");
        this.pdInput = createEvent(this, "pd-input");
        this.pdBlur = createEvent(this, "pd-blur");
        this.pdFocus = createEvent(this, "pd-focus");
    }
    nativeInput;
    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     */
    autocapitalize = 'none';
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    autofocus = false;
    /**
     * If `true`, the user cannot interact with the textarea.
     */
    disabled = false;
    /**
     * If `true`, the textarea is replaced with a simple text
     */
    viewOnly = false;
    /**
     * A hint to the browser for which keyboard to display.
     * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
     * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
     */
    inputmode;
    /**
     * A hint to the browser for which enter key to display.
     * Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,
     * `"previous"`, `"search"`, and `"send"`.
     */
    enterkeyhint;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
     */
    maxlength;
    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
     */
    minlength;
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
     * If `true`, the element will have its spelling and grammar checked.
     */
    spellcheck = false;
    /**
     * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
     */
    cols;
    /**
     * The number of visible text lines for the control.
     */
    rows = 1;
    /**
     * Indicates how the control wraps text.
     */
    wrap;
    /**
     * Label text
     */
    label;
    /**
     * Shows error state
     */
    error = false;
    /**
     * If `true`, the element height will increase based on the value.
     */
    autoGrow = false;
    /**
     * The value of the textarea.
     */
    value = '';
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        const nativeInput = this.nativeInput;
        const value = this.getValue();
        if (nativeInput && nativeInput.value !== value) {
            nativeInput.value = value;
        }
        this.runAutoGrow();
        this.pdChange.emit(value);
    }
    /**
     * Emitted when the input value has changed.
     */
    pdChange;
    /**
     * Emitted when a keyboard input occurred.
     */
    pdInput;
    /**
     * Emitted when the input loses focus.
     */
    pdBlur;
    /**
     * Emitted when the input has focus.
     */
    pdFocus;
    /**
     * Sets focus on the native `textarea` in `pd-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    componentDidLoad() {
        requestAnimationFrame(() => this.runAutoGrow());
    }
    runAutoGrow() {
        const nativeInput = this.nativeInput;
        if (nativeInput && this.autoGrow) {
            readTask(() => {
                const borderWidth = parseFloat(window.getComputedStyle(nativeInput, null).getPropertyValue('border-width'));
                nativeInput.style.height = 'auto';
                nativeInput.style.height = nativeInput.scrollHeight + 2 * borderWidth + 'px';
            });
        }
    }
    getValue() {
        return this.value || '';
    }
    onInput = (ev) => {
        if (this.nativeInput) {
            this.value = this.nativeInput.value;
        }
        this.pdInput.emit(ev);
    };
    onFocus = (ev) => {
        this.pdFocus.emit(ev);
    };
    onBlur = (ev) => {
        if (!this.disabled || !this.readonly)
            this.pdBlur.emit(ev);
    };
    render() {
        const value = this.getValue();
        return (h(Host, { key: '61b3b1b3b74e491604ef365683c5c701560f7278' }, h("label", { key: '13c4aa81da1fe1829be7307aa76ef3d6018fdf63', class: "pd-textarea-label" }, this.label ? (h("div", { class: {
                'pd-textarea-label-text': true,
                'pd-textarea-label-viewonly': this.viewOnly,
            }, "data-test": "pd-textarea-label" }, this.label)) : (''), !this.viewOnly ? (h("textarea", { class: {
                'pd-textarea': true,
                'pd-textarea-readonly': this.readonly,
                'pd-textarea-error': this.error,
                'pd-textarea-autogrow': this.autoGrow,
            }, ref: textarea => (this.nativeInput = textarea), autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, "data-test": "pd-textarea", tabIndex: this.readonly ? -1 : undefined }, value)) : (h("p", { class: "pd-textarea-viewonly" }, this.value)))));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return pdTextareaCss; }
}, [1, "pd-textarea", {
        "autocapitalize": [1],
        "autofocus": [4],
        "disabled": [4],
        "viewOnly": [4, "view-only"],
        "inputmode": [1],
        "enterkeyhint": [1],
        "maxlength": [2],
        "minlength": [2],
        "placeholder": [1],
        "readonly": [4],
        "required": [4],
        "spellcheck": [4],
        "cols": [2],
        "rows": [2],
        "wrap": [1],
        "label": [1],
        "error": [4],
        "autoGrow": [4, "auto-grow"],
        "value": [1025],
        "setFocus": [64]
    }, undefined, {
        "value": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-textarea"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-textarea":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Textarea);
            }
            break;
    } });
}
defineCustomElement$1();

const PdTextarea = Textarea;
const defineCustomElement = defineCustomElement$1;

export { PdTextarea, defineCustomElement };
//# sourceMappingURL=pd-textarea.js.map

//# sourceMappingURL=pd-textarea.js.map