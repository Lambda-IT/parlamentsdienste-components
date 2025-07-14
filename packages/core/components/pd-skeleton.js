import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdSkeletonCss = ":host{display:block;overflow:hidden;background-color:#dee2e6;border-radius:4px;position:relative}@keyframes pd-skeleton-animation{from{transform:translateX(-100%)}to{transform:translateX(100%)}}.pd-skeleton-animation{animation:pd-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1;background:linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))}";

const PdSkeleton$1 = /*@__PURE__*/ proxyCustomElement(class PdSkeleton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * Sets the height of the skeleton loader
     */
    height = '32px';
    /**
     * Sets the widht of the skeleton loader
     */
    width = '100%';
    render() {
        return (h(Host, { key: '8dd557f54198ea7136f1d485c33575fcb05a8ebc', style: { height: this.height, width: this.width } }, h("div", { key: 'b1e9f32ff4d460ca59e7b3edcba468876a35cb22', class: 'pd-skeleton-animation' })));
    }
    static get style() { return pdSkeletonCss; }
}, [1, "pd-skeleton", {
        "height": [1],
        "width": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-skeleton"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-skeleton":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PdSkeleton$1);
            }
            break;
    } });
}
defineCustomElement$1();

const PdSkeleton = PdSkeleton$1;
const defineCustomElement = defineCustomElement$1;

export { PdSkeleton, defineCustomElement };
//# sourceMappingURL=pd-skeleton.js.map

//# sourceMappingURL=pd-skeleton.js.map