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
import { ComboboxItem, InputChangeEventDetail } from '../../interface';

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

    @Element() element!: HTMLElement;

    @State() open: boolean = false;
    @State() selectedItem: ComboboxItem = null;
    @State() _itemsState: ComboboxItem[] = [];

    /**
     * Values shown as combobox items
     */
    @Prop() items: ComboboxItem[] = [];

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

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
        if (index >= 0 && index < this.items.length) {
            this._itemsState[index] = { ...this.items[index], selected: true };
            this.selectItem(this._itemsState[index]);
        }
    }

    /**
     * Reset the selection of the dropdown
     */
    @Method()
    async reset() {
        this.resetInternally(null);
    }

    @Watch('items')
    resultsChanged(items: any) {
        this._itemsState = this.validateItems(items);
        if (this._itemsState.length > 0) {
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
        this._itemsState = this.validateItems(this.items);

        let matchedItem = this._itemsState.find((i) => i.selected);
        if (this.value) {
            matchedItem = this._itemsState.filter((i) => i.label === this.value).shift();
        }

        if (matchedItem) {
            this.selectItem(matchedItem);
        }
    }

    public componentDidLoad() {
        this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
    }

    public componentDidUpdate() {
        if (!this.open) return;
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;
        this.scrollToSelected(dropdownItemNodes, this.menuElement);
        this.popper.forceUpdate();
    }

    private scrollToSelected(dropdownItemNodes: NodeListOf<HTMLPdDropdownItemElement>, menu: HTMLElement) {
        dropdownItemNodes.forEach((item) => {
            const centerItem = Math.ceil(this._itemsState.length / 2) - 1;
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
                const matches = this._itemsState.filter((i) => i.label === this.value).length;
                if (matches > 0) {
                    this.selectItem(this.selectedItem, ev);
                }
                break;
            }
            case 'ArrowDown': {
                ev.preventDefault();
                // try to reopen if there are results
                if (!this.open && this._itemsState?.length > 0) {
                    this.open = true;
                    return;
                }
                const currentFiltredItems = this._itemsState.filter((i) =>
                    this.filterNotMatchingItems(i, this.inputValue),
                );
                const currentIndex = currentFiltredItems.findIndex((item) => item.id === this.selectedItem?.id) || 0;
                const nextIndex = currentIndex >= this._itemsState.length - 1 ? currentIndex : currentIndex + 1;
                const nextItem = currentFiltredItems[nextIndex];
                if (nextItem && nextItem !== this.selectedItem) {
                    this.selectItem(nextItem, ev);
                    this.setValue(nextItem.label);
                }
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                if (!this.open && this._itemsState?.length > 0) {
                    this.open = true;
                    return;
                }
                const currentFiltredItems = this._itemsState.filter((i) =>
                    this.filterNotMatchingItems(i, this.inputValue),
                );
                const currentIndex = currentFiltredItems.findIndex((item) => item.id === this.selectedItem?.id) || 0;
                const previousIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
                const previousItem = currentFiltredItems[previousIndex];
                if (previousItem !== this.selectedItem) {
                    this.selectItem(previousItem, ev);
                    this.setValue(previousItem.label);
                }
                break;
            }
            default: {
                this.selectedItem = null;
            }
        }
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
        if (this._itemsState?.length > 0 && !this.open && !(this.disabled || this.readonly)) {
            this.open = true;
        } else {
            this.open = false;
        }
    };

    private onInput = (ev: Event) => {
        if (this.selectable) this.resetInternally(ev);

        const input = ev.target as HTMLInputElement | null;
        this.setValue(input?.value || '', true);
        this.pdInput.emit({ value: this.value });
        const currentFiltredItems = this.items.filter((i) => this.filterNotMatchingItems(i, this.inputValue));
        if (currentFiltredItems.length > 0) {
            this.open = true;
        } else {
            this.open = false;
        }
    };

    private onBlur = () => {
        if (!this.disabled || !this.readonly) this.pdBlur.emit();
    };

    private onFocus = () => {
        this.pdFocus.emit();
    };

    private setValue(value?: string, isInput: boolean = false): void {
        this.value = value;
        if (isInput) this.inputValue = value;
    }

    private selectItem(comboboxItem?: ComboboxItem, ev?: Event | KeyboardEvent) {
        this.pdCombobox.emit(comboboxItem);

        if (ev instanceof KeyboardEvent && ev.key.includes('Arrow')) {
            this.open = true;
            this.selectedItem = comboboxItem;
        } else if (ev instanceof KeyboardEvent && ev.key.includes('Enter')) {
            this.setValue(comboboxItem.label, true);
            this.open = false;
            if (!this.selectable) this.resetInternally(ev);
        } else {
            this.selectedItem = comboboxItem;
            this.setValue(comboboxItem.label, true);
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
                    <div class="pd-combobox-input-wrapper" ref={(el) => (this.wrapperElement = el)}>
                        <input
                            class="pd-combobox-input"
                            data-test="pd-combobox-input"
                            ref={(input) => (this.nativeInput = input)}
                            disabled={this.disabled}
                            readOnly={this.readonly}
                            required={this.required}
                            placeholder={this.placeholder || ''}
                            value={this.value}
                            onClick={this.onClickInput}
                            onInput={this.onInput}
                            onBlur={this.onBlur}
                            onFocus={this.onFocus}
                            size={this.size}
                        />
                        <button class="pd-combobox-icon left" tabindex="-1">
                            <pd-icon class="pd-icon pd-combobox-icon-search" name="search" size={2.4}></pd-icon>
                        </button>
                        <button data-test="pd-combobox-toggle" class="pd-combobox-icon right" tabindex="-1">
                            <pd-icon
                                onClick={this.onClickInput}
                                class="pd-icon pd-combobox-icon-toggle"
                                name="dropdown"
                                size={2.4}
                            ></pd-icon>
                        </button>
                    </div>
                </label>
                {this.renderDropdownItems()}
            </Host>
        );
    }

    private resetInternally = (ev?: Event) => {
        if (ev) ev.preventDefault();
        this.setValue(null, true);
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
                {this._itemsState
                    .filter((i) => this.filterNotMatchingItems(i, this.inputValue))
                    .map((comboboxItem, i) => (
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

    private filterNotMatchingItems(comboboxItem: ComboboxItem, input) {
        if (!input) input = '';
        return comboboxItem.label.toLowerCase().includes(input.toLowerCase());
    }

    private renderLabel() {
        if (!this.label) return;

        return (
            <div class="pd-combobox-label-text" data-test="pd-combobox-label">
                {this.label}
            </div>
        );
    }
}
