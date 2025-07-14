import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { c as collapse, e as expand } from './p-DJsl1pvl.js';

const pdPanelCss = ":host{display:block;background-color:var(--pd-panel-background, #ffffff);border-radius:0.25rem}*,::before,::after{box-sizing:border-box;outline:none}.pd-panel-content-wrapper{transition:height 0.3s ease-in-out;height:auto}:host(.pd-panel-subpanel){border-top:0.125rem solid #bababa;border-radius:0;margin:var(--pd-panel-subpanel-margin, 0);--pd-panel-content-padding:0.5rem 0 1rem 0}:host(.pd-panel-subpanel.pd-panel-content-collapsed){border-bottom:0.125rem solid #bababa}:host(.pd-panel-subpanel.pd-panel-hover){border-color:#000}";

const Panel = /*@__PURE__*/ proxyCustomElement(class Panel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdCollapsed = createEvent(this, "pd-collapsed");
    }
    get element() { return this; }
    contentWrapperElement;
    panelHeader;
    hover = false;
    /**
     * Expands / collapses the panel content
     */
    collapsed = false;
    /**
     * Show/hide collapse button
     */
    collapsible = false;
    /**
     * Use as a subpanel
     */
    subpanel = false;
    /**
     * Emitted when the value has changed.
     */
    pdCollapsed;
    async valueChanged(collapsed) {
        if (this.collapsible) {
            this.pdCollapsed.emit({ collapsed });
            await this.panelHeader.setCollapsed(collapsed);
            if (collapsed) {
                collapse(this.contentWrapperElement);
            }
            else {
                expand(this.contentWrapperElement);
            }
        }
    }
    handleHover(ev) {
        ev.stopPropagation();
        this.hover = ev.detail;
    }
    connectedCallback() {
        this.panelHeader = this.element.querySelector('pd-panel-header');
    }
    componentDidLoad() {
        // start collapsed
        if (this.collapsed) {
            this.contentWrapperElement.style.height = '0';
            this.contentWrapperElement.style.overflow = 'hidden';
        }
    }
    render() {
        return (h(Host, { key: 'cdfc71f2889e58d939fb9ead4f82c7bd9992c7a1', class: {
                'pd-panel-subpanel': this.subpanel,
                'pd-panel-hover': this.hover && this.collapsible,
                'pd-panel-content-collapsed': this.collapsed,
            } }, h("slot", { key: '98063d2dfab498489b7116ab730e95e8583be7ae', name: "header" }), h("div", { key: '336d3a08ba81bba8a51b4293b599913f18687906', ref: el => (this.contentWrapperElement = el), class: {
                'pd-panel-content-wrapper': true,
                'pd-panel-content-collapsed': this.collapsed,
                'pd-panel-content-expanded': !this.collapsed,
            }, "aria-expanded": this.collapsed ? 'false' : 'true' }, h("slot", { key: '918888bb64f7042e27f9c88841f6a42ec6b6cfff' }), h("slot", { key: 'bb7a3d320588fddd75068e5cc749789b13925768', name: "footer" }))));
    }
    static get watchers() { return {
        "collapsed": ["valueChanged"]
    }; }
    static get style() { return pdPanelCss; }
}, [1, "pd-panel", {
        "collapsed": [4],
        "collapsible": [4],
        "subpanel": [4],
        "hover": [32]
    }, [[0, "pd-hover", "handleHover"]], {
        "collapsed": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-panel"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Panel);
            }
            break;
    } });
}
defineCustomElement$1();

const PdPanel = Panel;
const defineCustomElement = defineCustomElement$1;

export { PdPanel, defineCustomElement };
//# sourceMappingURL=pd-panel.js.map

//# sourceMappingURL=pd-panel.js.map