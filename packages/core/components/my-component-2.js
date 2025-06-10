import { p as proxyCustomElement, H, c as createEvent, format, h, a as Host } from './index.js';

const myComponent2Css = ":host{display:block}";

const MyComponent2$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent2 extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.myOtherOut = createEvent(this, "myOtherOut");
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
    myOtherOut;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    outputText() {
        this.myOtherOut.emit('This is text from my-component-2');
    }
    render() {
        return (h(Host, { key: 'be2f6dd1428836cf19b5cefa26c680d54ad90559' }, h("div", { key: 'a5ec84c51d8e33e4b17f967efe5f59dec508d4ed' }, "Hello, World! I'm ", this.getText(), " \uD83D\uDE80\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80\uD83E\uDDD1\u200D\uD83D\uDE80"), h("button", { key: '757ca4468a40fcf94d1d273ee5449cf7a6db88e6', onClick: () => this.outputText() }, "This is button from my-component-2")));
    }
    static get style() { return myComponent2Css; }
}, [1, "my-component-2", {
        "first": [1],
        "middle": [1],
        "last": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component-2"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component-2":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent2$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent2 = MyComponent2$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent2, defineCustomElement };
//# sourceMappingURL=my-component-2.js.map

//# sourceMappingURL=my-component-2.js.map