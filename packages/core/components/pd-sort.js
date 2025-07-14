import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$4 } from './p-CiZ4Y22d.js';
import { d as defineCustomElement$3 } from './p-DdjZSDbb.js';
import { d as defineCustomElement$2 } from './p-CGp-npjr.js';
import { c as createPopper } from './p-BfP9ezJQ.js';

const pdSortCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}*,::before,::after{box-sizing:border-box;outline:none}.pd-sort{position:relative;display:inline-block}.pd-sort .pd-sort-button{color:#0b7285;background-color:transparent;border:none;cursor:pointer;display:flex;align-items:center;padding:0}.pd-sort .pd-sort-button .pd-sort-text{text-align:left;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;min-height:1.5rem}.pd-sort .pd-sort-button .pd-sort-caret{fill:#0b7285}.pd-sort .pd-sort-button:hover:enabled .pd-sort-caret{fill:#15aabf}.pd-sort .pd-sort-button:hover:enabled .pd-sort-text{color:#15aabf}.pd-sort .pd-sort-button:disabled{cursor:default}.pd-sort .pd-sort-button:disabled .pd-sort-caret{fill:#8c8c8c}.pd-sort .pd-sort-button:focus-visible .pd-sort-caret{fill:#033840}.pd-sort-menu{background-color:#ffffff;border:0.125em solid #0b7285;border-radius:0.25rem;z-index:100;overflow:auto}.pd-sort-menu .pd-sort-menu-bottom-separator{border-top:0.125em solid #0b7285}";

const Dropdown = /*@__PURE__*/ proxyCustomElement(class Dropdown extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdChange = createEvent(this, "pd-change");
        this.pdReverse = createEvent(this, "pd-reverse");
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
     * Items visible in dropdown
     */
    itemCount = 7;
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
        sort: null,
    };
    /**
     * Enables the revert item at the bottom of the dropdown
     */
    reverseItem = false;
    /**
     * Data used for the reverse item at the bottom of the dropdown
     */
    reverseItemData = {
        label: 'Sort. Umkehren',
        selected: false,
    };
    /**
     * If `true`, the user cannot interact with the input.
     */
    disabled = false;
    /**
     * Label
     */
    label = 'Sortieren nach:';
    pdChange;
    pdReverse;
    /**
     * Set a preselected entry by index
     */
    async setSelectedIndex(index) {
        if (index >= 0 && index < this.items.length) {
            this.items[index] = { ...this.items[index], selected: true };
            this.selectedItem = this.items[index];
        }
    }
    /**
     * Reset the selection of the dropdown
     */
    async reset() {
        this.selectedItem = null;
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
        }
    }
    selectItem(item, closeDropdown = false) {
        this.selectedItem = item;
        if (this.reverseItem && this.reverseItemData.selected) {
            this.reverseItemData.selected = false;
        }
        if (closeDropdown)
            this.open = false;
        this.pdChange.emit(item);
    }
    reverseItemClicked() {
        if (!this.selectedItem)
            return;
        // If we already have a reverse item selected, we reselect the already selected item which will trigger the pdChange event and unselect the reverse item
        if (this.reverseItemData.selected) {
            this.selectItem(this.selectedItem, true);
            return;
        }
        this.reverseItemData.selected = true;
        this.open = false;
        this.pdReverse.emit(this.selectedItem);
    }
    toggleDropdown = () => {
        if (!this.disabled)
            this.open = !this.open;
    };
    componentWillLoad() {
        this.selectedItem = this.items.find(item => item.selected);
    }
    componentDidLoad() {
        this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
    }
    componentDidUpdate() {
        this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
        if (this.open)
            this.popper.forceUpdate();
    }
    // create a popper js element for the menu
    createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: 'bottom-end',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [-12, 0],
                    },
                },
            ],
        });
    }
    render() {
        return (h(Host, { key: 'df0dcf2f0431fd78730f5cbd5366d7c8e4b9d682' }, h("div", { key: '4f9b1fa6b5f47674a35430849a066a5140b5f729', class: {
                'pd-sort': true,
            } }, h("button", { key: 'ccd9a1d4a9ae8b04f89b17346500b87768adeebe', ref: el => (this.buttonElement = el), class: "pd-sort-button", type: "button", "aria-haspopup": "true", "aria-expanded": `${this.open}`, onClick: this.toggleDropdown, disabled: this.disabled, "data-test": "pd-sort-button" }, h("span", { key: 'cb410f35e7495bd96106555926b7349e76c51e2e', class: { 'pd-sort-text': true }, "data-test": "pd-dropdown-text" }, this.label + ' ', this.selectedItem?.label || this.placeholder), h("pd-icon", { key: 'ef7712827b58ebfc9f35fe2199ffae7ea13b1e4e', class: "pd-sort-caret", name: "dropdown", rotate: this.open ? 180 : 0, size: 2.4, lazy: false })), this.renderDropDown())));
    }
    renderDropDown() {
        return (h("div", { ref: el => (this.menuElement = el), class: `pd-sort-menu`, style: {
                display: this.open ? 'block' : 'none',
                maxHeight: `calc(3em * ${this.itemCount} + 0.5em)`,
            }, tabIndex: -1 }, this.renderEmptyItem(), this.renderDropDownItems(), this.renderReverseItem()));
    }
    renderDropDownItems() {
        return this.items
            .filter(item => item.sort)
            .map((item, i) => (h("pd-dropdown-item", { value: item.label, selected: item.id === this.selectedItem?.id || false, onClick: () => this.selectItem(item, true), "data-test": `pd-sort-item-${i}` })));
    }
    renderReverseItem() {
        if (!this.reverseItem || !this.selectedItem)
            return;
        return (h("div", { class: "pd-sort-menu-bottom-separator" }, h("pd-dropdown-item", { value: this.reverseItemData.label, selected: this.reverseItemData.selected || false, onClick: () => this.reverseItemClicked(), "data-test": `pd-sort-revert-item` })));
    }
    renderEmptyItem() {
        if (!this.emptyItem)
            return;
        return (h("pd-dropdown-item", { value: this.emptyItemData.label, selected: this.emptyItemData.id === this.selectedItem?.id || false, onClick: () => this.selectItem(this.emptyItemData, true), "data-test": `pd-sort-item-empty` }));
    }
    static get style() { return pdSortCss; }
}, [1, "pd-sort", {
        "placeholder": [1],
        "items": [16],
        "itemCount": [2, "item-count"],
        "emptyItem": [4, "empty-item"],
        "emptyItemData": [16, "empty-item-data"],
        "reverseItem": [4, "reverse-item"],
        "reverseItemData": [16, "reverse-item-data"],
        "disabled": [4],
        "label": [1],
        "open": [32],
        "selectedItem": [32],
        "setSelectedIndex": [64],
        "reset": [64]
    }, [[16, "click", "handleClick"], [0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-sort", "pd-checkbox", "pd-dropdown-item", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-sort":
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

const PdSort = Dropdown;
const defineCustomElement = defineCustomElement$1;

export { PdSort, defineCustomElement };
//# sourceMappingURL=pd-sort.js.map

//# sourceMappingURL=pd-sort.js.map