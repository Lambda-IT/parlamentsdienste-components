import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$1 } from './p-CGp-npjr.js';

const pdTableFilterCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:flex;background-color:#ffffff;border-radius:0.25em;box-shadow:0px 0px 8px rgba(11, 11, 11, 0.45);z-index:90}*,::before,::after{box-sizing:border-box;outline:none}.pd-table-filter-wrapper{display:flex;padding:0.5em 0 0.5em 0.75em}.pd-table-filter-clear{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none;align-items:center;margin:0 0.6875rem;padding:0 0.3125rem;display:flex;fill:#0b7285}.pd-table-filter-clear:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-table-filter-confirm{padding:0 0.8125rem;background-color:#033840;fill:#ffffff;border:none;border-top-right-radius:0.25em;border-bottom-right-radius:0.25em}.pd-table-filter-confirm:hover{background-color:#0b7285;fill:#ffffff}.pd-table-filter-confirm:active{background-color:#15aabf;fill:#ffffff}.pd-table-filter-confirm:focus-visible{background-color:#ffec99;fill:#033840}.pd-table-search-input-wrapper{display:flex;position:relative}.pd-table-search-input{flex:1 1 auto;min-width:0;padding:0.625em 0.875em;padding-right:3em;border-top-left-radius:0.25em;border-bottom-left-radius:0.25em;border:0.125em solid #0b7285;border-right:none}.pd-table-search-input:focus-visible{background-color:#fff3bf;color:#033840}.pd-table-search-button{display:flex;justify-content:center;align-items:center;flex:0 0 3em;height:100%;border-top-right-radius:0.25em;border-bottom-right-radius:0.25em;background-color:#0b7285;border:0.125em solid #0b7285;border-left:none;padding:0;cursor:pointer}.pd-table-search-button:hover{background-color:#15aabf}.pd-table-search-button:active{background-color:#66d9e8}.pd-table-search-button .pd-table-search-button-icon{fill:#ffffff}";

const TableFilter = /*@__PURE__*/ proxyCustomElement(class TableFilter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdConfirm = createEvent(this, "pd-confirm");
        this.pdClose = createEvent(this, "pd-close");
        this.pdInputChange = createEvent(this, "pd-filter-input");
    }
    get element() { return this; }
    inputRef;
    /**
     * filter value
     */
    value = '';
    /**
     * Emitted when filter is confirmed.
     */
    pdConfirm;
    /**
     * Emitted when filter is confirmed.
     */
    pdClose;
    /**
     * Emitted when filter input value changed.
     */
    pdInputChange;
    async reset() {
        this.value = '';
    }
    async setValue(value) {
        this.value = value;
    }
    async focusInput() {
        this.inputRef.focus();
    }
    onClear = () => {
        this.value = '';
        this.inputRef.focus();
        this.value = this.value;
    };
    onConfirm = () => {
        this.pdConfirm.emit(this.value);
    };
    handleFilterChange(ev) {
        this.value = ev.target.value;
        this.pdInputChange.emit(this.value);
    }
    onSubmit(ev) {
        if (ev.key !== 'Enter')
            return;
        this.pdConfirm.emit(this.value);
    }
    handleClick(ev) {
        // the filter is inside the shadowdom of the table, we need to find the clicked element inside of the shadow dom
        // ev.target doesn't work because of that
        if (!ev.composedPath().includes(this.element))
            this.pdClose.emit();
    }
    render() {
        return (h(Host, { key: '6749f2a3e413a546eb8a2435c26fa146e71056d5' }, h("div", { key: '98f74983f5fce1979bb6cf191a649a5d3351fd6f', class: "pd-table-filter-wrapper" }, h("div", { key: '1d61f4c2f1f29e45d01d00b8e94f147d62d8b2f8', class: "pd-table-search-input-wrapper" }, h("input", { key: 'cc04a1f677edb7a3521eded3fd30de141e9889ef', ref: el => (this.inputRef = el), class: "pd-table-search-input", onInput: ev => this.handleFilterChange(ev), placeholder: "Stichwort, Name \u2026", value: this.value, onKeyDown: ev => this.onSubmit(ev), "data-test": "pd-table-filter-input" }), h("button", { key: 'd9394560a0b8e4c3ea40069d0c2bf4df5783526f', class: "pd-table-search-button", onClick: this.onConfirm, tabindex: "-1" }, h("pd-icon", { key: '02abb017ca28a72839207105b6a793b4eac2491d', class: "pd-table-search-button-icon", name: "search", size: 2.375 }))), h("button", { key: '282552a7e750bebc8ccd266dbf5622c0de812e4f', class: "pd-table-filter-clear", onClick: this.onClear, "data-test": "pd-table-filter-clear" }, h("pd-icon", { key: '200a67511376a35d034bd7cf9e3812f7749507bf', class: "pd-table-filter-close", size: 2.375, name: "close" })))));
    }
    static get style() { return pdTableFilterCss; }
}, [1, "pd-table-filter", {
        "value": [1025],
        "reset": [64],
        "setValue": [64],
        "focusInput": [64]
    }, [[16, "click", "handleClick"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-table-filter", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-table-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableFilter);
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

export { TableFilter as T, defineCustomElement as d };
//# sourceMappingURL=p-BZMk-qiC.js.map

//# sourceMappingURL=p-BZMk-qiC.js.map