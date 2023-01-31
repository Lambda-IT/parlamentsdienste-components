import { Instance } from '@popperjs/core';
import {
    Component,
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
import { DropdownItem, TextWrap } from '../../interface';
import createMenuPopper from '../../utils/popper';

@Component({
    tag: 'pd-dropdown',
    styleUrl: 'pd-dropdown.scss',
    assetsDirs: ['assets-dropdown'],
    shadow: true,
})
export class Dropdown implements ComponentInterface, ComponentWillLoad, ComponentDidUpdate {
    private menuElement: HTMLElement;
    private buttonElement: HTMLElement;
    private popper: Instance;
    private dropdownId = dropdownIds++;

    constructor() {
        this.setItems(this.items);
    }

    @Element() element: HTMLElement;

    @State() open: boolean = false;
    @State() selectedItem: any;

    /**
     * Placeholder when no item is selected
     */
    @Prop() placeholder: string = '';

    /**
     * Items to display and select in dropdown
     */
    @Prop() items: DropdownItem[] = [];
    private _items: DropdownItem[] = [];

    /**
     * Items visible in dropdown
     */
    @Prop() itemCount: number = 5;

    /**
     * Enable selection of an empty item
     */
    @Prop() emptyItem: boolean = false;

    /**
     * Data used for the empty item
     */
    @Prop() emptyItemData: DropdownItem = {
        id: '0',
        label: '-',
        value: null,
    };

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * If `true`, the dropdown is replaced with a simple text
     */
    @Prop() viewOnly = false;

    /**
     * Dropdown box label
     */
    @Prop() label?: string;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    @Prop() required = false;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    /**
     * Default vertical adjustment for inline forms
     */
    @Prop() verticalAdjust: boolean = false;

    /**
     * Selected item text wrap on words
     */
    @Prop() textWrap: TextWrap = 'no-wrap';

    /**
     * Emitted when the value has changed.
     */
    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<DropdownItem>;

    /**
     * Set a preselected entry by index
     */
    @Method()
    async setSelectedIndex(index: number) {
        if (index >= 0 && index < this._items.length) {
            this._items[index] = { ...this._items[index], selected: true };
            this.selectedItem = this._items[index];
        }
    }

    /**
     * Reset the selection of the dropdown
     */
    @Method()
    async reset() {
        this.selectedItem = null;
    }

    @Watch('viewOnly')
    public viewOnlyChanged(viewOnly) {
        if (viewOnly && this.popper) this.popper.destroy();
    }

    @Watch('items')
    public setItems(items: DropdownItem[]) {
        this._items = [...(this.emptyItem ? [this.emptyItemData] : []), ...items];
    }

    @Listen('pd-overlay-click', { target: 'body' })
    handleClickOnOverlay() {
        // this.open = false;
        this.closeDropdown();
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        switch (ev.key) {
            case 'Tab': {
                // this.open = false;
                this.closeDropdown();
                break;
            }
            case 'Escape': {
                ev.preventDefault();
                // this.open = false;
                this.closeDropdown();
                break;
            }

            case ' ': // space
            case 'Enter': {
                ev.preventDefault();
                this.toggleDropdown();
                break;
            }

            case 'ArrowDown': {
                ev.preventDefault();
                const currentIndex = this._items.findIndex((item) => item === this.selectedItem);
                const nextIndex = currentIndex >= this._items.length - 1 ? currentIndex : currentIndex + 1;
                const nextItem = this._items[nextIndex];
                if (nextItem !== this.selectedItem) this.selectItem(nextItem);

                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                const currentIndex = this._items.findIndex((item) => item === this.selectedItem);
                const previousIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
                const previousItem = this._items[previousIndex];
                if (previousItem !== this.selectedItem) this.selectItem(previousItem);

                break;
            }
            default: {
                const current = performance.now();

                // search when < 500ms between keystrokes
                if (current - this.inputTime < 500) {
                    this.currentSearch += ev.key;
                } else {
                    this.currentSearch = ev.key;
                }
                const currentItem = this._items.find(
                    (item) => item.label.substring(0, this.currentSearch.length)?.toLowerCase() === this.currentSearch,
                );
                if (currentItem) this.selectedItem = currentItem;

                this.inputTime = current;
            }
        }
    }

    private currentSearch: string = '';
    private inputTime: number = 0;

    private selectItem(item: DropdownItem) {
        this.selectedItem = item;

        this.pdChange.emit(this.selectedItem);
    }

    private menuDidLoad(ev: CustomEvent<void>) {
        ev.stopPropagation();

        if (this.open) {
            this.popper = createMenuPopper(this.buttonElement, this.menuElement);
        }
    }

    private toggleDropdown = () => {
        if (!this.disabled && !this.readonly && !this.viewOnly) {
            this.open = !this.open;
            if (!this.open) this.buttonElement.focus();
        }
    };

    private closeDropdown() {
        if (!this.disabled && !this.readonly && !this.viewOnly && this.popper && this.open) {
            this.open = false;
            this.buttonElement.focus();
            this.popper.destroy();
        }
    }

    public componentWillLoad() {
        this.selectedItem = this._items.find((item) => item.selected);
    }

    public componentDidUpdate() {
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;
        this.scrollToSelected(dropdownItemNodes, this.menuElement);
        if (this.popper) this.popper.forceUpdate();
    }

    private scrollToSelected(dropdownItemNodes: NodeListOf<HTMLPdDropdownItemElement>, menu: HTMLElement) {
        dropdownItemNodes.forEach((item) => {
            const centerItem = Math.ceil(this.itemCount / 2) - 1;
            if (item.selected) menu.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }

    public render() {
        return (
            <Host>
                <label
                    id={`pd-dropdown-label-${this.dropdownId}`}
                    class={{
                        'pd-dropdown-label': true,
                        'pd-dropdown-disabled': this.disabled,
                    }}
                    htmlFor={`pd-dropdown-button-${this.dropdownId}`}
                    aria-owns={`pd-dropdown-button-${this.dropdownId}`}
                    data-test="pd-dropdown-label"
                >
                    {this.renderLabel()}
                </label>
                {!this.viewOnly ? (
                    <div
                        class={{
                            'pd-dropdown': true,
                            'pd-dropdown-readonly': this.readonly,
                            'pd-dropdown-error': this.error,
                        }}
                        style={this.verticalAdjust ? { '--pd-dropdown-vertical-adjust': '1.5625rem' } : {}}
                    >
                        <button
                            ref={(el) => (this.buttonElement = el)}
                            id={`pd-dropdown-button-${this.dropdownId}`}
                            class="pd-dropdown-button"
                            onClick={this.toggleDropdown}
                            disabled={this.disabled || this.readonly}
                            type="button"
                            role="combobox"
                            aria-labelledby={`pd-dropdown-label-${this.dropdownId} pd-dropdown-${this.dropdownId}-text`}
                            aria-haspopup="listbox"
                            aria-expanded={`${this.open}`}
                            aria-controls={`pd-dropdown-menu-${this.dropdownId}`}
                            aria-activedescendant={`pd-dropdown-item-${this.selectedItem?.id}`}
                            data-test="pd-dropdown-button"
                        >
                            <span
                                id={`pd-dropdown-${this.dropdownId}-text`}
                                class={{ 'pd-dropdown-text': true, 'pd-dropdown-text-wrap': this.textWrap === 'wrap' }}
                                data-test="pd-dropdown-text"
                            >
                                {this.selectedItem?.label || this.placeholder}
                            </span>
                            <pd-icon
                                class="pd-dropdown-caret"
                                name="dropdown"
                                rotate={this.open ? 180 : 0}
                                size={2.4}
                            ></pd-icon>
                        </button>
                    </div>
                ) : (
                    <p class="pd-dropdown-viewonly">{this.selectedItem?.label || ''}</p>
                )}
                {this.open ? this.renderOverlay() : ''}
            </Host>
        );
    }

    private renderOverlay() {
        return (
            <pd-overlay>
                <pd-dropdown-menu
                    id={`pd-dropdown-menu-${this.dropdownId}`}
                    items={this._items}
                    ref={(el) => (this.menuElement = el)}
                    onPd-dropdown-select-item={(ev) => {
                        ev.stopPropagation();
                        this.selectItem(ev.detail);
                    }}
                    onPd-dropdown-menu-did-load={(ev) => this.menuDidLoad(ev)}
                    onPd-keydown={(ev) => this.handleKeyDown(ev.detail)}
                    selectedItem={this.selectedItem}
                    itemCount={this.itemCount}
                    aria-labelledby={`pd-dropdown-label-${this.dropdownId}`}
                ></pd-dropdown-menu>
            </pd-overlay>
        );
    }

    private renderLabel() {
        if (!this.label) return;

        return (
            <span
                class={{
                    'pd-dropdown-label-text': true,
                    'pd-dropdown-label-viewonly': this.viewOnly,
                }}
            >
                {this.label}
            </span>
        );
    }
}

let dropdownIds = 0;
