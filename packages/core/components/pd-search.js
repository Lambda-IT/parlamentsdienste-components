import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$4 } from './p-CiZ4Y22d.js';
import { d as defineCustomElement$3 } from './p-DdjZSDbb.js';
import { d as defineCustomElement$2 } from './p-CGp-npjr.js';
import { c as createPopper } from './p-BfP9ezJQ.js';

const pdSearchCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:flex;position:relative}*,::before,::after{box-sizing:border-box;appearance:none;outline:none}.pd-search-label{flex:1 1 auto;display:flex;flex-direction:column;max-width:100%}.pd-search-label .pd-search-label-text{padding-bottom:0.25rem;font-size:0.875rem;overflow:hidden;text-overflow:ellipsis}.pd-search-label .pd-search-input-wrapper{display:flex;position:relative}.pd-search-label .pd-search-input{flex:1 1 auto;min-width:0;padding:0.625rem 0.875rem;padding-right:3em;border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem;border-top-right-radius:0;border-bottom-right-radius:0;border:0.125rem solid #0b7285;border-right:none}.pd-search-label .pd-search-input:focus-visible{background-color:#fff3bf}.pd-search-label:hover .pd-search-input{border-color:#15aabf}.pd-search-label:hover .pd-search-button{background-color:#15aabf;border-color:#15aabf}.pd-search-label:hover .pd-search-clear{fill:#15aabf}.pd-search-label:active .pd-search-input{border-color:#66d9e8}.pd-search-label:active .pd-search-button{background-color:#66d9e8;border-color:#66d9e8;fill:#033840}.pd-search-label:active .pd-search-clear{fill:#66d9e8}.pd-search-label.pd-search-disabled{pointer-events:none}.pd-search-label.pd-search-disabled .pd-search-input{font-style:italic;border-color:#cfcfcf;border-right:none;background-color:#ffffff}.pd-search-label.pd-search-disabled .pd-search-clear{display:none}.pd-search-label.pd-search-disabled .pd-search-button{border-color:#cfcfcf;background-color:#cfcfcf;fill:#0b0b0b}.pd-search-label .pd-search-button{display:flex;justify-content:center;align-items:center;flex:0 0 3rem;border-top-right-radius:0.25rem;border-bottom-right-radius:0.25rem;background-color:#0b7285;border:0.125rem solid #0b7285;border-left:none;padding:0;cursor:pointer;fill:#ffffff}.pd-search-label .pd-search-clear{position:absolute;display:flex;align-items:center;justify-content:center;right:3.25rem;height:calc(100% - 0.125rem);top:1px;border:none;padding:0;background-color:transparent;cursor:pointer;fill:#0b7285}.pd-search-dropdown{background-color:#ffffff;z-index:100;width:100%;border:0.125em solid #0b7285;border-radius:0.25rem;overflow-y:auto;max-height:15.25rem}";

const Search = /*@__PURE__*/ proxyCustomElement(class Search extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdInput = createEvent(this, "pd-input");
        this.pdChange = createEvent(this, "pd-change");
        this.pdSearch = createEvent(this, "pd-search");
        this.pdBlur = createEvent(this, "pd-blur");
        this.pdFocus = createEvent(this, "pd-focus");
    }
    inputElement;
    menuElement;
    wrapperElement;
    popper;
    get element() { return this; }
    open = false;
    selectedIndex = -1;
    /**
     * Values shown as search results
     */
    results = [];
    /**
     * If `true`, the user cannot interact with the input.
     */
    disabled = false;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder;
    /**
     * The value of the input.
     */
    value = '';
    // used to hold input value in case we need to reset on escape
    inputValue = '';
    /**
     * Search box label
     */
    label;
    /**
     * Show matching parts in resuls as highlighted
     */
    highlight = true;
    /**
     * Input tag size (check pd-input 'size' for more info)
     */
    size = 1;
    /**
     * Emitted when a keyboard input occurred.
     */
    pdInput;
    /**
     * Emitted when the value has changed.
     */
    pdChange;
    /**
     * Emitted when a search request occurred.
     */
    pdSearch;
    /**
     * Emitted when the input loses focus.
     */
    pdBlur;
    /**
     * Emitted when the input has focus.
     */
    pdFocus;
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        this.pdChange.emit(this.value == null ? this.value : this.value.toString());
    }
    resultsChanged(results) {
        this.results = this.validateResults(results);
        if (this.results.length > 0) {
            this.selectedIndex = -1;
            this.open = true;
        }
        else
            this.open = false;
    }
    indexChanged(index) {
        const menu = this.element.shadowRoot.querySelector('.pd-search-dropdown');
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item');
        dropdownItemNodes.forEach((item, itemIndex) => {
            const centerItem = Math.ceil(5 / 2) - 1;
            if (itemIndex === index)
                menu.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }
    componentWillLoad() {
        this.results = this.validateResults(this.results);
    }
    componentDidLoad() {
        this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
    }
    componentDidUpdate() {
        this.popper.forceUpdate();
    }
    handleKeyDown(ev) {
        switch (ev.key) {
            case 'Tab': {
                this.open = false;
                break;
            }
            case 'Escape': {
                ev.preventDefault();
                this.open = false;
                this.value = this.inputValue;
                break;
            }
            case 'Enter': {
                ev.preventDefault();
                this.open = false;
                this.pdSearch.emit(this.value);
                this.inputValue = this.value;
                break;
            }
            case 'ArrowDown': {
                ev.preventDefault();
                // try to reopen if there are results
                if (!this.open && this.results?.length > 0) {
                    this.open = true;
                    return;
                }
                else if (!this.open)
                    return;
                const currentIndex = this.selectedIndex;
                this.selectedIndex = currentIndex >= this.results.length - 1 ? currentIndex : currentIndex + 1;
                this.setValue(this.results[this.selectedIndex]);
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                if (!this.open)
                    return;
                const currentIndex = this.selectedIndex;
                this.selectedIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
                this.setValue(this.results[this.selectedIndex]);
                break;
            }
            default: {
                this.selectedIndex = -1;
            }
        }
    }
    handleClickOutside(ev) {
        if (ev.target !== this.element) {
            this.open = false;
        }
    }
    /**
     * Sets focus on the specified `pd-input`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        if (this.inputElement) {
            this.inputElement.focus();
        }
    }
    onClickInput = () => {
        if (this.results?.length > 0) {
            this.open = true;
        }
    };
    onInput = (ev) => {
        const input = ev.target;
        this.setValue(input?.value || '', true);
        this.pdInput.emit(this.value);
    };
    onBlur = () => {
        if (!this.disabled)
            this.pdBlur.emit();
    };
    onFocus = () => {
        this.pdFocus.emit();
    };
    getValue() {
        return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
    }
    setValue(value, isInput = false) {
        this.value = value;
        if (isInput)
            this.inputValue = value;
    }
    selectItem(value, index) {
        this.setValue(value, true);
        this.selectedIndex = index;
        this.pdSearch.emit(this.value);
        this.open = false;
    }
    reset = (ev) => {
        ev.preventDefault();
        this.setValue('', true);
        this.pdSearch.emit(this.value);
        this.open = false;
    };
    search = (ev) => {
        ev.preventDefault();
        this.pdSearch.emit(this.value);
        this.open = false;
    };
    validateResults(results) {
        return Array.isArray(results) ? results : [];
    }
    // create a popper js element for the menu
    createMenuPopper(refElement, menu) {
        return createPopper(refElement, menu, {
            placement: 'bottom-start',
        });
    }
    render() {
        const value = this.getValue();
        return (h(Host, { key: '31eac2982635fa89a2bed173e078551c56904e02', role: "search" }, h("label", { key: '398e6c22bf5e7d165debd78eb18e37f7cc64d4ce', class: {
                'pd-search-label': true,
                'pd-search-disabled': this.disabled,
            }, "data-test": "pd-search-label" }, this.renderLabel(), h("div", { key: 'e5262d977d8b2d627434ff7c7990d593294e5df6', class: "pd-search-input-wrapper", ref: el => (this.wrapperElement = el) }, h("input", { key: 'dbd19fb6e4b0ce274a1263ff764cbb94768f5033', class: "pd-search-input", ref: el => (this.inputElement = el), disabled: this.disabled, placeholder: this.placeholder || '', value: value, onClick: this.onClickInput, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, size: this.size, "data-test": "pd-search-input" }), h("button", { key: '2d27f763a412e73386a88365ecdc1789cfbf9732', class: "pd-search-clear", onClick: this.reset, tabindex: "-1", "data-test": "pd-search-reset" }, h("pd-icon", { key: '45aa4e0762957d7c0e33c372136fb6451771bbdd', class: "pd-search-clear-icon", name: "cancel", size: 2.4 })), h("button", { key: '798b0968dfe8e4334fcbc0b2ec2aa238e39ad3fe', class: "pd-search-button", onClick: this.search, tabindex: "-1", "data-test": "pd-search-enter" }, h("pd-icon", { key: 'cc8a0eaaad40e80d2b1ba9e14b280a246851ea3c', class: "pd-search-button-icon", name: "search", size: 2.4 })))), this.renderDropdownItems()));
    }
    renderDropdownItems() {
        return (h("div", { ref: el => (this.menuElement = el), class: "pd-search-dropdown", style: {
                display: this.open ? 'block' : 'none',
            } }, this.results.map((searchString, i) => (h("pd-dropdown-item", { selected: i === this.selectedIndex || false, value: searchString, highlight: this.highlight ? this.inputValue : '', onClick: () => this.selectItem(searchString, i), "data-test": `pd-search-dropdown-item-${i}` })))));
    }
    renderLabel() {
        if (!this.label)
            return;
        return h("div", { class: "pd-search-label-text" }, this.label);
    }
    static get watchers() { return {
        "value": ["valueChanged"],
        "results": ["resultsChanged"],
        "selectedIndex": ["indexChanged"]
    }; }
    static get style() { return pdSearchCss; }
}, [1, "pd-search", {
        "results": [1040],
        "disabled": [4],
        "placeholder": [1],
        "value": [1032],
        "label": [1],
        "highlight": [4],
        "size": [2],
        "open": [32],
        "selectedIndex": [32],
        "setFocus": [64]
    }, [[0, "keydown", "handleKeyDown"], [16, "click", "handleClickOutside"]], {
        "value": ["valueChanged"],
        "results": ["resultsChanged"],
        "selectedIndex": ["indexChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-search", "pd-checkbox", "pd-dropdown-item", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-search":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Search);
            }
            break;
        case "pd-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "pd-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
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

const PdSearch = Search;
const defineCustomElement = defineCustomElement$1;

export { PdSearch, defineCustomElement };
//# sourceMappingURL=pd-search.js.map

//# sourceMappingURL=pd-search.js.map