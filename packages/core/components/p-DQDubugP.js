import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$1 } from './p-CGp-npjr.js';
import { c as createPopper } from './p-BfP9ezJQ.js';

const pdMenuCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block}*,::before,::after{box-sizing:border-box;outline:none}.pd-menu{display:flex;flex-wrap:nowrap;flex-direction:row}.pd-menu .pd-menu-label{color:var(--pd-menu-label-color, #0b7285);font-weight:var(--pd-menu-label-weight, 400);size:1rem;line-height:2.375rem;padding-right:var(--pd-menu-horizontal-padding, 0.4em)}.pd-menu .pd-menu-button{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none;padding-top:var(--pd-menu-vertical-padding, 0.2em);padding-bottom:var(--pd-menu-vertical-padding, 0.2em);padding-left:0;padding-right:var(--pd-menu-horizontal-padding, 0.4em);display:flex;align-items:center}.pd-menu .pd-menu-button:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-menu .pd-menu-button.pd-menu-large{--pd-menu-vertical-padding:0.5em}.pd-menu .pd-menu-button.pd-menu-small{--pd-menu-vertical-padding:0}.pd-menu .pd-menu-button:hover .pd-menu-label{color:#15aabf}.pd-menu .pd-menu-button:hover .pd-menu-icon{fill:#15aabf}.pd-menu .pd-menu-button:focus-visible{background-color:#ffec99}.pd-menu .pd-menu-button:focus-visible .pd-menu-label{color:#033840}.pd-menu .pd-menu-button:focus-visible .pd-menu-icon{fill:#033840}.pd-menu .pd-menu-button:active .pd-menu-label{color:#66d9e8}.pd-menu .pd-menu-button:active .pd-menu-icon{fill:#66d9e8}.pd-menu .pd-menu-button .pd-menu-icon{fill:var(--pd-menu-label-color, #0b7285)}.pd-menu.pd-menu-inverted .pd-menu-button .pd-menu-label{color:#ffffff}.pd-menu.pd-menu-inverted .pd-menu-button .pd-menu-icon{fill:#ffffff}.pd-menu.pd-menu-inverted .pd-menu-button:hover .pd-menu-label{color:#bababa}.pd-menu.pd-menu-inverted .pd-menu-button:hover .pd-menu-icon{fill:#bababa}.pd-menu.pd-menu-inverted .pd-menu-button:active .pd-menu-label{color:#dee2e6}.pd-menu.pd-menu-inverted .pd-menu-button:active .pd-menu-icon{fill:#dee2e6}.pd-menu.pd-menu-inverted .pd-menu-button:focus-visible{background-color:#ffec99}.pd-menu.pd-menu-inverted .pd-menu-button:focus-visible .pd-menu-label{color:#033840}.pd-menu.pd-menu-inverted .pd-menu-button:focus-visible .pd-menu-icon{fill:#033840}.pd-menu-content{background-color:#ffffff;z-index:99;min-width:250px;width:max-content;max-width:var(--pd-menu-max-width, undefined);overflow:auto;box-shadow:0px 0px 8px #bababa}";

const Menu = /*@__PURE__*/ proxyCustomElement(class Menu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get element() { return this; }
    menuElement;
    buttonElement;
    popper;
    /**
     * Label nearby to the dot menu icon
     */
    label = '';
    /**
     * Switch dark colors to bright font color
     */
    invertColor = false;
    /**
     * Menu size
     */
    size = 'normal';
    /**
     * Items to display and select in dropdown
     */
    items = [];
    /**
     * Prefered placement of menu dropdown
     */
    placement = 'bottom-start';
    placementChanged(placement) {
        this.popper.setOptions({ placement });
    }
    isOpen = false;
    /**
     * Open menu
     */
    async open() {
        this.isOpen = true;
    }
    /**
     * Close menu
     */
    async close() {
        this.isOpen = false;
    }
    handleClick(ev) {
        if (!ev.composedPath().includes(this.element))
            this.isOpen = false;
    }
    componentDidLoad() {
        this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
    }
    componentDidUpdate() {
        if (!this.isOpen)
            return;
        this.popper.forceUpdate();
    }
    toggleOpenState() {
        this.isOpen = !this.isOpen;
    }
    // create a popper js element for the menu
    createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: this.placement,
        });
    }
    render() {
        return (h(Host, { key: '3a96c04affa0ded18a360e10865ba0ac4619ce10' }, h("div", { key: '6d142edbfce6136775fc147a4fd6767765503096', class: { 'pd-menu': true, 'pd-menu-inverted': this.invertColor } }, h("button", { key: '6a83476a1f287d28b9ac60679c556fa754e912c1', ref: el => (this.buttonElement = el), class: { 'pd-menu-button': true, [`pd-menu-${this.size}`]: true }, type: "button", "aria-haspopup": "true", "aria-expanded": `${this.isOpen}`, onClick: () => this.toggleOpenState(), "data-test": "pd-menu-button" }, this.renderLabel(), h("pd-icon", { key: '8b339574518112e1dc1127d6e8be5a0f276fe18a', class: "pd-menu-icon", size: 2, name: "menu_actions", lazy: false })), h("div", { key: '4aa251a24222fdd44732e956ece1308d2194bf4d' }, this.renderMenu()))));
    }
    renderMenu() {
        return (h("div", { ref: el => (this.menuElement = el), class: `pd-menu-content`, style: {
                display: this.isOpen ? 'block' : 'none',
            }, onClick: () => this.toggleOpenState() }, h("slot", null)));
    }
    renderLabel() {
        if (!this.label)
            return;
        return (h("span", { class: "pd-menu-label", "data-test": "pd-menu-label" }, this.label));
    }
    static get assetsDirs() { return ["assets-menu"]; }
    static get watchers() { return {
        "placement": ["placementChanged"]
    }; }
    static get style() { return pdMenuCss; }
}, [1, "pd-menu", {
        "label": [1],
        "invertColor": [4, "invert-color"],
        "size": [1],
        "items": [16],
        "placement": [1],
        "isOpen": [32],
        "open": [64],
        "close": [64]
    }, [[16, "click", "handleClick"]], {
        "placement": ["placementChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-menu", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Menu);
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

export { Menu as M, defineCustomElement as d };
//# sourceMappingURL=p-DQDubugP.js.map

//# sourceMappingURL=p-DQDubugP.js.map