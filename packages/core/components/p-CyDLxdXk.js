import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { d as defineCustomElement$1 } from './p-CGp-npjr.js';

const pdChipCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:inline-block;vertical-align:bottom}*,::before,::after{box-sizing:border-box;appearance:none;outline:none}.pd-chip{display:flex;align-items:center;border-radius:2rem;padding:0.25rem 0.75rem;position:relative;cursor:pointer;border:none;background-color:#e3e0e0;color:#000;font-weight:700}.pd-chip.pd-chip-checked{background-color:#66d9e8;color:#033840}.pd-chip.pd-chip-checked .pd-chip-icon{fill:#033840}.pd-chip:hover:enabled{background-color:#15aabf;color:#ffffff}.pd-chip:hover:enabled .pd-chip-icon{fill:#ffffff}.pd-chip:disabled{background-color:#cfcfcf;color:#0b0b0b;font-weight:500;font-style:italic;cursor:default}.pd-chip:disabled .pd-chip-icon{fill:#0b0b0b}.pd-chip:active:enabled{background-color:#0b7285;color:#ffffff}.pd-chip:active:enabled .pd-chip-icon{fill:#ffffff}.pd-chip.pd-chip-readonly{pointer-events:none;background-color:#dee2e6;border-color:#dee2e6;color:#0b0b0b;font-weight:500;cursor:default}.pd-chip:focus-visible{background-color:#ffec99;color:#033840}.pd-chip:focus-visible .pd-chip-icon{fill:#033840}.pd-chip-icon-left,.pd-chip-icon-right{display:flex;align-items:center}.pd-chip-icon-left{margin-right:0.375rem}.pd-chip-icon-right{margin-left:0.375rem}.pd-chip-remove{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none;margin-left:0.375rem}.pd-chip-remove:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}";

const Chip = /*@__PURE__*/ proxyCustomElement(class Chip extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.removeChip = createEvent(this, "pd-remove-chip");
        this.checkChip = createEvent(this, "pd-check-chip");
    }
    /**
     * Sets chip to disabled state
     */
    disabled = false;
    /**
     * Sets chip to readonly state
     */
    readonly = false;
    /**
     * Sets chip to checked state
     */
    checked = false;
    /**
     * Sets chip type |text|toggle|filter|
     */
    type = 'text';
    /**
     * Event for clicking the cross to remove a chip
     */
    removeChip;
    /**
     * Event for check chip
     */
    checkChip;
    /**
     * Click event
     */
    handleClick() {
        if (!this.disabled && !this.readonly) {
            this.checked = !this.checked;
            this.checkChip.emit(this.checked);
        }
    }
    removeClicked(e) {
        e.preventDefault();
        if (!this.disabled && !this.readonly)
            this.removeChip.emit(this);
    }
    render() {
        const { type, disabled } = this;
        const role = 'button';
        const iconSize = 1.25;
        return (h("button", { key: '343a0b0d0d4b920140ca192e6dbf699a968b0e3d', disabled: disabled, role: role, class: {
                'pd-chip': true,
                'pd-chip-checked': this.checked || type === 'toggle' ? true : false,
                'pd-chip-disabled': this.disabled,
                'pd-chip-readonly': this.readonly,
                [`pd-chip-${type}`]: true,
            } }, type === 'filter' && this.checked && (h("div", { key: '8a491f0fbafdda13d1248fd6350ef9e60c40b142', class: "pd-chip-icon pd-chip-icon-left" }, h("pd-icon", { key: 'e497872ea202e3af8292516db0fbe3abe591fe49', size: iconSize, name: "confirm_bold" }))), h("slot", { key: '88a1c5d4cafef04f4051643bdb29ede30984cb44' }), type === 'toggle' && !this.readonly && (h("button", { key: 'cbe3d33ffcab6fed3a614746e739ae53b554e6c5', "data-test": "pd-chip-remove", tabindex: this.disabled || this.readonly ? '-1' : null, class: "pd-chip-remove pd-chip-icon pd-chip-icon-right", onClick: e => this.removeClicked(e) }, h("pd-icon", { key: '2772ae9825859040c2439260903fbf14be3398b3', size: iconSize, name: "close_bold" })))));
    }
    static get style() { return pdChipCss; }
}, [1, "pd-chip", {
        "disabled": [4],
        "readonly": [4],
        "checked": [1028],
        "type": [1]
    }, [[2, "click", "handleClick"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-chip", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-chip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Chip);
            }
            break;
        case "pd-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { Chip as C, defineCustomElement as d };
//# sourceMappingURL=p-CyDLxdXk.js.map

//# sourceMappingURL=p-CyDLxdXk.js.map