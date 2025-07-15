import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-CGp-npjr.js';

const pdToastCss = ":host{display:block;padding:1.25rem;box-shadow:0 0 0.5rem rgba(11, 11, 11, 0.45);border-radius:0.25rem;background-color:#ffffff}*,::before,::after{box-sizing:border-box;outline:none}.pd-toast-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.375rem}.pd-toast-header .pd-toast-title{font-weight:700}.pd-toast-header .pd-toast-header-left{overflow:hidden;text-overflow:ellipsis}.pd-toast-header .pd-toast-header-right{display:flex;align-self:flex-start;max-width:50%}.pd-toast-header .pd-toast-header-right .pd-toast-info{font-size:0.875rem;margin-left:1rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;align-self:center}.pd-toast-header .pd-toast-header-right .pd-toast-close-button{margin:0;padding:0;background-color:transparent;border:none;margin-left:1rem;margin-right:-0.5rem;margin-top:-0.5rem;cursor:pointer}.pd-toast-header .pd-toast-header-right .pd-toast-close-button:focus-visible .pd-toast-close{background-color:#ffec99;color:#033840;fill:#033840}.pd-toast-header .pd-toast-header-right .pd-toast-close-button .pd-toast-close{fill:#0b7285;min-width:1rem}.pd-toast-header .pd-toast-header-right .pd-toast-close-button .pd-toast-close:hover{fill:#15aabf}.pd-toast-header .pd-toast-header-right .pd-toast-close-button .pd-toast-close:active{fill:#66d9e8}.pd-toast-body{overflow:hidden}";

const Toast = /*@__PURE__*/ proxyCustomElement(class Toast extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdClosed = createEvent(this, "pd-closed");
    }
    /**
     * The Toast title
     */
    header;
    /**
     * Additional toast information (e.g. 11 minutes ago)
     */
    info;
    /**
     * Changes max-with of the toast
     */
    size = 'large';
    /**
     * When closing the toast using the close icon
     */
    pdClosed;
    render() {
        return (h(Host, { key: '3e5df08054bf022c1b8b7d2e80408f619a6a1496', style: {
                maxWidth: this.size === 'small' ? '260px' : '550px',
            } }, h("div", { key: 'fac9d2dd1bbbb26cb0455d4dedeebcb438f80617', class: "pd-toast-header" }, h("div", { key: '82ac6609520bf59779c9fc01cf4796e43454168b', class: "pd-toast-header-left" }, h("span", { key: '55589afe81c65bf0a35d2fd5f12c2d094d475816', class: "pd-toast-title", "data-test": "pd-toast-title" }, this.header)), h("div", { key: '8bef0c60acd8893505761aa9155577acc4474315', class: "pd-toast-header-right" }, this.renderInfo(), h("button", { key: 'cf82863a1b4d6c4c2bf64aedf3b679904b5488b4', class: "pd-toast-close-button", onClick: this.pdClosed.emit, "data-test": "pd-toast-close" }, h("pd-icon", { key: 'bd781981db64cb411935e28f487c251b70814842', class: "pd-toast-close", name: "close", size: 2 })))), h("div", { key: '06ea69050c80c400db604b72c1a39ffc4518b4a8', class: "pd-toast-body" }, h("slot", { key: 'f517d9896671e4168ffa9832b2ae0e033480c11f' }))));
    }
    renderInfo() {
        if (!this.info || this.size === 'small')
            return;
        return (h("span", { class: "pd-toast-info", "data-test": "pd-toast-info" }, this.info));
    }
    static get style() { return pdToastCss; }
}, [1, "pd-toast", {
        "header": [1],
        "info": [1],
        "size": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-toast", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-toast":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Toast);
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

const PdToast = Toast;
const defineCustomElement = defineCustomElement$1;

export { PdToast, defineCustomElement };
//# sourceMappingURL=pd-toast.js.map

//# sourceMappingURL=pd-toast.js.map