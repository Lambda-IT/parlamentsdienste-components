import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { d as defineCustomElement$2 } from './p-vrPNQO6d.js';

const collapse = (element) => {
    // remove this event listener so it only gets triggered once
    if (element.trDone)
        element.removeEventListener('transitionend', element.trDone);
    // get current height of element
    var sectionHeight = element.scrollHeight;
    // remove transition from element
    var elementTransition = element.style.transition;
    element.style.transition = '';
    element.style.overflow = 'hidden';
    // in next frame, set height from auto to actual height of element and add transition again
    requestAnimationFrame(function () {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
        // now set height to 0 and start transition
        requestAnimationFrame(function () {
            element.style.height = '0';
        });
    });
};
const expand = (element) => {
    // get expanded height of element
    var sectionHeight = element.scrollHeight;
    // set height to expanded
    element.style.height = sectionHeight + 'px';
    // wait for transition to end
    element.addEventListener('transitionend', (element.trDone = function transitionDone() {
        // set height back to auto when transition is done
        element.style.height = null;
        element.style.overflow = 'visible';
    }));
};

const pdAlertCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block}*,::before,::after{box-sizing:border-box;outline:none}.pd-alert{border-radius:0.25rem;border-width:0.25rem;border-style:solid;font-weight:700}.pd-alert .pd-alert-top-section{display:flex;flex-wrap:nowrap;flex-direction:row;padding:0.625rem 1rem}.pd-alert .pd-alert-top-section .pd-alert-message-action{width:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between;column-gap:1rem}.pd-alert .pd-alert-top-section .pd-alert-icon{margin:-0.5rem 0.5rem -0.5rem -0.5rem;width:2.5rem;min-width:2.5rem;align-self:center}.pd-alert .pd-alert-top-section .pd-alert-close-button{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none;margin-left:0.625rem}.pd-alert .pd-alert-top-section .pd-alert-close-button:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-alert .pd-alert-top-section .pd-alert-close-button:focus-visible .pd-alert-action-cancel{background-color:#ffec99;color:#033840;fill:#033840}.pd-alert.pd-alert-primary{background-color:#0b7285;border-color:#0b7285;color:#ffffff;fill:#ffffff}.pd-alert.pd-alert-primary .pd-alert-action-text{color:#ffffff}.pd-alert.pd-alert-primary .pd-alert-action-cancel:hover{fill:#15aabf}.pd-alert.pd-alert-primary .pd-alert-action-cancel:active{fill:#66d9e8}.pd-alert.pd-alert-danger{background-color:#fa5252;border-color:#fa5252;color:#0b0b0b;fill:#0b0b0b}.pd-alert.pd-alert-danger .pd-alert-action-text{color:#0b0b0b}.pd-alert.pd-alert-danger .pd-alert-action-cancel:hover{fill:#c92a2a}.pd-alert.pd-alert-danger .pd-alert-action-cancel:active{fill:#ffa8a8}.pd-alert.pd-alert-warning{background-color:#fab005;border-color:#fab005;color:#0b0b0b;fill:#0b0b0b}.pd-alert.pd-alert-warning .pd-alert-action-text{color:#0b0b0b}.pd-alert.pd-alert-warning .pd-alert-action-cancel:hover{fill:#df7900}.pd-alert.pd-alert-warning .pd-alert-action-cancel:active{fill:#ffe066}.pd-alert.pd-alert-info{background-color:#4dadf7;border-color:#4dadf7;color:#0b0b0b;fill:#0b0b0b}.pd-alert.pd-alert-info .pd-alert-action-text{color:#0b0b0b}.pd-alert.pd-alert-info .pd-alert-action-cancel:hover{fill:#1864ab}.pd-alert.pd-alert-info .pd-alert-action-cancel:active{fill:#74c0fc}.pd-alert.pd-alert-success{background-color:#82c91e;border-color:#82c91e;color:#0b0b0b;fill:#0b0b0b}.pd-alert.pd-alert-success .pd-alert-action-text{color:#0b0b0b}.pd-alert.pd-alert-success .pd-alert-action-cancel:hover{fill:#5c940d}.pd-alert.pd-alert-success .pd-alert-action-cancel:active{fill:#c0eb75}.pd-alert.pd-alert-dark{background-color:#343a40;border-color:#343a40;color:#ffffff;fill:#ffffff}.pd-alert.pd-alert-dark .pd-alert-action-text{color:#ffffff}.pd-alert.pd-alert-dark .pd-alert-action-cancel:hover{fill:#bababa}.pd-alert.pd-alert-dark .pd-alert-action-cancel:active{fill:#dee2e6}.pd-alert.pd-alert-light{background-color:#f8f9fa;border-color:#f8f9fa;color:#0b0b0b;fill:#0b0b0b}.pd-alert.pd-alert-light .pd-alert-action-text{color:#0b0b0b}.pd-alert.pd-alert-light .pd-alert-action-cancel:hover{fill:#dee2e6}.pd-alert.pd-alert-light .pd-alert-action-cancel:active{fill:#dee2e6}.pd-alert-action-text{padding:0;cursor:pointer;font-weight:700 !important;background-color:transparent;border:none;text-decoration:underline;text-align:left}.pd-alert-action-text:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-alert-action-cancel{cursor:pointer;margin:-0.5rem -0.5rem -0.5rem 0.5rem;transform:translateY(-0.25rem)}.pd-alert-action-cancel:hover{fill:#e3e0e0}.pd-alert-expandable-content-wrapper{background-color:var(--pd-alert-expandable-background-color, #ffffff);color:var(--pd-alert-expandable-color, #000);font-weight:400;transition:height 0.3s ease-in-out;height:auto}.pd-alert-expandable-content-wrapper .pd-alert-expandable-content{padding:1rem}";

const Alert = /*@__PURE__*/ proxyCustomElement(class Alert extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdClosed = createEvent(this, "pd-closed");
        this.pdAction = createEvent(this, "pd-action");
        this.pdCollapsed = createEvent(this, "pd-collapsed");
    }
    contentWrapperElement;
    /** Color schema used for the alert */
    color = 'primary';
    /** Display an option to close the alert */
    closable = false;
    /** Text to show on action */
    actionText;
    /** Text to show on expanded action */
    actionTextExpanded;
    /** A link displayed to the right side of the alert */
    actionHref;
    /** Target for action href (eg. _blank) */
    actionTarget = '_blank';
    /** Hide alert icon */
    hideIcon = false;
    /** Enable expandable content */
    expandable = false;
    /** Expands / collapses the panel content */
    expanded = false;
    valueChanged(expanded) {
        if (expanded) {
            expand(this.contentWrapperElement);
        }
        else {
            collapse(this.contentWrapperElement);
        }
    }
    /** Emitted when close button was pressed. */
    pdClosed;
    /** Emitted when action button was pressed. */
    pdAction;
    /** Emitted when inner content is expanded/collapsed. */
    pdCollapsed;
    componentDidLoad() {
        // start collapsed
        if (!this.expanded) {
            this.contentWrapperElement.style.height = '0';
            this.contentWrapperElement.style.overflow = 'hidden';
        }
    }
    handleAction() {
        if (this.expandable)
            this.expanded = !this.expanded;
        if (this.expandable)
            this.pdCollapsed.emit(!this.expanded);
        this.pdAction.emit();
    }
    render() {
        return (h("div", { key: 'f8ee873f9b7da42076ad3d7f1504eb7549b8b2ae', class: {
                'pd-alert': true,
                [`pd-alert-${this.color}`]: true,
            } }, h("div", { key: 'f4d35d25e22e832a9712387119f9334bae3799e0', class: "pd-alert-top-section" }, this.renderIcon(), h("div", { key: '83970b0727a2bee0a70966b411b0bd9a2fb3451a', class: "pd-alert-message-action" }, h("slot", { key: '20a2cfcda78f59cb58585c51f43a535d65e1940c' }), this.renderAction()), this.renderClose()), h("div", { key: 'dce416599fc64310affbd6e635f18b2a20b59e9a', class: "pd-alert-expandable-content-wrapper", ref: el => (this.contentWrapperElement = el) }, this.renderExpandable())));
    }
    renderExpandable() {
        if (!this.expandable)
            return;
        return (h("div", { class: "pd-alert-expandable-content" }, h("slot", { name: "expandable" })));
    }
    renderAction() {
        const { actionHref, actionText, actionTarget, actionTextExpanded } = this;
        if (!this.actionText)
            return;
        const TagType = actionHref ? 'a' : 'button';
        const typeAttrs = TagType === 'button' ? { type: 'button' } : { href: actionHref, target: actionTarget };
        return (h("div", null, h(TagType, { class: "pd-alert-action-text", ...typeAttrs, onClick: () => this.handleAction(), "data-test": "pd-alert-action" }, !this.expanded ? actionText : actionTextExpanded)));
    }
    renderClose() {
        if (!this.closable)
            return;
        return (h("div", null, h("button", { class: "pd-alert-close-button", onClick: this.pdClosed.emit, "data-test": "pd-alert-close" }, h("pd-icon", { class: "pd-alert-action-cancel", name: "close", size: 2 }))));
    }
    renderIcon() {
        if (this.hideIcon)
            return;
        switch (this.color) {
            case 'danger':
                return h("pd-icon", { class: "pd-alert-icon", size: 2.5, name: "alert_danger" });
            case 'info':
                return h("pd-icon", { class: "pd-alert-icon", size: 2.5, name: "alert_info" });
            case 'success':
                return h("pd-icon", { class: "pd-alert-icon", size: 2.5, name: "confirm" });
            case 'warning':
                return h("pd-icon", { class: "pd-alert-icon", size: 2.5, name: "alert_warning" });
            default:
                return;
        }
    }
    static get watchers() { return {
        "expanded": ["valueChanged"]
    }; }
    static get style() { return pdAlertCss; }
}, [1, "pd-alert", {
        "color": [1],
        "closable": [4],
        "actionText": [1, "action-text"],
        "actionTextExpanded": [1, "action-text-expanded"],
        "actionHref": [1, "action-href"],
        "actionTarget": [1, "action-target"],
        "hideIcon": [4, "hide-icon"],
        "expandable": [4],
        "expanded": [1028]
    }, undefined, {
        "expanded": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-alert", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Alert);
            }
            break;
        case "pd-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const PdAlert = Alert;
const defineCustomElement = defineCustomElement$1;

export { PdAlert, defineCustomElement };
//# sourceMappingURL=pd-alert.js.map

//# sourceMappingURL=pd-alert.js.map