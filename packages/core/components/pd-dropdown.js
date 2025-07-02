import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$4 } from './p-5FWjR2L-.js';
import { d as defineCustomElement$3 } from './p-B890ZVNx.js';
import { d as defineCustomElement$2 } from './p-Dc3vwJAQ.js';
import { c as createPopper } from './p-BfP9ezJQ.js';

const pdDropdownCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block}*,::before,::after{box-sizing:border-box;outline:none}.pd-dropdown-label{flex:1 1 auto;display:flex;flex-direction:column;font-size:0.875rem;max-width:100%}.pd-dropdown-label .pd-dropdown-label-text{padding-bottom:0.25rem;overflow:hidden;text-overflow:ellipsis}.pd-dropdown{position:relative;margin-top:var(--pd-dropdown-vertical-adjust, inherit)}.pd-dropdown .pd-dropdown-button{transition:box-shadow 0.15s ease-in-out;background-color:#0b7285;border:0.125em solid #0b7285;color:#ffffff;border-radius:0.25rem;padding-top:var(--pd-dropdown-vertical-padding, 0.625rem);padding-bottom:var(--pd-dropdown-vertical-padding, 0.625rem);padding-left:var(--pd-dropdown-horizontal-padding, 0.75rem);padding-right:var(--pd-dropdown-horizontal-padding, 2.5rem);cursor:pointer;display:flex;align-items:center;width:100%;font-weight:700}.pd-dropdown .pd-dropdown-button:hover:enabled{background-color:#15aabf;border-color:#15aabf;color:#ffffff}.pd-dropdown .pd-dropdown-button:disabled{background-color:#cfcfcf;border-color:#cfcfcf;color:#0b0b0b;font-style:italic}.pd-dropdown .pd-dropdown-button:disabled *{font-weight:500}.pd-dropdown .pd-dropdown-button:active:enabled{background-color:#66d9e8;border-color:#66d9e8;color:#033840}.pd-dropdown .pd-dropdown-button:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-dropdown .pd-dropdown-button.pd-button-outline{background-color:transparent;border-color:#0b7285;color:#0b7285}.pd-dropdown .pd-dropdown-button.pd-button-outline:hover:enabled{background-color:transparent;border-color:#15aabf;color:#15aabf}.pd-dropdown .pd-dropdown-button.pd-button-outline:disabled{background-color:transparent;color:#cfcfcf;border-color:#bababa}.pd-dropdown .pd-dropdown-button.pd-button-outline:active:enabled{background-color:transparent;border-color:#66d9e8;color:#0b7285}.pd-dropdown .pd-dropdown-button.pd-button-outline:focus-visible{background-color:#ffec99;border:0.125em solid #ffec99;color:#033840}.pd-dropdown .pd-dropdown-button .pd-dropdown-text{flex:1 1 auto;text-align:left;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;min-height:1.5rem}.pd-dropdown .pd-dropdown-button .pd-dropdown-text.pd-dropdown-text-wrap{white-space:normal}.pd-dropdown .pd-dropdown-button .pd-dropdown-caret{position:absolute;fill:#ffffff;flex:0 0 auto;right:0.5rem}.pd-dropdown .pd-dropdown-button:hover:enabled .pd-dropdown-caret{fill:#ffffff}.pd-dropdown .pd-dropdown-button:disabled{cursor:default}.pd-dropdown .pd-dropdown-button:disabled .pd-dropdown-caret{fill:#8c8c8c}.pd-dropdown .pd-dropdown-button:active:enabled .pd-dropdown-caret{fill:#033840}.pd-dropdown .pd-dropdown-button:focus-visible .pd-dropdown-caret{fill:#033840}.pd-dropdown.pd-dropdown-readonly .pd-dropdown-button{background-color:#e5e8eb;color:#0b0b0b;border-color:#e5e8eb;cursor:default;font-style:normal}.pd-dropdown.pd-dropdown-readonly .pd-dropdown-button .pd-dropdown-caret{display:none}.pd-dropdown.pd-dropdown-error .pd-dropdown-button{background:#fa5252;border-color:#fa5252;color:#0b0b0b}.pd-dropdown.pd-dropdown-error .pd-dropdown-button .pd-dropdown-caret{fill:#0b0b0b}.pd-dropdown.pd-dropdown-error .pd-dropdown-button:hover:enabled{background-color:#c92a2a;border-color:#c92a2a;color:#ffffff}.pd-dropdown.pd-dropdown-error .pd-dropdown-button:hover:enabled .pd-dropdown-caret{fill:#ffffff}.pd-dropdown.pd-dropdown-error .pd-dropdown-button:active:enabled{background-color:#ffa8a8;border-color:#ffa8a8;color:#c92a2a}.pd-dropdown.pd-dropdown-error .pd-dropdown-button:active:enabled .pd-dropdown-caret{fill:#c92a2a}.pd-dropdown.pd-dropdown-error .pd-dropdown-button:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-dropdown.pd-dropdown-error .pd-dropdown-button:focus-visible .pd-dropdown-caret{fill:#033840}.pd-dropdown-menu{background-color:#ffffff;border:0.125em solid #0b7285;border-radius:0.25rem;z-index:100;width:100%;overflow:auto}.pd-dropdown-viewonly{display:block;margin:0;padding:0.125rem 0 0.75rem 0}.pd-dropdown-label-viewonly{font-weight:700}";

const Dropdown = /*@__PURE__*/ proxyCustomElement(class Dropdown extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdChange = createEvent(this, "pd-change");
    }
    menuElement;
    buttonElement;
    popper;
    get element() { return this; }
    open = false;
    selectedItem;
    /**
     * Placeholder when no item is selected
     */
    placeholder = '';
    /**
     * Items to display and select in dropdown
     */
    items = [];
    /**
     * To select an item by prop. Needs to be an object with an id property, a string or a number.
     */
    selected;
    /**
     * Items visible in dropdown
     */
    itemCount = 5;
    /**
     * Enable selection of an empty item
     */
    emptyItem = false;
    /**
     * Data used for the empty item
     */
    emptyItemData = {
        id: '0',
        label: '-',
        value: null,
    };
    /**
     * If `true`, the user cannot interact with the input.
     */
    disabled = false;
    /**
     * If `true`, the dropdown is replaced with a simple text
     */
    viewOnly = false;
    _viewOnly = false;
    /**
     * Dropdown box label
     */
    label;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * Shows error state
     */
    error = false;
    /**
     * Default vertical adjustment for inline forms
     */
    verticalAdjust = false;
    /**
     * Selected item text wrap on words
     */
    textWrap = 'no-wrap';
    pdChange;
    /**
     * Set a preselected entry by index
     */
    async setSelectedIndex(index) {
        if (index >= 0 && index < this.items.length) {
            this.selectedItem = this.items[index];
            this.sanitizeInternalItems(this.items[index].id);
        }
    }
    /**
     * Reset the selection of the dropdown
     */
    async reset() {
        this.selectedItem = null;
    }
    viewOnlyChanged(viewOnly) {
        if (viewOnly && this.popper)
            this.popper.destroy();
    }
    selectedChanged(newItem) {
        const asdf = newItem;
        console.log('🚀 ~ asdf:', asdf);
        const selectedId = this.getIdfromSelectedProp();
        if (!selectedId)
            return;
        const itemToSelect = this.items.find(i => i.id === selectedId) || null;
        if (itemToSelect) {
            this.selectedItem = itemToSelect;
            this.sanitizeInternalItems(itemToSelect.id);
        }
    }
    handleClick(ev) {
        if (!ev.composedPath().includes(this.element))
            this.open = false;
    }
    handleKeyDown(ev) {
        switch (ev.key) {
            case 'Tab': {
                this.open = false;
                break;
            }
            case 'Escape':
            case 'Enter': {
                ev.preventDefault();
                this.open = false;
                break;
            }
            case 'ArrowDown': {
                ev.preventDefault();
                if (!this.open) {
                    this.open = true;
                    break;
                }
                const currentIndex = this.items.findIndex(item => item === this.selectedItem);
                const nextIndex = currentIndex >= this.items.length - 1 ? currentIndex : currentIndex + 1;
                const nextItem = this.items[nextIndex];
                if (nextItem !== this.selectedItem)
                    this.selectItem(nextItem);
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                const currentIndex = this.items.findIndex(item => item === this.selectedItem);
                const previousIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
                const previousItem = this.items[previousIndex];
                if (previousItem !== this.selectedItem)
                    this.selectItem(previousItem);
                break;
            }
            default: {
                const current = performance.now();
                // search when < 500ms between keystrokes
                if (current - this.inputTime < 500) {
                    this.currentSearch += ev.key;
                }
                else {
                    this.currentSearch = ev.key;
                }
                const currentItem = this.items.find(item => item.label.substring(0, this.currentSearch.length)?.toLowerCase() === this.currentSearch);
                if (currentItem)
                    this.selectedItem = currentItem;
                this.inputTime = current;
            }
        }
    }
    currentSearch = '';
    inputTime = 0;
    selectItem(item, closeDropdown = false) {
        this.selectedItem = item;
        this.sanitizeInternalItems(item.id);
        if (closeDropdown)
            this.open = false;
        this.pdChange.emit(item);
    }
    sanitizeInternalItems(selectedId) {
        this.items.forEach(item => {
            delete item.selected;
        });
        const index = this.items.findIndex(i => i.id === selectedId);
        this.items[index] = { ...this.items[index], selected: true };
    }
    getIdfromSelectedProp() {
        if (stringNumberCheck(this.selected)) {
            return this.selected.toString();
        }
        if (objectCheck(this.selected)) {
            return this.selected.id.toString();
        }
        console.error('pd-combobox: Invalid selected prop type. Expected string, number, or object with id property.');
        return null;
        function stringNumberCheck(val) {
            return (typeof val === 'string' && val !== '') || typeof val === 'number';
        }
        function objectCheck(val) {
            return typeof val === 'object' && val !== null && 'id' in val && stringNumberCheck(val.id);
        }
    }
    toggleDropdown = () => {
        if (!this.disabled && !this.readonly && !this.viewOnly)
            this.open = !this.open;
    };
    componentWillLoad() {
        if (this.selected) {
            const selectedId = this.getIdfromSelectedProp();
            if (!selectedId)
                return;
            this.selectedItem = this.items.find(item => item.id === selectedId);
            this.sanitizeInternalItems(this.selectedItem.id);
        }
        else {
            this.selectedItem = this.items.find(item => item.selected);
        }
    }
    componentDidLoad() {
        this._viewOnly = this.viewOnly;
        if (!this._viewOnly)
            this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
    }
    componentDidUpdate() {
        if (this._viewOnly !== this.viewOnly) {
            this._viewOnly = this.viewOnly;
            if (!this._viewOnly)
                this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
        }
        if (!this.open)
            return;
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item');
        this.scrollToSelected(dropdownItemNodes, this.menuElement);
        this.popper.forceUpdate();
    }
    scrollToSelected(dropdownItemNodes, menu) {
        dropdownItemNodes.forEach(item => {
            const centerItem = Math.ceil(this.itemCount / 2) - 1;
            if (item.selected)
                menu.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }
    // create a popper js element for the menu
    createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: 'bottom-start',
        });
    }
    render() {
        return (h(Host, { key: 'bbfd519327d5a1c18ba756bd3e243f09d0c4bb19' }, h("label", { key: 'd45aded9c06aa2ee72bde8b5609f2a8b610187af', class: {
                'pd-dropdown-label': true,
                'pd-dropdown-disabled': this.disabled,
            }, onClick: this.toggleDropdown, "data-test": "pd-dropdown-label" }, this.renderLabel()), !this.viewOnly ? (h("div", { class: {
                'pd-dropdown': true,
                'pd-dropdown-readonly': this.readonly,
                'pd-dropdown-error': this.error,
            }, style: this.verticalAdjust ? { '--pd-dropdown-vertical-adjust': '1.5625rem' } : {} }, h("button", { ref: el => (this.buttonElement = el), class: "pd-dropdown-button", type: "button", "aria-haspopup": "true", "aria-expanded": `${this.open}`, onClick: this.toggleDropdown, disabled: this.disabled || this.readonly, "data-test": "pd-dropdown-button" }, h("span", { class: { 'pd-dropdown-text': true, 'pd-dropdown-text-wrap': this.textWrap === 'wrap' }, "data-test": "pd-dropdown-text" }, this.selectedItem?.label || this.placeholder), h("pd-icon", { class: "pd-dropdown-caret", name: "dropdown", rotate: this.open ? 180 : 0, size: 2.4 })), this.renderDropDown())) : (h("p", { class: "pd-dropdown-viewonly" }, this.selectedItem?.label || ''))));
    }
    renderDropDown() {
        return (h("div", { ref: el => (this.menuElement = el), class: `pd-dropdown-menu`, style: {
                display: this.open ? 'block' : 'none',
                maxHeight: `calc(3em * ${this.itemCount} + 0.25em)`,
            }, tabIndex: -1 }, this.renderEmptyItem(), this.renderDropDownItems()));
    }
    renderDropDownItems() {
        return this.items.map((item, i) => (h("pd-dropdown-item", { value: item.label, selected: item.id === this.selectedItem?.id || false, onClick: () => this.selectItem(item, true), "data-test": `pd-dropdown-item-${i}` })));
    }
    renderEmptyItem() {
        if (!this.emptyItem)
            return;
        return (h("pd-dropdown-item", { value: this.emptyItemData.label, selected: this.emptyItemData.id === this.selectedItem?.id || false, onClick: () => this.selectItem(this.emptyItemData, true), "data-test": `pd-dropdown-item-empty` }));
    }
    renderLabel() {
        if (!this.label)
            return;
        return (h("span", { class: {
                'pd-dropdown-label-text': true,
                'pd-dropdown-label-viewonly': this.viewOnly,
            } }, this.label));
    }
    static get assetsDirs() { return ["assets-dropdown"]; }
    static get watchers() { return {
        "viewOnly": ["viewOnlyChanged"],
        "selected": ["selectedChanged"]
    }; }
    static get style() { return pdDropdownCss; }
}, [1, "pd-dropdown", {
        "placeholder": [1],
        "items": [16],
        "selected": [8],
        "itemCount": [2, "item-count"],
        "emptyItem": [4, "empty-item"],
        "emptyItemData": [16, "empty-item-data"],
        "disabled": [4],
        "viewOnly": [4, "view-only"],
        "label": [1],
        "readonly": [4],
        "required": [4],
        "error": [4],
        "verticalAdjust": [4, "vertical-adjust"],
        "textWrap": [1, "text-wrap"],
        "open": [32],
        "selectedItem": [32],
        "setSelectedIndex": [64],
        "reset": [64]
    }, [[16, "click", "handleClick"], [0, "keydown", "handleKeyDown"]], {
        "viewOnly": ["viewOnlyChanged"],
        "selected": ["selectedChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-dropdown", "pd-checkbox", "pd-dropdown-item", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Dropdown);
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

const PdDropdown = Dropdown;
const defineCustomElement = defineCustomElement$1;

export { PdDropdown, defineCustomElement };
//# sourceMappingURL=pd-dropdown.js.map

//# sourceMappingURL=pd-dropdown.js.map