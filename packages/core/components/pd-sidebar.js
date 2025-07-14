import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdSidebarCss = ":host{background-color:#e3e0e0;display:flex;flex-direction:column;width:5.5rem;height:100%;align-items:center}*,::before,::after{box-sizing:border-box;outline:none}";

const Sidebar = /*@__PURE__*/ proxyCustomElement(class Sidebar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'd320c4c8bb2e8e09ee623b290a0c5b1fec3f072d', role: "navigation" }, h("slot", { key: '64bf1a432956ff47de762e3f788d7b0b07faaba4' })));
    }
    static get style() { return pdSidebarCss; }
}, [1, "pd-sidebar"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-sidebar"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-sidebar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Sidebar);
            }
            break;
    } });
}
defineCustomElement$1();

const PdSidebar = Sidebar;
const defineCustomElement = defineCustomElement$1;

export { PdSidebar, defineCustomElement };
//# sourceMappingURL=pd-sidebar.js.map

//# sourceMappingURL=pd-sidebar.js.map