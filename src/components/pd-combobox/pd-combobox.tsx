import { createPopper, Instance } from '@popperjs/core';
import {
    Component,
    ComponentDidLoad,
    ComponentDidUpdate,
    ComponentInterface,
    ComponentWillLoad,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Listen,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import { createStore } from '@stencil/store';
import { ComboboxItem, InputChangeEventDetail } from '../../interface';

interface ComboboxState {
    items: ComboboxItem[];
    filteredItems: ComboboxItem[];
    open: boolean;
    selectedItem: ComboboxItem;
    inputValue: string;
}

@Component({
    tag: 'pd-combobox',
    styleUrl: 'pd-combobox.scss',
    assetsDirs: ['assets-combobox'],
    shadow: true,
})
export class Combobox implements ComponentInterface, ComponentWillLoad, ComponentDidLoad, ComponentDidUpdate {
    private nativeInput?: HTMLInputElement;
    private menuElement: HTMLElement;
    private wrapperElement: HTMLElement;
    private popper: Instance;
    private state: ComboboxState;

    @Element() element!: HTMLElement;

    @State() open: boolean = false;
    @State() selectedItem: ComboboxItem = null;
    // @State() _itemsState: ComboboxItem[] = [];

    /**
     * Values shown as combobox items
     */
    @Prop() items: ComboboxItem[] = [];

    /**
     * Enable selection of an empty item
     */
    @Prop() emptyItem: boolean = false;

    /**
     * Data used for the empty item
     */
    @Prop() emptyItemData: ComboboxItem = {
        id: '0',
        label: '-',
        value: null,
    };

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * If `true`, the combobox is replaced with a simple text
     */
    @Prop() viewOnly = false;
    private _viewOnly = false;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    @Prop() required = false;

    /**
     * If `true`, the combobox get a selected state like a dropdown.
     */
    @Prop() selectable = false;

    /**
     * Instructional text that shows before the input has a value.
     */
    @Prop() placeholder?: string;

    /**
     * The value of the input.
     */
    @Prop({ mutable: true }) value?: string = '';

    // used to hold input value in case we need to reset on escape
    private inputValue?: string = '';

    /**
     * combobox box label
     */
    @Prop() label?: string;

    /**
     * Show matching parts in results as highlighted
     */
    @Prop() highlight?: boolean = true;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    /**
     * Input tag size (check pd-input 'size' for more info)
     */
    @Prop() size?: number = 1;

    /**
     * Default vertical adjustment for inline forms
     */
    @Prop() verticalAdjust: boolean = false;

    /**
     * If true, the combobox will not search/filter in the items (for example when the combobox is used to make backend searches)
     */
    @Prop() disableFilter: boolean = false;

    /**
     * Emitted when a keyboard input occurred.
     */
    @Event({ eventName: 'pd-input' }) pdInput!: EventEmitter<InputChangeEventDetail>;

    /**
     * Emitted when the value has changed.
     */
    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<ComboboxItem>;

    /**
     * Emitted when a combobox request occurred.
     */
    @Event({ eventName: 'pd-combobox' }) pdCombobox!: EventEmitter<ComboboxItem>;

    /**
     * Emitted when the input loses focus.
     */
    @Event({ eventName: 'pd-blur' }) pdBlur!: EventEmitter<void>;

    /**
     * Emitted when the input has focus.
     */
    @Event({ eventName: 'pd-focus' }) pdFocus!: EventEmitter<void>;

    /**
     * Set a preselected entry by index
     */
    @Method()
    async setSelectedIndex(index: number) {
        if (index >= 0 && index < this.state.items.length) {
            this.state.items[index] = { ...this.state.items[index], selected: true };
            this.selectItem(this.state.items[index]);
        }
    }

    /**
     * Reset the selection of the dropdown
     */
    @Method()
    async reset() {
        this.resetInternally(null);
    }

    /**
     * Set the open-close state of the dropdown
     */
    @Method()
    async setOpen(open: boolean = true) {
        //To ignore the outside click who triggers the close-event
        setTimeout(() => {
            this.open = open;
        }, 0);
    }

    @Watch('viewOnly')
    public viewOnlyChanged(viewOnly) {
        if (viewOnly && this.popper) this.popper.destroy();
    }

    @Watch('items')
    itemsChanged(items: any) {
        this.state.items = this.validateItems(items);
        if (this.state.items.length > 0) {
            this.selectedItem = null;
        } else this.open = false;
    }

    @Watch('selectedItem')
    indexChanged(index: number) {
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;

        dropdownItemNodes.forEach((item, itemIndex) => {
            const centerItem = Math.ceil(5 / 2) - 1;
            if (itemIndex === index) this.menuElement.scrollTop = item.offsetTop - 48 * centerItem;
        });

        this.pdChange.emit(this.selectedItem);
    }

    public componentWillLoad() {
        const { state } = createStore<ComboboxState>({
            items: this.validateItems(this.items),
            filteredItems: this.validateItems(this.items),
            open: false,
            selectedItem: undefined,
            inputValue: this.value,
        });
        this.state = state;

        // this._itemsState = this.validateItems(this.items);

        // let matchedItem = this._itemsState.find((i) => i.selected);
        let matchedItem = this.state.items.find((i) => i.selected);
        if (this.state.inputValue) {
            matchedItem = this.state.items.filter((i) => i.label === this.state.inputValue).shift();
        }

        if (matchedItem) {
            this.selectItem(matchedItem);
        }
    }

    public componentDidLoad() {
        this._viewOnly = this.viewOnly;
        if (!this._viewOnly) this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
    }

    public componentDidUpdate() {
        if (this._viewOnly !== this.viewOnly) {
            this._viewOnly = this.viewOnly;
            if (!this._viewOnly) this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
        }

        if (!this.open) return;
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;
        this.scrollToSelected(dropdownItemNodes, this.menuElement);
        this.popper.forceUpdate();
    }

    private scrollToSelected(dropdownItemNodes: NodeListOf<HTMLPdDropdownItemElement>, menu: HTMLElement) {
        dropdownItemNodes.forEach((item) => {
            const centerItem = Math.ceil(this.state.filteredItems.length / 2) - 1;
            if (item.selected) menu.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        if (this.readonly || this.disabled) return;

        switch (ev.key) {
            case 'Tab': {
                this.open = false;
                break;
            }
            case 'Escape': {
                ev.preventDefault();
                this.open = false;
                this.resetInternally(ev);
                break;
            }
            case 'Enter': {
                ev.preventDefault();
                this.open = false;
                // const matches = this._itemsState.filter((i) => i.label === this.value).length;
                // if (matches > 0) {
                this.selectItem(this.selectedItem, ev);
                // }
                break;
            }
            case 'ArrowDown': {
                ev.preventDefault();
                // try to reopen if there are results
                if (!this.open && this.state.filteredItems.length > 0) {
                    this.open = true;
                    return;
                }
                // const currentFiltredItems = this._itemsState.filter((i) =>
                //     this.filterNotMatchingItems(i, this.inputValue),
                // );
                // const currentIndex =
                //     this.state.filteredItems.findIndex((item) => item.id === this.selectedItem?.id) || 0;
                // const nextIndex = currentIndex >= this.state.filteredItems.length - 1 ? currentIndex : currentIndex + 1;
                // const nextItem = this.state.filteredItems[nextIndex];
                const nextItem = this.setNextItem('down');
                if (nextItem && nextItem !== this.selectedItem) {
                    this.selectItem(nextItem, ev);
                    // this.setValue(nextItem.label);
                    this.state.inputValue = nextItem.label;
                }
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                if (!this.open && this.state.filteredItems.length > 0) {
                    this.open = true;
                    return;
                }
                // const currentFiltredItems = this._itemsState.filter((i) =>
                //     this.filterNotMatchingItems(i, this.inputValue),
                // );
                // const currentIndex =
                //     this.state.filteredItems.findIndex((item) => item.id === this.selectedItem?.id) || 0;
                // const previousIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
                // const previousItem = this.state.filteredItems[previousIndex];
                const nextItem = this.setNextItem('up');
                if (nextItem && nextItem !== this.selectedItem) {
                    this.selectItem(nextItem, ev);
                    // this.setValue(nextItem.label);
                    this.state.inputValue = nextItem.label;
                }
                break;
            }
            default: {
                this.selectedItem = null;
            }
        }
    }
    private setNextItem(direction: 'up' | 'down') {
        const currentIndex = this.state.filteredItems.findIndex((item) => item.id === this.selectedItem?.id) || 0;
        let nextIndex: number;
        if (direction === 'down') {
            nextIndex = currentIndex >= this.state.filteredItems.length - 1 ? currentIndex : currentIndex + 1;
        } else {
            nextIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
        }
        return this.state.filteredItems[nextIndex];
    }

    @Listen('click', { target: 'body' })
    handleClickOutside(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.open = false;
        }
    }

    /**
     * Sets focus on the specified `pd-input`. Use this method instead of the global
     * `input.focus()`.
     */
    @Method()
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }

    private onClickInput = () => {
        if (this.state.filteredItems.length > 0 && !this.open && !(this.disabled || this.readonly)) {
            this.open = true;
        } else {
            this.open = false;
        }
    };

    private onInput = (ev: Event) => {
        if (this.selectable) this.resetInternally(ev); // why?

        const input = ev.target as HTMLInputElement | null;

        this.state.inputValue = input?.value ?? '';
        // this.setValue(input?.value || '', true); // why?
        this.pdInput.emit({ value: this.state.inputValue });

        // const currentFiltredItems = this.items.filter((i) => this.filterNotMatchingItems(i, this.inputValue));
        this.state.filteredItems = this.state.items.filter((item) =>
            this.filterNotMatchingItems(item, this.state.inputValue),
        );
        if (this.state.filteredItems.length > 0) {
            this.open = true;
        } else {
            this.open = false;
        }
    };

    private filterNotMatchingItems(comboboxItem: ComboboxItem, input) {
        if (!input) input = '';
        return comboboxItem.label.toLowerCase().includes(input.toLowerCase());
    }

    private onBlur = () => {
        if (!this.disabled || !this.readonly) this.pdBlur.emit();
    };

    private onFocus = () => {
        this.pdFocus.emit();
    };

    //TODO why? isInput?
    // private setValue(value?: string, isInput: boolean = false): void {
    //     this.value = value;
    //     if (isInput) this.inputValue = value;
    // }

    private selectItem(comboboxItem?: ComboboxItem, ev?: Event | KeyboardEvent) {
        this.pdCombobox.emit(comboboxItem);

        if (ev instanceof KeyboardEvent && ev.key.includes('Arrow')) {
            this.open = true;
            this.selectedItem = comboboxItem;
        } else if (ev instanceof KeyboardEvent && ev.key.includes('Enter')) {
            // this.setValue(comboboxItem.label, true);
            this.open = false;
            if (!this.selectable) this.resetInternally(ev);
        } else {
            this.selectedItem = comboboxItem;
            // this.setValue(comboboxItem.label, true);
            this.open = false;
            if (!this.selectable) this.resetInternally(ev);
        }
    }

    private validateItems(results: any) {
        return Array.isArray(results) ? results : [];
    }

    // create a popper js element for the menu
    private createMenuPopper(refElement, menu): Instance {
        return createPopper(refElement, menu, {
            placement: 'bottom-start',
        });
    }

    public render() {
        return (
            <Host role="combobox">
                <label
                    class={{
                        'pd-combobox-label': true,
                        'pd-combobox-disabled': this.disabled,
                        'pd-combobox-readonly': this.readonly,
                        'pd-combobox-error': this.error,
                        'pd-combobox-item-selected': !!this.selectedItem,
                    }}
                    style={this.verticalAdjust ? { '--pd-combobox-vertical-adjust': '1.5625rem' } : {}}
                >
                    {this.renderLabel()}

                    {!this.viewOnly ? (
                        <div class="pd-combobox-input-wrapper" ref={(el) => (this.wrapperElement = el)}>
                            <input
                                class="pd-combobox-input"
                                data-test="pd-combobox-input"
                                ref={(input) => (this.nativeInput = input)}
                                disabled={this.disabled}
                                readOnly={this.readonly}
                                required={this.required}
                                placeholder={this.placeholder || ''}
                                value={this.state.inputValue}
                                onClick={this.onClickInput}
                                onInput={this.onInput}
                                onBlur={this.onBlur}
                                onFocus={this.onFocus}
                                size={this.size}
                            />
                            <button class="pd-combobox-icon left" tabindex="-1">
                                <pd-icon class="pd-icon pd-combobox-icon-search" name="search" size={2.4}></pd-icon>
                            </button>
                            {this.value && !this.disabled && !this.readonly ? (
                                <button
                                    class="pd-combobox-icon right"
                                    onClick={() => {
                                        this.resetInternally();
                                        this.setFocus();
                                    }}
                                    tabindex="-1"
                                    data-test="pd-combobox-reset"
                                >
                                    <pd-icon class="pd-icon" name="cancel" size={2.4}></pd-icon>
                                </button>
                            ) : (
                                <button data-test="pd-combobox-toggle" class="pd-combobox-icon right" tabindex="-1">
                                    <pd-icon
                                        onClick={this.onClickInput}
                                        class="pd-icon pd-combobox-icon-toggle"
                                        name="dropdown"
                                        rotate={this.open ? 180 : 0}
                                        size={2.4}
                                    ></pd-icon>
                                </button>
                            )}
                        </div>
                    ) : (
                        <p class="pd-combobox-viewonly">{this.selectedItem?.label || ''}</p>
                    )}
                </label>

                {this.renderDropdownItems()}
                <br />
                {JSON.stringify(this.state)}
            </Host>
        );
    }

    private resetInternally = (ev?: Event) => {
        if (ev) ev.preventDefault();
        // this.setValue(null, true);
        this.state.inputValue = '';
        this.open = false;
        this.selectedItem = null;
    };

    private renderDropdownItems() {
        return (
            <div
                ref={(input) => (this.menuElement = input)}
                class="pd-combobox-dropdown"
                style={{
                    display: this.open ? 'block' : 'none',
                }}
            >
                {this.renderEmptyItem()}
                {this.state.filteredItems.map((comboboxItem, i) => (
                    <pd-dropdown-item
                        data-test={`pd-combobox-item-${i}`}
                        selected={comboboxItem.id === this.selectedItem?.id || false}
                        value={comboboxItem?.label}
                        highlight={this.highlight ? this.inputValue : ''}
                        onClick={(e) => this.selectItem(comboboxItem, e)}
                    ></pd-dropdown-item>
                ))}
            </div>
        );
    }

    private renderEmptyItem() {
        if (!this.emptyItem) return;
        return (
            <div>
                <pd-dropdown-item
                    data-test={`pd-combobox-item-empty`}
                    selected={false}
                    value={this.emptyItemData.label}
                    highlight={this.highlight ? this.inputValue : ''}
                    // onClick={(e) => this.selectItem(this.emptyItemData, e)}
                    onClick={(e) => this.resetInternally(e)}
                ></pd-dropdown-item>
            </div>
        );
    }

    private renderLabel() {
        if (!this.label) return;

        return (
            <div
                class={{
                    'pd-combobox-label-text': true,
                    'pd-combobox-label-viewonly': this.viewOnly,
                }}
                data-test="pd-combobox-label"
            >
                {this.label}
            </div>
        );
    }
}
