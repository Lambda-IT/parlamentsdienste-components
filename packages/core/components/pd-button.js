import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdButtonCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:inline-block;border:none;outline:none;vertical-align:bottom}:host(.pd-button-fullwidth){display:flex}:host(.pd-button-fullwidth) .pd-button{width:100%;justify-content:center}*,::before,::after{font-weight:700;box-sizing:border-box;appearance:none;outline:none}.pd-button-outline *{font-weight:500}.pd-button{transition:box-shadow 0.15s ease-in-out;background-color:#0b7285;border:0.125em solid #0b7285;color:#ffffff;display:flex;align-items:center;border-top-left-radius:var(--pd-button-left-radius, 0.25rem);border-bottom-left-radius:var(--pd-button-left-radius, 0.25rem);border-top-right-radius:var(--pd-button-right-radius, 0.25rem);border-bottom-right-radius:var(--pd-button-right-radius, 0.25rem);padding:var(--pd-button-padding-vertical, 0.3125rem) var(--pd-button-padding-horizontal, 0.625rem);position:relative;cursor:pointer}.pd-button:hover:enabled{background-color:#15aabf;border-color:#15aabf;color:#ffffff}.pd-button:disabled{background-color:#cfcfcf;border-color:#cfcfcf;color:#0b0b0b;font-style:italic}.pd-button:disabled *{font-weight:500}.pd-button:active:enabled{background-color:#66d9e8;border-color:#66d9e8;color:#033840}.pd-button:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-button.pd-button-outline{background-color:transparent;border-color:#0b7285;color:#0b7285}.pd-button.pd-button-outline:hover:enabled{background-color:transparent;border-color:#15aabf;color:#15aabf}.pd-button.pd-button-outline:disabled{background-color:transparent;color:#cfcfcf;border-color:#bababa}.pd-button.pd-button-outline:active:enabled{background-color:transparent;border-color:#66d9e8;color:#0b7285}.pd-button.pd-button-outline:focus-visible{background-color:#ffec99;border:0.125em solid #ffec99;color:#033840}.pd-button ::slotted(pd-icon){fill:#ffffff}.pd-button:hover ::slotted(pd-icon){fill:#ffffff}.pd-button:active:enabled ::slotted(pd-icon){fill:#033840}.pd-button:disabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-outline ::slotted(pd-icon){fill:#0b7285}.pd-button.pd-button-outline:hover ::slotted(pd-icon){fill:#15aabf}.pd-button.pd-button-outline:active:enabled ::slotted(pd-icon){fill:#0b7285}.pd-button.pd-button-outline:disabled ::slotted(pd-icon){fill:#cfcfcf}.pd-button.pd-button-large{padding:0.625rem 1.25rem}.pd-button.pd-button-small{padding:0.125rem 0.5rem}.pd-button.pd-button-success{transition:box-shadow 0.15s ease-in-out;background-color:#82c91e;border:0.125em solid #82c91e;color:#0b0b0b}.pd-button.pd-button-success:hover:enabled{background-color:#5c940d;border-color:#5c940d;color:#ffffff}.pd-button.pd-button-success:disabled{background-color:#cfcfcf;border-color:#cfcfcf;color:#0b0b0b;font-style:italic}.pd-button.pd-button-success:disabled *{font-weight:500}.pd-button.pd-button-success:active:enabled{background-color:#c0eb75;border-color:#c0eb75;color:#5c940d}.pd-button.pd-button-success:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-button.pd-button-success.pd-button-outline{background-color:transparent;border-color:#5c940d;color:#0b0b0b}.pd-button.pd-button-success.pd-button-outline:hover:enabled{background-color:transparent;border-color:#82c91e;color:#0b0b0b}.pd-button.pd-button-success.pd-button-outline:disabled{background-color:transparent;color:#cfcfcf;border-color:#bababa}.pd-button.pd-button-success.pd-button-outline:active:enabled{background-color:transparent;border-color:#c0eb75;color:#0b0b0b}.pd-button.pd-button-success.pd-button-outline:focus-visible{background-color:#ffec99;border:0.125em solid #ffec99;color:#033840}.pd-button.pd-button-success ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-success:hover ::slotted(pd-icon){fill:#ffffff}.pd-button.pd-button-success:active:enabled ::slotted(pd-icon){fill:#5c940d}.pd-button.pd-button-success:disabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-success.pd-button-outline ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-success.pd-button-outline:hover ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-success.pd-button-outline:active:enabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-success.pd-button-outline:disabled ::slotted(pd-icon){fill:#cfcfcf}.pd-button.pd-button-danger{transition:box-shadow 0.15s ease-in-out;background-color:#fa5252;border:0.125em solid #fa5252;color:#0b0b0b}.pd-button.pd-button-danger:hover:enabled{background-color:#c92a2a;border-color:#c92a2a;color:#ffffff}.pd-button.pd-button-danger:disabled{background-color:#cfcfcf;border-color:#cfcfcf;color:#0b0b0b;font-style:italic}.pd-button.pd-button-danger:disabled *{font-weight:500}.pd-button.pd-button-danger:active:enabled{background-color:#ffa8a8;border-color:#ffa8a8;color:#c92a2a}.pd-button.pd-button-danger:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-button.pd-button-danger.pd-button-outline{background-color:transparent;border-color:#c92a2a;color:#0b0b0b}.pd-button.pd-button-danger.pd-button-outline:hover:enabled{background-color:transparent;border-color:#fa5252;color:#0b0b0b}.pd-button.pd-button-danger.pd-button-outline:disabled{background-color:transparent;color:#cfcfcf;border-color:#bababa}.pd-button.pd-button-danger.pd-button-outline:active:enabled{background-color:transparent;border-color:#ffa8a8;color:#0b0b0b}.pd-button.pd-button-danger.pd-button-outline:focus-visible{background-color:#ffec99;border:0.125em solid #ffec99;color:#033840}.pd-button.pd-button-danger ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-danger:hover ::slotted(pd-icon){fill:#ffffff}.pd-button.pd-button-danger:active:enabled ::slotted(pd-icon){fill:#c92a2a}.pd-button.pd-button-danger:disabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-danger.pd-button-outline ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-danger.pd-button-outline:hover ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-danger.pd-button-outline:active:enabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-danger.pd-button-outline:disabled ::slotted(pd-icon){fill:#cfcfcf}.pd-button.pd-button-warning{transition:box-shadow 0.15s ease-in-out;background-color:#fab005;border:0.125em solid #fab005;color:#0b0b0b}.pd-button.pd-button-warning:hover:enabled{background-color:#df7900;border-color:#df7900;color:#ffffff}.pd-button.pd-button-warning:disabled{background-color:#cfcfcf;border-color:#cfcfcf;color:#0b0b0b;font-style:italic}.pd-button.pd-button-warning:disabled *{font-weight:500}.pd-button.pd-button-warning:active:enabled{background-color:#ffe066;border-color:#ffe066;color:#df7900}.pd-button.pd-button-warning:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-button.pd-button-warning.pd-button-outline{background-color:transparent;border-color:#df7900;color:#0b0b0b}.pd-button.pd-button-warning.pd-button-outline:hover:enabled{background-color:transparent;border-color:#fab005;color:#0b0b0b}.pd-button.pd-button-warning.pd-button-outline:disabled{background-color:transparent;color:#cfcfcf;border-color:#bababa}.pd-button.pd-button-warning.pd-button-outline:active:enabled{background-color:transparent;border-color:#ffe066;color:#0b0b0b}.pd-button.pd-button-warning.pd-button-outline:focus-visible{background-color:#ffec99;border:0.125em solid #ffec99;color:#033840}.pd-button.pd-button-warning ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-warning:hover ::slotted(pd-icon){fill:#ffffff}.pd-button.pd-button-warning:active:enabled ::slotted(pd-icon){fill:#df7900}.pd-button.pd-button-warning:disabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-warning.pd-button-outline ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-warning.pd-button-outline:hover ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-warning.pd-button-outline:active:enabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-warning.pd-button-outline:disabled ::slotted(pd-icon){fill:#cfcfcf}.pd-button.pd-button-info{transition:box-shadow 0.15s ease-in-out;background-color:#4dadf7;border:0.125em solid #4dadf7;color:#0b0b0b}.pd-button.pd-button-info:hover:enabled{background-color:#1864ab;border-color:#1864ab;color:#ffffff}.pd-button.pd-button-info:disabled{background-color:#cfcfcf;border-color:#cfcfcf;color:#0b0b0b;font-style:italic}.pd-button.pd-button-info:disabled *{font-weight:500}.pd-button.pd-button-info:active:enabled{background-color:#74c0fc;border-color:#74c0fc;color:#1864ab}.pd-button.pd-button-info:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-button.pd-button-info.pd-button-outline{background-color:transparent;border-color:#1864ab;color:#0b0b0b}.pd-button.pd-button-info.pd-button-outline:hover:enabled{background-color:transparent;border-color:#228be6;color:#0b0b0b}.pd-button.pd-button-info.pd-button-outline:disabled{background-color:transparent;color:#cfcfcf;border-color:#bababa}.pd-button.pd-button-info.pd-button-outline:active:enabled{background-color:transparent;border-color:#74c0fc;color:#0b0b0b}.pd-button.pd-button-info.pd-button-outline:focus-visible{background-color:#ffec99;border:0.125em solid #ffec99;color:#033840}.pd-button.pd-button-info ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-info:hover ::slotted(pd-icon){fill:#ffffff}.pd-button.pd-button-info:active:enabled ::slotted(pd-icon){fill:#1864ab}.pd-button.pd-button-info:disabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-info.pd-button-outline ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-info.pd-button-outline:hover ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-info.pd-button-outline:active:enabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-info.pd-button-outline:disabled ::slotted(pd-icon){fill:#cfcfcf}.pd-button.pd-button-light{transition:box-shadow 0.15s ease-in-out;background-color:#f8f9fa;border:0.125em solid #f8f9fa;color:#0b0b0b}.pd-button.pd-button-light:hover:enabled{background-color:#dee2e6;border-color:#dee2e6;color:#0b0b0b}.pd-button.pd-button-light:disabled{background-color:#cfcfcf;border-color:#cfcfcf;color:#0b0b0b;font-style:italic}.pd-button.pd-button-light:disabled *{font-weight:500}.pd-button.pd-button-light:active:enabled{background-color:#dee2e6;border-color:#dee2e6;color:#0b0b0b}.pd-button.pd-button-light:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-button.pd-button-light.pd-button-outline{background-color:transparent;border-color:#dee2e6;color:#0b0b0b}.pd-button.pd-button-light.pd-button-outline:hover:enabled{background-color:transparent;border-color:#dee2e6;color:#0b0b0b}.pd-button.pd-button-light.pd-button-outline:disabled{background-color:transparent;color:#cfcfcf;border-color:#bababa}.pd-button.pd-button-light.pd-button-outline:active:enabled{background-color:transparent;border-color:#dee2e6;color:#0b0b0b}.pd-button.pd-button-light.pd-button-outline:focus-visible{background-color:#ffec99;border:0.125em solid #ffec99;color:#033840}.pd-button.pd-button-light ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-light:hover ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-light:active:enabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-light:disabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-light.pd-button-outline ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-light.pd-button-outline:hover ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-light.pd-button-outline:active:enabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-light.pd-button-outline:disabled ::slotted(pd-icon){fill:#cfcfcf}.pd-button.pd-button-dark{transition:box-shadow 0.15s ease-in-out;background-color:#343a40;border:0.125em solid #343a40;color:#ffffff}.pd-button.pd-button-dark:hover:enabled{background-color:#bababa;border-color:#bababa;color:#0b0b0b}.pd-button.pd-button-dark:disabled{background-color:#cfcfcf;border-color:#cfcfcf;color:#0b0b0b;font-style:italic}.pd-button.pd-button-dark:disabled *{font-weight:500}.pd-button.pd-button-dark:active:enabled{background-color:#dee2e6;border-color:#dee2e6;color:#0b0b0b}.pd-button.pd-button-dark:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-button.pd-button-dark.pd-button-outline{background-color:transparent;border-color:#343a40;color:#0b0b0b}.pd-button.pd-button-dark.pd-button-outline:hover:enabled{background-color:transparent;border-color:#8c8c8c;color:#0b0b0b}.pd-button.pd-button-dark.pd-button-outline:disabled{background-color:transparent;color:#cfcfcf;border-color:#bababa}.pd-button.pd-button-dark.pd-button-outline:active:enabled{background-color:transparent;border-color:#dee2e6;color:#0b0b0b}.pd-button.pd-button-dark.pd-button-outline:focus-visible{background-color:#ffec99;border:0.125em solid #ffec99;color:#033840}.pd-button.pd-button-dark ::slotted(pd-icon){fill:#ffffff}.pd-button.pd-button-dark:hover ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-dark:active:enabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-dark:disabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-dark.pd-button-outline ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-dark.pd-button-outline:hover ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-dark.pd-button-outline:active:enabled ::slotted(pd-icon){fill:#0b0b0b}.pd-button.pd-button-dark.pd-button-outline:disabled ::slotted(pd-icon){fill:#cfcfcf}.pd-button:disabled{cursor:default}.pd-link{display:flex;align-items:center;color:#0b7285;text-decoration:none;cursor:pointer;border:none;background-color:transparent;padding:0}.pd-link *{font-weight:500}.pd-link:hover:not(:disabled){color:#15aabf}.pd-link:hover:not(:disabled) ::slotted(pd-icon){fill:#15aabf}.pd-link:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-link:active:not(:disabled){color:#66d9e8}.pd-link:active:not(:disabled) ::slotted(pd-icon){fill:#66d9e8}.pd-link ::slotted(pd-icon){fill:#0b7285}.pd-link:disabled{color:#8c8c8c;cursor:default}.pd-link:disabled ::slotted(pd-icon){fill:#8c8c8c}ho .pd-button-icon-left,.pd-button-icon-right{display:flex;align-items:center;margin-top:-0.25rem;margin-bottom:-0.25rem}.pd-button-icon-left{margin-right:0.375rem}.pd-button-icon-right{margin-left:0.375rem}";

const Button = /*@__PURE__*/ proxyCustomElement(class Button extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.internals = this.attachInternals();
    }
    /**
     * Sets button to disbaled state
     */
    disabled = false;
    /**
     * Sets button type |button|submit|reset|
     */
    type = 'button';
    /**
     * Color schema used for the button
     */
    color = 'primary';
    /**
     * Button size
     */
    size = 'normal';
    /**
     * Use outline schema
     */
    outline = false;
    /**
     * Sets button to 100% width
     */
    fullWidth = false;
    /**
     * Set href to create a link button
     */
    href;
    /**
     * Set href to create a link button
     */
    showAsLink = false;
    /**
     * Sets target for link button e.g. '_blank'
     */
    target = '_blank';
    /**
     * Sets the position of the icon
     */
    iconLocation = 'none';
    /**
     * Internals for form association
     */
    internals;
    /**
     * Click event
     */
    handleClick(e) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (this.type === 'submit' && this.internals.form) {
            this.internals.form.submit();
        }
        return e;
    }
    render() {
        const { href, target, type, disabled } = this;
        const TagType = href ? 'a' : 'button';
        const role = 'button';
        const typeAttrs = TagType === 'button' ? { type, role } : { href, target };
        return (h(Host, { key: '512d7cccf0d0f01e3cfcc59edacfef35347de6ce', class: { 'pd-button-fullwidth': this.fullWidth } }, h(TagType, { key: 'fec0785d1cef8d907a9a8f1ba616c6b4c37506da', ...typeAttrs, disabled: disabled, class: {
                'pd-button': TagType === 'button' && !this.showAsLink,
                'pd-link': this.showAsLink ? true : TagType !== 'button',
                [`pd-button-${this.color}`]: true,
                [`pd-button-${this.size}`]: true,
                'pd-button-outline': this.outline,
            } }, this.renderIcon('left'), this.renderCenter(), this.renderIcon('right'))));
    }
    renderIcon(location) {
        if (location !== this.iconLocation)
            return;
        return (h("div", { class: `pd-button-icon-${location}` }, h("slot", { name: "icon" })));
    }
    renderCenter() {
        if (this.iconLocation === 'center')
            return this.renderIcon('center');
        return h("slot", null);
    }
    static get formAssociated() { return true; }
    static get style() { return pdButtonCss; }
}, [65, "pd-button", {
        "disabled": [4],
        "type": [1],
        "color": [1],
        "size": [1],
        "outline": [4],
        "fullWidth": [4, "full-width"],
        "href": [1],
        "showAsLink": [4, "show-as-link"],
        "target": [1],
        "iconLocation": [1, "icon-location"]
    }, [[2, "click", "handleClick"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-button"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Button);
            }
            break;
    } });
}
defineCustomElement$1();

const PdButton = Button;
const defineCustomElement = defineCustomElement$1;

export { PdButton, defineCustomElement };
//# sourceMappingURL=pd-button.js.map

//# sourceMappingURL=pd-button.js.map