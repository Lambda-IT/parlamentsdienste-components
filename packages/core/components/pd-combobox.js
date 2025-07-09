import { g as getRenderingRef, f as forceUpdate, p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$5 } from './p-vOTrkory.js';
import { d as defineCustomElement$4 } from './p-N4wq9D63.js';
import { d as defineCustomElement$3 } from './p-D4zO_mx5.js';
import { d as defineCustomElement$2 } from './p-BRUwU7Wr.js';
import { c as createPopper } from './p-BfP9ezJQ.js';

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2_000);
const stencilSubscription = () => {
    if (typeof getRenderingRef !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState ?? {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries(unwrap(defaultState) ?? {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

/**
 * Extracts an array of string IDs from the `selected` prop for the combobox component.
 *
 * Accepts a value that can be:
 * - a string or number (single selection)
 * - an object with an `id` property (single selection)
 * - an array of strings, numbers, or objects with an `id` property (multi-selection)
 *
 * If `multiselect` is false and multiple IDs are found, only the first is returned and a warning is logged.
 * If the input is invalid, logs an error and returns null.
 *
 * @param newSelected - The value of the selected prop (string, number, object with id, or array of these)
 * @param multiselect - Whether multiple selections are allowed
 * @returns An array of string IDs, or null if input is invalid
 */
function getIdsfromSelectedProp(newSelected, multiselect) {
    if (!newSelected)
        return null;
    const ids = (function () {
        if (isStringOrNumber(newSelected)) {
            return [newSelected.toString()];
        }
        if (Array.isArray(newSelected)) {
            if (newSelected.every(item => isStringOrNumber(item))) {
                return newSelected.map(item => item.toString());
            }
            if (newSelected.every(item => IsObjectWithId(item))) {
                return newSelected.map(item => item.id.toString());
            }
        }
        if (IsObjectWithId(newSelected)) {
            return [newSelected.id.toString()];
        }
        return null;
    })();
    if (!ids || ids.length === 0) {
        console.error('pd-combobox: Invalid selected prop type. Expected string, number or object with id property or an Array of those types when multiselect is enabled.');
        return null;
    }
    if (multiselect) {
        return ids;
    }
    if (ids.length > 1) {
        console.warn('pd-combobox: Trying to select multiple items when multiselect is not enabled. Using the first item.');
        return [ids[0]];
    }
    if (ids.length === 1) {
        return ids;
    }
    return null;
    function isStringOrNumber(val) {
        return (typeof val === 'string' && val !== '') || typeof val === 'number';
    }
    function IsObjectWithId(val) {
        return typeof val === 'object' && val !== null && 'id' in val && isStringOrNumber(val.id);
    }
}

function isUserNavigating(state) {
    return state.open && state.currentNavigatedIndex > -1;
}
function openDropdownOrCloseWhenNotAllowed(state, disabled, viewOnly, readOnly) {
    if (isAllowOpen(state, disabled, viewOnly, readOnly)) {
        state.open = true;
        return;
    }
    if (state.open)
        closeDropdown(state);
}
function isAllowOpen(state, disabled, viewOnly, readOnly) {
    return state.filteredItems.length > 0 && !disabled && !viewOnly && !readOnly;
}
function closeDropdown(state) {
    state.open = false;
    state.currentNavigatedIndex = -1;
}
function getFirstSelectedItem(state) {
    return state.filteredItems.find(item => item.selected) || null;
}
function navigateToNextItem(state, direction) {
    //if we have a selected item we just jump there on the first press of an arrow key
    if (getFirstSelectedItem(state) && state.currentNavigatedIndex === -1) {
        setCurrentNavigatedIndexToSelectedItem(state);
        return;
    }
    switch (direction) {
        case 'down': {
            if (state.currentNavigatedIndex < state.filteredItems.length - 1) {
                state.currentNavigatedIndex++;
            }
            break;
        }
        case 'up': {
            if (state.currentNavigatedIndex > 0) {
                state.currentNavigatedIndex--;
            }
            break;
        }
    }
}
function setCurrentNavigatedIndexToSelectedItem(state) {
    state.currentNavigatedIndex = state.filteredItems.indexOf(getFirstSelectedItem(state));
}
function selectedHasIcon(state) {
    return state.selectedItem?.iconName || state.selectedItem?.iconSrc ? true : false;
}

const pdComboboxCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:flex;position:relative}*,::before,::after{box-sizing:border-box;appearance:none;outline:none}.pd-combobox-label{flex:1 1 auto;display:flex;flex-direction:column;margin-top:var(--pd-combobox-vertical-adjust, inherit);width:100%;max-width:100%}.pd-combobox-label .pd-combobox-label-text{font-size:0.875rem;padding-bottom:0.25rem;overflow:hidden;text-overflow:ellipsis}.pd-combobox-label .pd-combobox-input-wrapper{display:flex;position:relative}.pd-combobox-label .pd-combobox-input{flex:1 1 auto;width:100%;padding:0.625em 0.875rem;padding-right:3rem;padding-left:3rem;border-radius:0.25rem;border:0.125rem solid #0b7285;transition-property:padding-left;transition-duration:0.1s}.pd-combobox-label .pd-combobox-input:focus-visible{background-color:#fff3bf;color:#033840}.pd-combobox-label .pd-combobox-input:focus-visible .pd-combobox-icon{fill:#033840}.pd-combobox-label .pd-combobox-input.pd-combobox-input-with-multiselect-counter{padding-left:8rem}.pd-combobox-label .pd-combobox-icon{position:absolute;display:flex;align-items:center;justify-content:center;height:calc(100% - 0.125rem);top:1px;border:none;padding:0;background-color:transparent;cursor:pointer;fill:#0b7285}.pd-combobox-label .pd-combobox-icon.left{left:0.65rem}.pd-combobox-label .pd-combobox-icon.right{right:0.25rem}.pd-combobox-label .pd-combobox-icon.pd-combobox-multiselect-counter{left:3.5rem}.pd-combobox-label:hover .pd-combobox-input{border-color:#15aabf}.pd-combobox-label:hover .pd-combobox-icon{fill:#15aabf}.pd-combobox-label.pd-combobox-disabled .pd-combobox-input{font-style:italic;border-color:#cfcfcf;background-color:#ffffff}.pd-combobox-label.pd-combobox-disabled .pd-combobox-icon{fill:#cfcfcf;cursor:default}.pd-combobox-label.pd-combobox-readonly{pointer-events:none}.pd-combobox-label.pd-combobox-readonly .pd-combobox-input{border-color:#e5e8eb;background-color:#e5e8eb;color:#0b0b0b}.pd-combobox-label.pd-combobox-readonly .pd-combobox-input:focus-visible{background-color:#fff3bf}.pd-combobox-label.pd-combobox-readonly .pd-combobox-icon{fill:#0b0b0b}.pd-combobox-label.pd-combobox-error .pd-combobox-input{border-color:#b33529;background:#ffa8a8;color:#0b0b0b}.pd-combobox-label.pd-combobox-error .pd-combobox-input:focus-visible{background-color:#fff3bf}.pd-combobox-label.pd-combobox-error .pd-combobox-icon{fill:#0b0b0b}.pd-combobox-label.pd-combobox-item-selected .pd-combobox-icon{fill:#ffffff}.pd-combobox-label.pd-combobox-item-selected .pd-combobox-input{font-weight:700;padding-left:0.875rem;background-color:#0b7285;color:#ffffff}.pd-combobox-label.pd-combobox-item-selected .pd-combobox-input:focus-visible{background-color:#ffec99;border-color:#ffec99;color:#033840}.pd-combobox-label.pd-combobox-item-selected .pd-combobox-input:focus-visible~.pd-combobox-icon{fill:#033840}.pd-combobox-label.pd-combobox-item-selected .pd-combobox-input.pd-combobox-input-with-icon{padding-left:3rem}.pd-combobox-label.pd-combobox-item-selected:hover .pd-combobox-input{color:#ffffff;background-color:#15aabf;border-color:#15aabf}.pd-combobox-label.pd-combobox-item-selected:hover .pd-combobox-input:active:enabled~.pd-combobox-icon{fill:#033840}.pd-combobox-label.pd-combobox-item-selected:hover .pd-combobox-input:focus-visible~.pd-combobox-icon{fill:#ffffff}.pd-combobox-label.pd-combobox-item-selected:active .pd-combobox-input{color:#033840;background-color:#66d9e8;border-color:#66d9e8}.pd-combobox-label.pd-combobox-item-selected:active .pd-combobox-icon{fill:#033840}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-disabled{pointer-events:none}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-disabled .pd-combobox-input{color:#0b0b0b;background-color:#cfcfcf;border-color:#cfcfcf;font-weight:500}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-disabled .pd-combobox-icon{fill:#0b0b0b;cursor:default}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-readonly{pointer-events:none}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-readonly .pd-combobox-input{color:#0b0b0b;background-color:#e5e8eb;border-color:#e5e8eb;font-weight:500}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-readonly .pd-combobox-input:focus-visible{background-color:#ffec99;border-color:#ffec99}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-readonly .pd-combobox-icon{fill:#0b0b0b}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-error .pd-combobox-input{border-color:#fa5252;background:#fa5252;color:#0b0b0b;font-weight:700}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-error .pd-combobox-input:focus-visible{background-color:#ffec99;border-color:#ffec99}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-error .pd-combobox-icon{fill:#0b0b0b}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-error:hover .pd-combobox-input{color:#ffffff;background-color:#c92a2a;border-color:#c92a2a}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-error:hover .pd-combobox-input:focus-visible:active~.pd-combobox-icon{fill:#c92a2a}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-error:hover .pd-combobox-icon{fill:#ffffff}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-error:active .pd-combobox-input{color:#c92a2a;background-color:#ffa8a8;border-color:#ffa8a8}.pd-combobox-label.pd-combobox-item-selected.pd-combobox-error:active .pd-combobox-icon{fill:#c92a2a}.pd-combobox-dropdown{background-color:#ffffff;z-index:100;width:100%;border:0.125rem solid #0b7285;border-radius:0.25rem;overflow-y:auto;max-height:calc(15em + 0.25rem)}.pd-combobox-viewonly{display:block;margin:0;padding:0.125rem 0 0.75rem 0}.pd-combobox-label-viewonly{font-weight:700}";

const Combobox = /*@__PURE__*/ proxyCustomElement(class Combobox extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdInput = createEvent(this, "pd-input");
        this.pdChange = createEvent(this, "pd-change");
        this.pdCombobox = createEvent(this, "pd-combobox");
        this.pdBlur = createEvent(this, "pd-blur");
        this.pdFocus = createEvent(this, "pd-focus");
    }
    nativeInput;
    menuElement;
    wrapperElement;
    popper;
    state;
    get element() { return this; }
    /**
     * Values shown as combobox items
     */
    items = [];
    /**
     * To select an item by prop. Needs to be an object with an id property, a string or a number.
     */
    selected;
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
     * If `true`, the combobox is replaced with a simple text
     */
    viewOnly = false;
    _viewOnly = false;
    /**
     * If `true`, the user cannot modify the value.
     */
    readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    required = false;
    /**
     * If `true`, the combobox get a selected state like a dropdown.
     */
    selectable = false;
    /**
     * If `true`, the combobox can select multiple items.
     */
    multiselect = false;
    /**
     * If `true`, the button to deselect all selected items will not be shown.
     */
    disableMultiselectCounter = false;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder;
    /**
     * The value of the input.
     */
    value = '';
    /**
     * combobox box label
     */
    label;
    /**
     * Items visible in dropdown
     */
    itemCount = 5;
    /**
     * Show matching parts in results as highlighted
     */
    highlight = true;
    /**
     * Shows error state
     */
    error = false;
    /**
     * Input tag size (check pd-input 'size' for more info)
     */
    size = 1;
    /**
     * Default vertical adjustment for inline forms
     */
    verticalAdjust = false;
    /**
     * If true, the combobox will not search/filter in the items (for example when the combobox is used to make backend searches)
     */
    disableFilter = false;
    /**
     * Emitted when a keyboard input occurred.
     */
    pdInput;
    /**
     * Emitted when the value has changed.
     */
    pdChange;
    /**
     * Emitted when a combobox request occurred.
     */
    pdCombobox;
    /**
     * Emitted when the input loses focus.
     */
    pdBlur;
    /**
     * Emitted when the input has focus.
     */
    pdFocus;
    /**
     * Set a preselected entry by index
     */
    async setSelectedIndex(index) {
        if (index >= 0 && index < this.state.items.length) {
            this.state.items[index] = { ...this.state.items[index], selected: true };
            this.selectItem(this.state.items[index], null, false);
        }
    }
    /**
     * Reset the selection of the dropdown
     */
    async reset() {
        this.resetCombobox();
    }
    /**
     * Set the open-close state of the dropdown
     */
    async setOpen(open = true) {
        //To ignore the outside click who triggers the close-event
        setTimeout(() => {
            this.state.open = open;
        }, 0);
    }
    /**
     * Sets focus on the specified `pd-input`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    viewOnlyChanged(viewOnly) {
        if (viewOnly && this.popper)
            this.popper.destroy();
    }
    itemsChanged(items) {
        this.state.items = this.validateItems(items);
        this.state.filteredItems = this.state.items;
        this.filterItems();
        if (this.selectable) {
            const selectedItem = this.state.items.find(item => item.selected) ?? null;
            //if this condition is true the user is typing and we dont want to interupt such a behaviour
            if (this.state.inputValue !== '' && this.state.inputValue !== this.state.selectedItem?.label) {
                //we just want so set the state (used for styling)
                this.state.selectedItem = selectedItem;
            }
            else if (selectedItem) {
                // really select it (set label to selected)
                this.selectItem(selectedItem, null, false);
            }
        }
    }
    selectedChanged(newSelected) {
        const itemsToSelect = getIdsfromSelectedProp(newSelected, this.multiselect);
        if (!itemsToSelect)
            return;
        this.state.items = this.validateItems(this.state.items);
        this.state.filteredItems = this.state.items;
    }
    handleClickOutside(ev) {
        if (!this.state.open)
            return;
        if (ev.target !== this.element && this.state) {
            closeDropdown(this.state);
        }
    }
    componentWillLoad() {
        /* **************************************************
         ***                 Initial State                 ***
         ****************************************************/
        const { state, onChange } = createStore({
            items: this.validateItems(this.items),
            filteredItems: this.validateItems(this.items),
            open: false,
            selectedItem: null,
            inputValue: this.value,
            currentNavigatedIndex: -1, // -1 = user is not navigating
        });
        this.state = state;
        onChange('selectedItem', () => {
            this.pdChange.emit(this.state.selectedItem);
        });
        onChange('items', () => {
            if (this.multiselect)
                this.pdChange.emit(this.state.items.filter(item => item.selected));
        });
        if (!this.multiselect) {
            const idFromSelectedProp = getIdsfromSelectedProp(this.selected, this.multiselect);
            let selectedItem = this.selected && idFromSelectedProp
                ? this.state.items.find(item => item.id === idFromSelectedProp[0]) ?? null
                : this.state.items.find(item => item.selected) ?? null;
            //If there is an input value, we want to see if it matches an item
            if (this.state.inputValue) {
                selectedItem = this.state.items.filter(i => i.label === this.state.inputValue).shift();
            }
            if (selectedItem) {
                this.selectItem(selectedItem, null, false);
            }
        }
    }
    componentDidLoad() {
        this._viewOnly = this.viewOnly;
        if (!this._viewOnly)
            this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
    }
    componentDidUpdate() {
        if (this._viewOnly !== this.viewOnly) {
            this._viewOnly = this.viewOnly;
            if (!this._viewOnly) {
                this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
            }
        }
        if (!this.state.open)
            return;
        this.popper.forceUpdate();
        if (isUserNavigating(this.state)) {
            this.scrollToItem(this.state.currentNavigatedIndex);
        }
    }
    scrollToItem(index) {
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item');
        const itemHeight = dropdownItemNodes.length ? dropdownItemNodes[0].getBoundingClientRect().height : 0;
        if (itemHeight === 0)
            return;
        const scrollY = index * itemHeight - (Math.ceil(this.itemCount / 2) - 1) * itemHeight;
        this.menuElement.scrollTop = scrollY;
    }
    validateItems(items) {
        if (!Array.isArray(items))
            return;
        const emptyItem = this.emptyItem && items[0] !== this.emptyItemData ? [this.emptyItemData] : [];
        if (!this.multiselect && !this.selectable) {
            const allItemsUnselected = items.map(item => ({ ...item, selected: false }));
            return [...emptyItem, ...allItemsUnselected];
        }
        if (this.selected) {
            const selectedIds = getIdsfromSelectedProp(this.selected, this.multiselect);
            if (!selectedIds)
                return;
            const itemsWithSelected = items.map(item => ({
                ...item,
                selected: selectedIds.includes(item.id.toString()),
            }));
            return [...emptyItem, ...itemsWithSelected];
        }
        return [...emptyItem, ...items];
    }
    handleKeyDown(ev) {
        if (this.readonly || this.disabled)
            return;
        switch (ev.key) {
            case 'ArrowRight': {
                this.menuElement.scrollTop = 50;
                break;
            }
            case 'Tab': {
                this.state.open = false;
                break;
            }
            case 'Escape': {
                ev.preventDefault();
                if (this.state.open) {
                    this.escape();
                    closeDropdown(this.state);
                }
                else {
                    if (this.selectable && this.state.selectedItem) {
                        this.pdCombobox.emit(null);
                    }
                    this.resetCombobox();
                    this.setFocus();
                }
                break;
            }
            case 'Enter': {
                ev.preventDefault();
                if (isUserNavigating(this.state)) {
                    this.selectItem(this.state.filteredItems[this.state.currentNavigatedIndex]);
                }
                else if (isAllowOpen(this.state, this.disabled, this.viewOnly, this.readonly)) {
                    this.state.open = true;
                    navigateToNextItem(this.state, 'up');
                }
                break;
            }
            case 'ArrowDown': {
                ev.preventDefault();
                openDropdownOrCloseWhenNotAllowed(this.state, this.disabled, this.viewOnly, this.readonly);
                navigateToNextItem(this.state, 'down');
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                openDropdownOrCloseWhenNotAllowed(this.state, this.disabled, this.viewOnly, this.readonly);
                navigateToNextItem(this.state, 'up');
                break;
            }
        }
    }
    selectItem(comboboxItem, ev, emitPdCombobox = true) {
        if (ev)
            ev.preventDefault();
        if (this.multiselect) {
            comboboxItem.selected = !comboboxItem.selected;
            this.state.items = this.state.items.map(item => (item.id === comboboxItem.id ? comboboxItem : item));
            this.state.filteredItems = this.state.filteredItems.map(item => item.id === comboboxItem.id ? comboboxItem : item);
            if (emitPdCombobox) {
                this.pdCombobox.emit(this.state.items.filter(item => item.selected));
            }
            this.setFocus();
            return;
        }
        this.state.inputValue = comboboxItem.label;
        this.state.selectedItem = comboboxItem;
        if (this.selectable) {
            this.state.items = this.state.items.map(item => ({ ...item, selected: item.id === comboboxItem.id }));
            this.state.filteredItems = this.state.items;
            closeDropdown(this.state);
        }
        if (emitPdCombobox)
            this.pdCombobox.emit(this.state.selectedItem);
        if (!this.selectable)
            this.resetCombobox();
    }
    selectItemByClick(comboboxItem, ev) {
        ev.preventDefault();
        this.selectItem(comboboxItem);
        if (this.multiselect) {
            this.state.currentNavigatedIndex = -1;
            return;
        }
        if (this.selectable) {
            closeDropdown(this.state);
            return;
        }
        this.resetCombobox();
    }
    resetCombobox = (ev) => {
        if (ev)
            ev.preventDefault();
        this.state.filteredItems = this.state.items;
        this.state.inputValue = '';
        this.state.selectedItem = null;
        closeDropdown(this.state);
    };
    clearValueWithIconClick() {
        if (this.selectable && this.state.selectedItem) {
            this.pdCombobox.emit(null);
        }
        this.resetCombobox();
        this.setFocus();
    }
    deselectAllItems() {
        this.state.items = this.state.items.map(item => ({ ...item, selected: false }));
        this.state.filteredItems = this.state.items;
        this.pdCombobox.emit(null);
    }
    onInputClick = () => {
        if (this.state.open === true) {
            closeDropdown(this.state);
            return;
        }
        if (!isAllowOpen(this.state, this.disabled, this.viewOnly, this.readonly)) {
            return;
        }
        this.state.open = true;
        if (getFirstSelectedItem(this.state)) {
            setCurrentNavigatedIndexToSelectedItem(this.state);
        }
    };
    onInput = (ev) => {
        const input = ev.target;
        this.state.inputValue = input?.value ?? '';
        // this.pdInput.emit({ value: this.state.inputValue });
        this.pdInput.emit(this.state.inputValue);
        this.filterItems();
        if (isAllowOpen(this.state, this.disabled, this.viewOnly, this.readonly)) {
            this.state.currentNavigatedIndex = -1;
            this.state.open = true;
        }
        else {
            closeDropdown(this.state);
        }
    };
    filterItems() {
        if (this.disableFilter)
            return;
        if (this.state.inputValue === '') {
            this.state.filteredItems = this.state.items;
            return;
        }
        this.state.filteredItems = this.state.items.filter(item => this.filterNotMatchingItems(item, this.state.inputValue));
    }
    filterNotMatchingItems(comboboxItem, input) {
        if (!input)
            input = '';
        return comboboxItem.label?.toLowerCase().includes(input.toLowerCase());
    }
    onBlur = () => {
        if (this.disabled || this.readonly || this.viewOnly)
            return;
        this.pdBlur.emit();
        this.escape();
    };
    escape() {
        if (this.selectable && this.state.selectedItem && this.state.inputValue !== this.state.selectedItem.label) {
            this.state.inputValue = this.state.selectedItem.label;
            this.state.filteredItems = this.state.items;
        }
    }
    onFocus = () => {
        this.pdFocus.emit();
    };
    // create a popper js element for the menu
    createMenuPopper(refElement, menu) {
        return createPopper(refElement, menu, {
            placement: 'bottom-start',
        });
    }
    render() {
        const showMultiSelectCounter = this.multiselect &&
            !this.disableMultiselectCounter &&
            !this.error &&
            this.state.items.filter(item => item.selected).length > 0;
        return (h(Host, { key: 'f1832f621c756ecf36572586c5690fdbaff95fe5', role: "combobox" }, h("label", { key: '7ef5d4dce235453d7bbc17bac549bab41c96096b', class: {
                'pd-combobox-label': true,
                'pd-combobox-disabled': this.disabled,
                'pd-combobox-readonly': this.readonly,
                'pd-combobox-error': this.error,
                'pd-combobox-item-selected': this.selectable && this.state.inputValue === this.state.selectedItem?.label,
            }, style: this.verticalAdjust ? { '--pd-combobox-vertical-adjust': '1.5625rem' } : {} }, this.renderLabel(), !this.viewOnly ? (h("div", { class: "pd-combobox-input-wrapper", ref: el => (this.wrapperElement = el) }, h("input", { class: {
                'pd-combobox-input': true,
                'pd-combobox-input-with-icon': this.selectable && selectedHasIcon(this.state),
                'pd-combobox-input-with-multiselect-counter': showMultiSelectCounter,
            }, "data-test": "pd-combobox-input", ref: input => (this.nativeInput = input), disabled: this.disabled, readOnly: this.readonly, required: this.required, placeholder: this.placeholder || '', value: this.state.inputValue, onClick: this.onInputClick, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, size: this.size, "aria-haspopup": "true", "aria-expanded": `${this.state.open}`, tabIndex: this.readonly ? -1 : undefined }), this.state.inputValue !== this.state.selectedItem?.label ? (h("button", { class: "pd-combobox-icon left", tabindex: "-1", onClick: () => this.setFocus() }, h("pd-icon", { class: "pd-icon pd-combobox-icon-search", name: "search", size: 2.4 }))) : null, showMultiSelectCounter ? (h("div", { class: "pd-combobox-icon pd-combobox-multiselect-counter" }, h("pd-chip", { disabled: this.disabled, type: this.readonly || this.disabled ? 'text' : 'toggle', onClick: () => {
                if (this.disabled || this.readonly)
                    return;
                return this.deselectAllItems();
            } }, this.state.items.filter(item => item.selected).length))) : null, this.selectable && selectedHasIcon(this.state) ? (h("div", { class: "pd-combobox-icon left" }, h("pd-icon", { name: this.state.selectedItem.iconName || null, src: this.state.selectedItem.iconSrc || null, size: 2 }))) : null, this.state.inputValue && !this.disabled && !this.readonly ? (h("button", { class: "pd-combobox-icon right", onClick: () => this.clearValueWithIconClick(), tabindex: "-1", "data-test": "pd-combobox-reset" }, h("pd-icon", { class: "pd-icon", name: "cancel", size: 2.4 }))) : (h("button", { "data-test": "pd-combobox-toggle", class: "pd-combobox-icon right", tabindex: "-1" }, h("pd-icon", { onClick: this.onInputClick, class: "pd-icon pd-combobox-icon-toggle", name: "dropdown", rotate: this.state.open ? 180 : 0, size: 2.4 }))))) : (h("p", { class: "pd-combobox-viewonly" }, this.state.selectedItem?.label || ''))), this.renderDropdownItems()));
    }
    renderDropdownItems() {
        return (h("div", { ref: input => (this.menuElement = input), class: "pd-combobox-dropdown", style: {
                display: this.state.open ? 'block' : 'none',
                maxHeight: `calc(3rem * ${this.itemCount} + 0.25rem)`,
            } }, this.state.filteredItems.map((comboboxItem, i) => {
            // console.log('rendering combobox item', comboboxItem, i);
            return (h("pd-dropdown-item", { "data-test": `pd-combobox-item-${i}`, selected: this.multiselect
                    ? comboboxItem.selected
                    : comboboxItem.id === this.state.selectedItem?.id, multiselect: this.multiselect, value: comboboxItem.label ?? '', iconName: comboboxItem.iconName || null, iconSrc: comboboxItem.iconSrc || null, highlight: this.highlight ? this.state.inputValue : '', onClick: ev => this.selectItemByClick(comboboxItem, ev), class: {
                    'pd-dropdown-current-navigating-item': i === this.state.currentNavigatedIndex,
                } }));
        })));
    }
    renderLabel() {
        if (!this.label)
            return;
        return (h("div", { class: {
                'pd-combobox-label-text': true,
                'pd-combobox-label-viewonly': this.viewOnly,
            }, "data-test": "pd-combobox-label" }, this.label));
    }
    static get assetsDirs() { return ["assets-combobox"]; }
    static get watchers() { return {
        "viewOnly": ["viewOnlyChanged"],
        "items": ["itemsChanged"],
        "selected": ["selectedChanged"]
    }; }
    static get style() { return pdComboboxCss; }
}, [1, "pd-combobox", {
        "items": [1040],
        "selected": [8],
        "emptyItem": [4, "empty-item"],
        "emptyItemData": [16, "empty-item-data"],
        "disabled": [4],
        "viewOnly": [4, "view-only"],
        "readonly": [4],
        "required": [4],
        "selectable": [4],
        "multiselect": [4],
        "disableMultiselectCounter": [4, "disable-multiselect-counter"],
        "placeholder": [1],
        "value": [1],
        "label": [1],
        "itemCount": [2, "item-count"],
        "highlight": [4],
        "error": [4],
        "size": [2],
        "verticalAdjust": [4, "vertical-adjust"],
        "disableFilter": [4, "disable-filter"],
        "setSelectedIndex": [64],
        "reset": [64],
        "setOpen": [64],
        "setFocus": [64]
    }, [[16, "click", "handleClickOutside"], [0, "keydown", "handleKeyDown"]], {
        "viewOnly": ["viewOnlyChanged"],
        "items": ["itemsChanged"],
        "selected": ["selectedChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-combobox", "pd-checkbox", "pd-chip", "pd-dropdown-item", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-combobox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Combobox);
            }
            break;
        case "pd-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "pd-chip":
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

const PdCombobox = Combobox;
const defineCustomElement = defineCustomElement$1;

export { PdCombobox, defineCustomElement };
//# sourceMappingURL=pd-combobox.js.map

//# sourceMappingURL=pd-combobox.js.map