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
    // isNavigating: boolean;
    currentNavigatedIndex: number;
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
    @Prop() value?: string = '';

    /**
     * combobox box label
     */
    @Prop() label?: string;

    /**
     * Items visible in dropdown
     */
    @Prop() itemCount: number = 10;

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
        console.log(index);
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
        this.resetCombobox();
    }

    /**
     * Set the open-close state of the dropdown
     */
    @Method()
    async setOpen(open: boolean = true) {
        //To ignore the outside click who triggers the close-event
        setTimeout(() => {
            this.state.open = open;
        }, 0);
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

    @Watch('viewOnly')
    public viewOnlyChanged(viewOnly) {
        if (viewOnly && this.popper) this.popper.destroy();
    }

    @Watch('items')
    itemsChanged(items: any) {
        console.log('🎁 items changed', items);
        this.state.items = this.validateItems(items);
        const inputValue = this.state.inputValue;
        // if (this.popper) this.popper.destroy();
        this.resetCombobox();
        // if (!this._viewOnly) this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);

        if (inputValue === '') return;

        this.state.inputValue = inputValue;
        this.filterItems();
        if (this.state.filteredItems.length > 0) {
            this.state.open = true;
        } else {
            this.state.open = false;
        }
    }

    @Listen('click', { target: 'body' })
    handleClickOutside(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.state.open = false;
            this.state.currentNavigatedIndex = -1;
        }
    }

    public componentWillLoad() {
        /* **************************************************
         ***                 Initial State                 ***
         ****************************************************/
        const { state, onChange } = createStore<ComboboxState>({
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

        let matchedItem = this.state.items.find((i) => i.selected);
        if (this.state.inputValue) {
            matchedItem = this.state.items.filter((i) => i.label === this.state.inputValue).shift();
        }

        if (matchedItem) {
            this.selectItem(matchedItem);
        }

        // if (!this.selectable) {
        //     this.resetCombobox();
        // }
    }

    public componentDidLoad() {
        this._viewOnly = this.viewOnly;
        if (!this._viewOnly) this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
    }

    public componentDidUpdate() {
        console.log('update!😎');
        if (this._viewOnly !== this.viewOnly) {
            this._viewOnly = this.viewOnly;
            if (!this._viewOnly) this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
        }

        if (!this.state.open) return;

        // if (this.state.filteredItems.length < 1 || this.state.currentNavigatedIndex === -1) return;

        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;

        const itemHeight = dropdownItemNodes.length ? dropdownItemNodes[0].getBoundingClientRect().height : 0;

        if (itemHeight === 0) return;

        const scrollY =
            this.state.currentNavigatedIndex * itemHeight - (Math.ceil(this.itemCount / 2) - 1) * itemHeight;

        this.menuElement.scrollTop = scrollY;

        this.popper.forceUpdate();

        // if (this.state.currentNavigatedIndex > -1) {
        //     this.scrollToItem(dropdownItemNodes, this.menuElement, this.state.currentNavigatedIndex);
        // } else if (this.selectable && this.state.selectedItem) {
        //     this.scrollToItem(
        //         dropdownItemNodes,
        //         this.menuElement,
        //         this.state.filteredItems.indexOf(this.state.selectedItem),
        //     );
        // }
    }

    // private scrollToItem(
    //     dropdownItemNodes: NodeListOf<HTMLPdDropdownItemElement>,
    //     menu: HTMLElement,
    //     scrollToIndex: number,
    // ) {
    //     dropdownItemNodes.forEach((item, index) => {
    //         const centerItem = Math.ceil(this.state.filteredItems.length / 2) - 1;
    //         if (index === scrollToIndex) menu.scrollTop = item.offsetTop - 48 * centerItem;
    //     });
    // }

    private validateItems(results: any) {
        return Array.isArray(results) ? results : [];
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        if (this.readonly || this.disabled) return;

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
                this.resetCombobox();
                break;
            }
            case 'Enter': {
                ev.preventDefault();

                if (this.state.open && this.state.currentNavigatedIndex > -1) {
                    this.selectItem(this.state.filteredItems[this.state.currentNavigatedIndex]);

                    if (this.selectable) {
                        this.state.open = false;
                        this.state.currentNavigatedIndex = -1;
                    } else {
                        this.resetCombobox();
                    }
                }

                break;
            }
            case 'ArrowDown': {
                ev.preventDefault();
                // open if there are results
                if (!this.state.open && this.state.filteredItems.length > 0) {
                    this.state.open = true;
                }

                // when we have a selected item, we want to set the currentNavigatedIndex to that item and dont navigate
                // if (this.state.selectedItem && this.state.currentNavigatedIndex < 0) {
                //     this.state.currentNavigatedIndex = this.state.filteredItems.indexOf(this.state.selectedItem);
                //     return;
                // }

                if (this.state.currentNavigatedIndex < this.state.filteredItems.length - 1) {
                    this.state.currentNavigatedIndex++;
                    // this.state.inputValue = this.state.filteredItems[this.state.currentNavigatedIndex].label;
                }
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                if (!this.state.open && this.state.filteredItems.length > 0) {
                    this.state.open = true;
                }

                // when we have a selected item, we want to set the currentNavigatedIndex to that item and dont navigate
                // if (this.state.selectedItem && this.state.currentNavigatedIndex < 0) {
                //     this.state.currentNavigatedIndex = this.state.filteredItems.indexOf(this.state.selectedItem);
                //     return;
                // }

                if (this.state.currentNavigatedIndex > 0) {
                    this.state.currentNavigatedIndex--;
                    // this.state.inputValue = this.state.filteredItems[this.state.currentNavigatedIndex].label;
                }
                break;
            }
            default: {
                this.state.selectedItem = null;
            }
        }
    }

    private selectItem(comboboxItem: ComboboxItem, ev?: Event) {
        if (ev) ev.preventDefault();

        this.state.inputValue = comboboxItem.label;

        this.state.selectedItem = comboboxItem;

        this.filterItems();

        this.pdCombobox.emit(this.state.selectedItem);
    }

    private selectItemByClick(comboboxItem: ComboboxItem, ev: MouseEvent) {
        ev.preventDefault();
        this.selectItem(comboboxItem);
        if (!this.selectable) {
            this.resetCombobox();
        } else {
            this.state.open = false;
            this.state.currentNavigatedIndex = -1;
        }
    }

    private resetCombobox = (ev?: Event, focus: boolean = false, emit: boolean = true) => {
        if (ev) ev.preventDefault();

        this.state.filteredItems = this.state.items;
        this.state.inputValue = '';
        this.state.open = false;
        this.state.selectedItem = null;
        this.state.currentNavigatedIndex = -1;

        if (focus) this.setFocus();
    };

    private clearValueWithIconClick() {
        if (this.selectable && this.state.selectedItem) {
            this.pdCombobox.emit(null);
        }
        this.resetCombobox();
    }

    private onClickInput = () => {
        if (this.state.filteredItems.length > 0 && !this.state.open && !(this.disabled || this.readonly)) {
            this.state.open = true;
        } else {
            this.state.open = false;
            this.state.currentNavigatedIndex = -1;
        }
    };

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        this.state.inputValue = input?.value ?? '';
        this.pdInput.emit({ value: this.state.inputValue });

        this.filterItems();

        this.state.currentNavigatedIndex = -1;

        if (this.state.filteredItems.length > 0) {
            this.state.open = true;
        } else {
            this.state.open = false;
        }
    };

    private filterItems() {
        if (this.disableFilter) return;
        this.state.filteredItems = this.state.items.filter((item) =>
            this.filterNotMatchingItems(item, this.state.inputValue),
        );
    }

    private filterNotMatchingItems(comboboxItem: ComboboxItem, input: String) {
        if (!input) input = '';
        return comboboxItem.label?.toLowerCase().includes(input.toLowerCase());
    }

    private onBlur = () => {
        if (!this.disabled || !this.readonly) this.pdBlur.emit();

        if (this.state.currentNavigatedIndex > -1) {
            console.log('selected on blur!');
            this.selectItem(this.state.filteredItems[this.state.currentNavigatedIndex]);
            if (!this.selectable) this.resetCombobox();
        }
    };

    private onFocus = () => {
        this.pdFocus.emit();
    };

    // create a popper js element for the menu
    private createMenuPopper(refElement, menu): Instance {
        return createPopper(refElement, menu, {
            placement: 'bottom-start',
        });
    }

    public render() {
        return (
            <Host role="combobox">
                {/* <div>
                    <div>currentNavigatedIndex: {this.state.currentNavigatedIndex}</div>
                    <div>items.length: {this.state.filteredItems.length}</div>
                </div> */}
                <label
                    class={{
                        'pd-combobox-label': true,
                        'pd-combobox-disabled': this.disabled,
                        'pd-combobox-readonly': this.readonly,
                        'pd-combobox-error': this.error,
                        'pd-combobox-item-selected': this.state.selectedItem !== null,
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
                            {this.state.inputValue && !this.disabled && !this.readonly ? (
                                <button
                                    class="pd-combobox-icon right"
                                    onClick={() => this.clearValueWithIconClick()}
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
                                        rotate={this.state.open ? 180 : 0}
                                        size={2.4}
                                    ></pd-icon>
                                </button>
                            )}
                        </div>
                    ) : (
                        <p class="pd-combobox-viewonly">{this.state.selectedItem?.label || ''}</p>
                    )}
                </label>
                {this.renderDropdownItems()}
            </Host>
        );
    }

    private renderDropdownItems() {
        return (
            <div
                ref={(input) => (this.menuElement = input)}
                class="pd-combobox-dropdown"
                style={{
                    display: this.state.open ? 'block' : 'none',
                    maxHeight: `calc(3rem * ${this.itemCount} + 0.25rem)`,
                }}
            >
                {this.renderEmptyItem()}
                {this.state.filteredItems.map((comboboxItem, i) => (
                    <pd-dropdown-item
                        data-test={`pd-combobox-item-${i}`}
                        selected={comboboxItem.id === this.state.selectedItem?.id || false}
                        value={comboboxItem?.label}
                        highlight={this.highlight ? this.state.inputValue : ''}
                        onClick={(ev) => this.selectItemByClick(comboboxItem, ev)}
                        class={i === this.state.currentNavigatedIndex ? 'currentNavigatingItem' : ''}
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
                    highlight={this.highlight && this.state.currentNavigatedIndex < 0 ? this.state.inputValue : ''}
                    // onClick={(e) => this.selectItem(this.emptyItemData, e)}
                    onClick={(e) => this.resetCombobox(e)}
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
