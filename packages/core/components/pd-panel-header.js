import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-CGp-npjr.js';

const pdPanelHeaderCss = ":host{display:flex;align-items:center;background-color:#033840;color:white;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;font-weight:700;transition:border-radius 0.3s ease-in-out}:host(.pd-panel-header-collapsed){border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem}:host(.pd-panel-header-hover){background-color:#68888c;cursor:pointer}:host(.pd-panel-header-hover) .pd-panel-header-collapse{fill:#ffffff}*,::before,::after{box-sizing:border-box;outline:none;appearance:none}.pd-panel-header-icons{margin-right:0.875rem;display:flex;fill:#66d9e8}.pd-panel-header-icons ::slotted(pd-icon:hover),.pd-panel-header-icons pd-icon:hover{fill:#ffffff;cursor:pointer}.pd-panel-header-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;min-height:3rem;padding:0.625rem 1rem}.pd-panel-header-content .pd-panel-header-subtitle{font-size:1rem;font-weight:500;color:#ffffff}.pd-panel-header-collapse{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none;display:flex;align-items:center}.pd-panel-header-collapse:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}:host(.pd-panel-header-subpanel){background-color:transparent;border-radius:0;color:#033840;min-height:2.75rem}:host(.pd-panel-header-subpanel) .pd-panel-header-content{padding:0.625rem 0}:host(.pd-panel-header-subpanel) .pd-panel-header-content .pd-panel-header-subtitle{color:#000}:host(.pd-panel-header-subpanel) .pd-panel-header-icons{margin-right:0}:host(.pd-panel-header-subpanel) ::slotted(pd-icon:hover),:host(.pd-panel-header-subpanel) pd-icon:hover{fill:#15aabf}:host(.pd-panel-header-subpanel.pd-panel-header-hover) .pd-panel-header-collapse{fill:#15aabf}";

const PanelHeader = /*@__PURE__*/ proxyCustomElement(class PanelHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdHover = createEvent(this, "pd-hover");
    }
    get element() { return this; }
    collapsed = false;
    hover = false;
    /**
     * Used for panel hover stylings
     */
    pdHover;
    panel;
    collapsible = false;
    subpanel = false;
    connectedCallback() {
        this.panel = this.element.closest('pd-panel');
        if (this.panel) {
            this.collapsible = this.panel.collapsible;
            this.collapsed = this.panel.collapsed;
            this.subpanel = this.panel.subpanel;
        }
    }
    /**
     * Update panel collapsed state
     */
    toggle(e) {
        e.stopPropagation();
        this.collapsed = !this.collapsed;
        this.panel.collapsed = this.collapsed;
    }
    async setCollapsed(collapsed) {
        this.collapsed = collapsed;
    }
    handleHover(hover) {
        this.hover = hover;
        this.pdHover.emit(hover);
    }
    render() {
        return (h(Host, { key: 'bffaa5a9cdef63e4abb0c0a7ceea8c6b2f7eb724', class: {
                'pd-panel-header-collapsed': this.collapsed,
                'pd-panel-header-subpanel': this.subpanel,
                'pd-panel-header-hover': this.hover && this.collapsible,
            } }, h("div", { key: '69b593a63e653b102614a01136fdb16c5a26e941', class: "pd-panel-header-content", onMouseOver: () => this.handleHover(true), onMouseOut: () => this.handleHover(false), onClick: e => this.toggle(e) }, h("slot", { key: 'd4a145f492de4c4e0bd77143600ad135372faf14' }), h("div", { key: '2f3a9d7a9c19c63252e9c9474d343a302a058c6c', class: "pd-panel-header-subtitle" }, h("slot", { key: '76612572094b8babec5df5c4f14db2943cf9b8f2', name: "subtitle" }))), h("div", { key: 'c0d90d2e72ace23640c58f28220bb370cf8c25c6', class: "pd-panel-header-icons" }, h("slot", { key: '09469d248663a86c210558e265680c8a035422ac', name: "icons" }), this.rendercollapsible())));
    }
    rendercollapsible() {
        if (!this.collapsible)
            return;
        return (h("button", { class: "pd-panel-header-collapse", onMouseOver: () => this.handleHover(true), onMouseOut: () => this.handleHover(false), onClick: e => this.toggle(e), "data-test": "pd-panel-header-collapse" }, h("pd-icon", { name: "caret", size: 2.4, rotate: this.collapsed ? 0 : 180 })));
    }
    static get style() { return pdPanelHeaderCss; }
}, [1, "pd-panel-header", {
        "collapsed": [32],
        "hover": [32],
        "setCollapsed": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-panel-header", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-panel-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PanelHeader);
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

const PdPanelHeader = PanelHeader;
const defineCustomElement = defineCustomElement$1;

export { PdPanelHeader, defineCustomElement };
//# sourceMappingURL=pd-panel-header.js.map

//# sourceMappingURL=pd-panel-header.js.map