import { Component, Host, h, Event, EventEmitter, Watch, Method, Prop, Listen, Element, State } from '@stencil/core';
import { InputChangeEventDetail } from '../../interface';
import { createPopper, Instance } from '@popperjs/core';
import { ComboboxItem } from '../../../dist/types/interface';

@Component({
    tag: 'pd-combobox',
    styleUrl: 'pd-combobox.scss',
    assetsDirs: ['assets-combobox'],
    shadow: true,
})
export class Combobox {
    private nativeInput?: HTMLInputElement;

    @Element() element!: HTMLElement;
    private menuElement: HTMLElement;
    private labelElement: HTMLElement;
    private popper: Instance;

    /**
     * Values shown as combobox items
     */
    @Prop() items: ComboboxItem[] = [];

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * Instructional text that shows before the input has a value.
     */
    @Prop() placeholder?: string | null;

    /**
     * The value of the input.
     */
    @Prop({ mutable: true }) value?: string | null = '';

    // used to hold input value in case we need to reset on escape
    private inputValue?: string | null = '';

    /**
     * combobox box label
     */
    @Prop() label?: string;

    /**
     * Show matching parts in results as highlighted
     */
    @Prop() highlight?: boolean = true;

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

    @Watch('items')
    protected resultsChanged(items: any) {
        this.items = this.validateItems(items);
        if (this.items.length > 0) {
            this.selectedItem = null;
            this.open = true;
        } else this.open = false;
    }

    @Watch('selectedItem')
    protected indexChanged(index: number) {
        const menu = this.element.shadowRoot.querySelector('.pd-combobox-dropdown') as HTMLElement;
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;

        dropdownItemNodes.forEach((item, itemIndex) => {
            const centerItem = Math.ceil(5 / 2) - 1;
            if (itemIndex === index) menu.scrollTop = item.offsetTop - 48 * centerItem;
        });

        this.pdChange.emit(this.selectedItem);
    }

    protected componentWillLoad() {
        this.items = this.validateItems(this.items);
    }

    protected componentDidLoad() {
        this.menuElement = this.element.shadowRoot.querySelector('.pd-combobox-dropdown') as HTMLElement;
        this.labelElement = this.element.shadowRoot.querySelector('.pd-combobox-label') as HTMLElement;
        this.popper = this.createMenuPopper(this.labelElement, this.menuElement);
    }

    protected componentDidUpdate() {
        this.popper.forceUpdate();
    }

    @State() open: boolean = false;
    @State() selectedItem: ComboboxItem = null;

    @Listen('keydown')
    protected handleKeyDown(ev: KeyboardEvent) {
        switch (ev.key) {
            case 'Tab': {
                this.open = true;
                break;
            }
            case 'Escape': {
                ev.preventDefault();
                this.open = false;
                this.reset(ev);
                break;
            }
            case 'Enter': {
                ev.preventDefault();
                this.open = false;
                const matches = this.items.filter((i) => i.label === this.value).length;
                if (matches > 0) {
                    this.selectItem(this.selectedItem, ev);
                }
                break;
            }
            case 'ArrowDown': {
                ev.preventDefault();
                // try to reopen if there are results
                if (!this.open && this.items?.length > 0) {
                    this.open = true;
                    return;
                }
                const currentFiltredItems = this.items.filter((i) => this.filterNotMatchingItems(i, this.inputValue));
                const currentIndex = currentFiltredItems.findIndex((item) => item.id === this.selectedItem?.id) || 0;
                const nextIndex = currentIndex >= this.items.length - 1 ? currentIndex : currentIndex + 1;
                const nextItem = currentFiltredItems[nextIndex];
                if (nextItem && nextItem !== this.selectedItem) {
                    this.selectItem(nextItem, ev);
                    this.setValue(nextItem.label);
                }
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                if (!this.open && this.items?.length > 0) {
                    this.open = true;
                    return;
                }
                const currentFiltredItems = this.items.filter((i) => this.filterNotMatchingItems(i, this.inputValue));
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
    protected handleClickOutside(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.open = false;
        }
    }

    /**
     * Sets focus on the specified `pd-input`. Use this method instead of the global
     * `input.focus()`.
     */
    @Method()
    public async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }

    private onClickInput = () => {
        if (this.items?.length > 0 && !this.open) {
            this.open = true;
        } else {
            this.open = false;
        }
    };

    private onInput = (ev: Event) => {
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
        this.pdBlur.emit();
    };

    private onFocus = () => {
        this.pdFocus.emit();
    };

    private setValue(value: string | null, isInput: boolean = false): void {
        this.value = value;
        if (isInput) this.inputValue = value;
    }

    private selectItem(comboboxItem: ComboboxItem | null, ev?: Event | KeyboardEvent) {
        this.pdCombobox.emit(comboboxItem);

        if (ev instanceof KeyboardEvent && ev.key.includes('Arrow')) {
            this.open = true;
            this.selectedItem = comboboxItem;
        } else if (ev instanceof KeyboardEvent && ev.key.includes('Enter')) {
            this.setValue(comboboxItem.label, true);
            this.open = false;
        } else {
            this.selectedItem = comboboxItem;
            this.setValue(comboboxItem.label, true);
            this.open = false;
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
                    }}
                >
                    {this.renderLabel()}
                    <div class="pd-combobox-input-wrapper">
                        <button class="pd-combobox-icon left" tabindex="-1">
                            <pd-icon class="pd-icon pd-combobox-icon-search" name="search" size={2.4}></pd-icon>
                        </button>
                        <input
                            class="pd-combobox-input"
                            ref={(input) => (this.nativeInput = input)}
                            disabled={this.disabled}
                            placeholder={this.placeholder || ''}
                            value={this.value || ''}
                            onClick={this.onClickInput}
                            onInput={this.onInput}
                            onBlur={this.onBlur}
                            onFocus={this.onFocus}
                        />
                        <button class="pd-combobox-icon right" tabindex="-1">
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

    private reset = (ev: Event) => {
        ev.preventDefault();
        this.setValue(null, true);
        this.open = false;
        this.selectedItem = null;
    };

    private renderDropdownItems() {
        return (
            <div
                class="pd-combobox-dropdown"
                style={{
                    display: this.open ? 'block' : 'none',
                }}
            >
                {this.items
                    .filter((i) => this.filterNotMatchingItems(i, this.inputValue))
                    .map((comboboxItem) => (
                        <pd-dropdown-item
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

        return <div class="pd-combobox-label-text">{this.label}</div>;
    }
}
