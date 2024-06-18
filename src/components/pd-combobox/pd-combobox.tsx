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

import { ComboboxItem, InputChangeEventDetail } from '../../types';
import * as S from './pd-combobox.store';

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
    private state: S.ComboboxState;

    @Element() element!: HTMLElement;

    /**
     * Values shown as combobox items
     */
    @Prop({ mutable: true }) items: ComboboxItem[] = [];

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
     * If `true`, the combobox can select multiple items.
     */
    @Prop() multiselect = false;

    /**
     * If `true`, the button to deselect all selected items will not be shown.
     */
    @Prop() disableMultiselectCounter = false;

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
    @Prop() itemCount: number = 5;

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
    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<ComboboxItem | ComboboxItem[]>;

    /**
     * Emitted when a combobox request occurred.
     */
    @Event({ eventName: 'pd-combobox' }) pdCombobox!: EventEmitter<ComboboxItem | ComboboxItem[]>;

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
            this.selectItem(this.state.items[index], null, false);
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
        this.state.items = this.validateItems(items);

        this.state.filteredItems = this.state.items;

        this.filterItems();

        if (this.selectable) {
            let selectedItem = this.state.items.find(item => item.selected) ?? null;

            //if this condition is true the user is typing and we dont want to interupt such a behaviour
            if (this.state.inputValue !== '' && this.state.inputValue !== this.state.selectedItem?.label) {
                //we just want so set the state (used for styling)
                this.state.selectedItem = selectedItem;
            } else if (selectedItem) {
                // really select it (set label to selected)
                this.selectItem(selectedItem, null, false);
            }
        }
    }

    @Listen('click', { target: 'body' })
    handleClickOutside(ev: MouseEvent) {
        if (!this.state.open) return;
        if (ev.target !== this.element && this.state) {
            S.closeDropdown(this.state);
        }
    }

    constructor() {
        /* **************************************************
         ***                 Initial State                 ***
         ****************************************************/
        const { state, onChange } = createStore<S.ComboboxState>({
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
            if (this.multiselect) this.pdChange.emit(this.state.items.filter(item => item.selected));
        });

        if (!this.multiselect) {
            let selectedItem = this.state.items.find(item => item.selected) ?? null;
            //If there is an input value, we want to see if it matches an item
            if (this.state.inputValue) {
                selectedItem = this.state.items.filter(i => i.label === this.state.inputValue).shift();
            }
            if (selectedItem) {
                this.selectItem(selectedItem, null, false);
            }
        }
    }

    public componentWillLoad() {
        // this.items = [...this.items];
    }

    public componentDidLoad() {
        this._viewOnly = this.viewOnly;
        if (!this._viewOnly) this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
    }

    public componentDidUpdate() {
        if (this._viewOnly !== this.viewOnly) {
            this._viewOnly = this.viewOnly;
            if (!this._viewOnly) {
                this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
            }
        }

        if (!this.state.open) return;

        this.popper.forceUpdate();

        if (S.isUserNavigating(this.state)) {
            this.scrollToItem(this.state.currentNavigatedIndex);
        }
    }

    private scrollToItem(index: number) {
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<HTMLPdDropdownItemElement>;
        const itemHeight = dropdownItemNodes.length ? dropdownItemNodes[0].getBoundingClientRect().height : 0;

        if (itemHeight === 0) return;

        const scrollY = index * itemHeight - (Math.ceil(this.itemCount / 2) - 1) * itemHeight;
        this.menuElement.scrollTop = scrollY;
    }

    private validateItems(items: any) {
        if (!Array.isArray(items)) return;

        const _items = !this.multiselect && !this.selectable ? items.map(item => ({ ...item, selected: false })) : items;

        return [...(this.emptyItem ? [this.emptyItemData] : []), ..._items];
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

                if (this.state.open) {
                    this.escape();
                    S.closeDropdown(this.state);
                } else {
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
                if (S.isUserNavigating(this.state)) {
                    this.selectItem(this.state.filteredItems[this.state.currentNavigatedIndex]);
                } else if (S.isAllowOpen(this.state, this.disabled, this.viewOnly, this.readonly)) {
                    this.state.open = true;
                    S.navigateToNextItem(this.state, 'up');
                }
                break;
            }
            case 'ArrowDown': {
                ev.preventDefault();
                S.openDropdownOrCloseWhenNotAllowed(this.state, this.disabled, this.viewOnly, this.readonly);
                S.navigateToNextItem(this.state, 'down');
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                S.openDropdownOrCloseWhenNotAllowed(this.state, this.disabled, this.viewOnly, this.readonly);
                S.navigateToNextItem(this.state, 'up');
                break;
            }
        }
    }

    private selectItem(comboboxItem: ComboboxItem, ev?: Event, emitPdCombobox = true) {
        if (ev) ev.preventDefault();

        if (this.multiselect) {
            comboboxItem.selected = !comboboxItem.selected;
            this.state.items = this.state.items.map(item => (item.id === comboboxItem.id ? comboboxItem : item));
            this.state.filteredItems = this.state.filteredItems.map(item => (item.id === comboboxItem.id ? comboboxItem : item));

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

            S.closeDropdown(this.state);
        }

        if (emitPdCombobox) this.pdCombobox.emit(this.state.selectedItem);

        if (!this.selectable) this.resetCombobox();
    }

    private selectItemByClick(comboboxItem: ComboboxItem, ev: MouseEvent) {
        ev.preventDefault();
        this.selectItem(comboboxItem);

        if (this.multiselect) {
            this.state.currentNavigatedIndex = -1;
            return;
        }

        if (this.selectable) {
            S.closeDropdown(this.state);
            return;
        }

        this.resetCombobox();
    }

    private resetCombobox = (ev?: Event) => {
        if (ev) ev.preventDefault();
        this.state.filteredItems = this.state.items;
        this.state.inputValue = '';
        this.state.selectedItem = null;
        S.closeDropdown(this.state);
    };

    private clearValueWithIconClick() {
        if (this.selectable && this.state.selectedItem) {
            this.pdCombobox.emit(null);
        }
        this.resetCombobox();
        this.setFocus();
    }

    private deselectAllItems() {
        this.state.items = this.state.items.map(item => ({ ...item, selected: false }));
        this.state.filteredItems = this.state.items;
        this.pdCombobox.emit(null);
    }

    private onInputClick = () => {
        if (this.state.open === true) {
            S.closeDropdown(this.state);
            return;
        }
        if (!S.isAllowOpen(this.state, this.disabled, this.viewOnly, this.readonly)) {
            return;
        }

        this.state.open = true;
        if (S.getFirstSelectedItem(this.state)) {
            S.setCurrentNavigatedIndexToSelectedItem(this.state);
        }
    };

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        this.state.inputValue = input?.value ?? '';
        this.pdInput.emit({ value: this.state.inputValue });

        this.filterItems();

        if (S.isAllowOpen(this.state, this.disabled, this.viewOnly, this.readonly)) {
            this.state.currentNavigatedIndex = -1;
            this.state.open = true;
        } else {
            S.closeDropdown(this.state);
        }
    };

    private filterItems() {
        if (this.disableFilter) return;

        if (this.state.inputValue === '') {
            this.state.filteredItems = this.state.items;
            return;
        }

        this.state.filteredItems = this.state.items.filter(item => this.filterNotMatchingItems(item, this.state.inputValue));
    }

    private filterNotMatchingItems(comboboxItem: ComboboxItem, input: String) {
        if (!input) input = '';
        return comboboxItem.label?.toLowerCase().includes(input.toLowerCase());
    }

    private onBlur = () => {
        if (this.disabled || this.readonly || this.viewOnly) return;

        this.pdBlur.emit();

        this.escape();
    };

    private escape() {
        if (this.selectable && this.state.selectedItem && this.state.inputValue !== this.state.selectedItem.label) {
            this.state.inputValue = this.state.selectedItem.label;
            this.state.filteredItems = this.state.items;
        }
    }

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
        const showMultiSelectCounter =
            this.multiselect && !this.disableMultiselectCounter && !this.error && this.state.items.filter(item => item.selected).length > 0;
        return (
            <Host role="combobox">
                <label
                    class={{
                        'pd-combobox-label': true,
                        'pd-combobox-disabled': this.disabled,
                        'pd-combobox-readonly': this.readonly,
                        'pd-combobox-error': this.error,
                        'pd-combobox-item-selected': this.selectable && this.state.inputValue === this.state.selectedItem?.label,
                    }}
                    style={this.verticalAdjust ? { '--pd-combobox-vertical-adjust': '1.5625rem' } : {}}
                >
                    {this.renderLabel()}

                    {!this.viewOnly ? (
                        <div class="pd-combobox-input-wrapper" ref={el => (this.wrapperElement = el)}>
                            <input
                                class={{
                                    'pd-combobox-input': true,
                                    'pd-combobox-input-with-icon': this.selectable && S.selectedHasIcon(this.state),
                                    'pd-combobox-input-with-multiselect-counter': showMultiSelectCounter,
                                }}
                                data-test="pd-combobox-input"
                                ref={input => (this.nativeInput = input)}
                                disabled={this.disabled}
                                readOnly={this.readonly}
                                required={this.required}
                                placeholder={this.placeholder || ''}
                                value={this.state.inputValue}
                                onClick={this.onInputClick}
                                onInput={this.onInput}
                                onBlur={this.onBlur}
                                onFocus={this.onFocus}
                                size={this.size}
                                aria-haspopup="true"
                                aria-expanded={`${this.state.open}`}
                                tabIndex={this.readonly ? -1 : undefined}
                            />
                            {this.state.inputValue !== this.state.selectedItem?.label ? (
                                <button class="pd-combobox-icon left" tabindex="-1" onClick={() => this.setFocus()}>
                                    <pd-icon class="pd-icon pd-combobox-icon-search" name="search" size={2.4}></pd-icon>
                                </button>
                            ) : null}

                            {showMultiSelectCounter ? (
                                <div class="pd-combobox-icon pd-combobox-multiselect-counter">
                                    <pd-chip
                                        disabled={this.disabled}
                                        type={this.readonly || this.disabled ? 'text' : 'toggle'}
                                        onClick={() => {
                                            if (this.disabled || this.readonly) return;
                                            return this.deselectAllItems();
                                        }}
                                    >
                                        {this.state.items.filter(item => item.selected).length}
                                    </pd-chip>
                                </div>
                            ) : null}

                            {this.selectable && S.selectedHasIcon(this.state) ? (
                                <div class="pd-combobox-icon left">
                                    <pd-icon
                                        name={this.state.selectedItem.iconName || null}
                                        src={this.state.selectedItem.iconSrc || null}
                                        size={2}
                                    ></pd-icon>
                                </div>
                            ) : null}

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
                                        onClick={this.onInputClick}
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
                ref={input => (this.menuElement = input)}
                class="pd-combobox-dropdown"
                style={{
                    display: this.state.open ? 'block' : 'none',
                    maxHeight: `calc(3rem * ${this.itemCount} + 0.25rem)`,
                }}
            >
                {this.state.filteredItems.map((comboboxItem, i) => (
                    <pd-dropdown-item
                        data-test={`pd-combobox-item-${i}`}
                        selected={this.multiselect ? comboboxItem.selected : comboboxItem.id === this.state.selectedItem?.id}
                        multiselect={this.multiselect}
                        value={comboboxItem.label ?? ''}
                        iconName={comboboxItem.iconName || null}
                        iconSrc={comboboxItem.iconSrc || null}
                        highlight={this.highlight ? this.state.inputValue : ''}
                        onClick={ev => this.selectItemByClick(comboboxItem, ev)}
                        class={{
                            'pd-dropdown-current-navigating-item': i === this.state.currentNavigatedIndex,
                        }}
                    ></pd-dropdown-item>
                ))}
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
