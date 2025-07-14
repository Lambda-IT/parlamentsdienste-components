import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const now = (ev) => {
    return ev.timeStamp || Date.now();
};

const pdBackdropCss = ":host{background-color:transparent;display:block;opacity:0.2;position:fixed;top:0;bottom:0;right:0;left:0}:host(.pd-backdrop-visible){background-color:#0b0b0b;cursor:pointer}*,::before,::after{box-sizing:border-box;outline:none}";

const Backdrop = /*@__PURE__*/ proxyCustomElement(class Backdrop extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdTap = createEvent(this, "pd-tap");
    }
    lastClick = -1e4;
    /**
     * Invisible backdrop when set to false
     */
    visible = true;
    pdTap;
    onTouchStart(ev) {
        this.lastClick = now(ev);
        this.tap(ev);
    }
    click(ev) {
        if (this.lastClick < now(ev) - 2500) {
            this.tap(ev);
        }
    }
    tap(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.pdTap.emit();
    }
    render() {
        return (h(Host, { key: 'ed366312e4fc86ebc4406b9a34ab2db5d15fe507', tabindex: "-1", class: {
                'pd-backdrop-visible': this.visible,
            } }));
    }
    static get style() { return pdBackdropCss; }
}, [1, "pd-backdrop", {
        "visible": [4]
    }, [[2, "touchstart", "onTouchStart"], [2, "click", "click"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-backdrop"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-backdrop":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Backdrop);
            }
            break;
    } });
}
defineCustomElement();

export { Backdrop as B, defineCustomElement as d };
//# sourceMappingURL=p-D45Ufw2y.js.map

//# sourceMappingURL=p-D45Ufw2y.js.map