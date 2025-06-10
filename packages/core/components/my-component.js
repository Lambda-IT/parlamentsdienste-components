import { p as proxyCustomElement, H, c as createEvent, format, h, a as Host } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.myOut = createEvent(this, "myOut");
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
    myOut;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    outputText() {
        this.myOut.emit('This is text from my-component');
    }
    render() {
        return (h(Host, { key: 'ee4e204de206e3d8235b2268d0aa23ad9f9d3e24' }, h("div", { key: '257771de8369864c6b2ef6e350bee2a1d1d9d777' }, "Hello, World! I'm ", this.getText()), h("button", { key: '9b7a28c78b5b9478a318d0e7d1aa88c7f89638ed', onClick: () => this.outputText() }, "This is button from my-component")));
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