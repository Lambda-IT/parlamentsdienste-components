import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const pdRadioGroupCss = ":host{display:block}";

const PdRadioGroup$1 = /*@__PURE__*/ proxyCustomElement(class PdRadioGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdChange = createEvent(this, "pd-change");
    }
    get element() { return this; }
    radios;
    /**
     * Name of the radio-group. Used to group radios together
     */
    name = '';
    /**
     * Value of the radio-group. Used to set the value of the selected radio
     */
    value = null;
    /**
     * If `true`, the user cannot interact with the radio buttons.
     */
    disabled = false;
    /**
     * Shows error state
     */
    error = false;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly = false;
    pdChange;
    valueChanged(newValue) {
        if (!newValue)
            return;
        this.radios.forEach((radio) => {
            if (radio.value === newValue) {
                radio.checked = true;
                this.pdChange.emit(radio.value);
            }
            else {
                radio.checked = false;
            }
        });
    }
    disabledChanged(newValue) {
        this.handlePropChanged('disabled', newValue);
    }
    errorChanged(newValue) {
        this.handlePropChanged('error', newValue);
    }
    readonlyChanged(newValue) {
        this.handlePropChanged('readonly', newValue);
    }
    handlePropChanged(propName, newValue) {
        if (typeof newValue !== 'boolean')
            return;
        this.radios.forEach((radio) => {
            radio[propName] = newValue;
        });
    }
    radioChange(ev) {
        ev.stopPropagation();
        const target = ev.target;
        this.pdChange.emit(target.value);
    }
    componentDidLoad() {
        this.radios = this.element.querySelectorAll('pd-radio');
        this.radios.forEach((radio) => {
            radio.name = this.name;
            if (this.value && radio.value === this.value) {
                radio.checked = true;
                this.pdChange.emit(radio.value);
            }
            else {
                radio.checked = false;
            }
        });
    }
    render() {
        return (h(Host, { key: 'fc783dc88946089d42a275971b46ebe4d429a521' }, h("slot", { key: 'db4651c407c97e66d109ea9e0807e74298992eb4' })));
    }
    static get watchers() { return {
        "value": ["valueChanged"],
        "disabled": ["disabledChanged"],
        "error": ["errorChanged"],
        "readonly": ["readonlyChanged"]
    }; }
    static get style() { return pdRadioGroupCss; }
}, [1, "pd-radio-group", {
        "name": [1],
        "value": [1],
        "disabled": [4],
        "error": [4],
        "readonly": [4]
    }, [[0, "change", "radioChange"]], {
        "value": ["valueChanged"],
        "disabled": ["disabledChanged"],
        "error": ["errorChanged"],
        "readonly": ["readonlyChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-radio-group"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-radio-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PdRadioGroup$1);
            }
            break;
    } });
}
defineCustomElement$1();

const PdRadioGroup = PdRadioGroup$1;
const defineCustomElement = defineCustomElement$1;

export { PdRadioGroup, defineCustomElement };
//# sourceMappingURL=pd-radio-group.js.map

//# sourceMappingURL=pd-radio-group.js.map