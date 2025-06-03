import { p as proxyCustomElement, H, c as createEvent, format, h, a as Host } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.out = createEvent(this, "out");
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    out;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    outputText() {
        this.out.emit('This is text from my-component');
    }
    render() {
        return (h(Host, { key: 'a5ab60418d7c29d7ef8482dd440f6a5135e0a931' }, h("div", { key: '8d17a25a5ae0c3fa8ab0902e9b9176095cdfe308' }, "Hello, World! I'm ", this.getText()), h("button", { key: '920056223c224f4d256e14298231ea8c59ff9eb0', onClick: () => this.outputText() }, "This is button from my-component")));
    }
    static get style() { return myComponentCss; }
}, [1, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
//# sourceMappingURL=my-component.js.map

//# sourceMappingURL=my-component.js.map