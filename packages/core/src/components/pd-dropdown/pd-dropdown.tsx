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
import { DropdownItem, TextWrap } from '../../types';

@Component({
    tag: 'pd-dropdown',
    styleUrl: 'pd-dropdown.scss',
    assetsDirs: ['assets-dropdown'],
    shadow: true,
})
export class Dropdown implements ComponentInterface, ComponentWillLoad, ComponentDidLoad, ComponentDidUpdate {
    private menuElement: HTMLElement;
    private buttonElement: HTMLElement;
    private popper: Instance;

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

    /**
     * Preselected item
     */
    @Prop() selected: Pick<DropdownItem, 'id' | 'value'> | null = null;

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
    private _viewOnly = false;

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

    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<DropdownItem>;

    /**
     * Set a preselected entry by index
     */
    @Method()
    async setSelectedIndex(index: number) {
        if (index >= 0 && index < this.items.length) {
            this.selectedItem = this.items[index];
            this.sanitizeInternalItems(this.items[index].id);
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

    @Watch('selected')
    public selectedChanged(newItem) {
        const itemToSelect = this.items.find(i => i.id === newItem.id) || null;
        if (itemToSelect) {
            this.selectedItem = itemToSelect;
            this.sanitizeInternalItems(itemToSelect.id);
        }
    }

    @Listen('click', { target: 'body' })
    handleClick(ev: MouseEvent) {
        if (!ev.composedPath().includes(this.element)) this.open = false;
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
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
                if (nextItem !== this.selectedItem) this.selectItem(nextItem);
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                const currentIndex = this.items.findIndex(item => item === this.selectedItem);
                const previousIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
                const previousItem = this.items[previousIndex];
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
                const currentItem = this.items.find(
                    item => item.label.substring(0, this.currentSearch.length)?.toLowerCase() === this.currentSearch,
                );
                if (currentItem) this.selectedItem = currentItem;

                this.inputTime = current;
            }
        }
    }

    private currentSearch: string = '';
    private inputTime: number = 0;

    private selectItem(item: DropdownItem, closeDropdown: boolean = false) {
        this.selectedItem = item;

        this.sanitizeInternalItems(item.id);

        if (closeDropdown) this.open = false;
        this.pdChange.emit(item);
    }

    sanitizeInternalItems(selectedId) {
        this.items.forEach(item => {
            delete item.selected;
        });
        const index = this.items.findIndex(i => i.id === selectedId);
        this.items[index] = { ...this.items[index], selected: true };
    }

    private toggleDropdown = () => {
        if (!this.disabled && !this.readonly && !this.viewOnly) this.open = !this.open;
    };

    public componentWillLoad() {
        if (this.selected) {
            this.sanitizeInternalItems(this.selected.id);
            this.selectedItem = this.items.find(item => item.id === this.selected.id);
        } else {
            this.selectedItem = this.items.find(item => item.selected);
        }
    }

    public componentDidLoad() {
        this._viewOnly = this.viewOnly;
        if (!this._viewOnly) this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
    }

    public componentDidUpdate() {
        if (this._viewOnly !== this.viewOnly) {
            this._viewOnly = this.viewOnly;
            if (!this._viewOnly) this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
        }

        if (!this.open) return;
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll(
            'pd-dropdown-item',
        ) as NodeListOf<HTMLPdDropdownItemElement>;
        this.scrollToSelected(dropdownItemNodes, this.menuElement);
        this.popper.forceUpdate();
    }

    private scrollToSelected(dropdownItemNodes: NodeListOf<HTMLPdDropdownItemElement>, menu: HTMLElement) {
        dropdownItemNodes.forEach(item => {
            const centerItem = Math.ceil(this.itemCount / 2) - 1;
            if (item.selected) menu.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }

    // create a popper js element for the menu
    private createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: 'bottom-start',
        });
    }

    public render() {
        return (
            <Host>
                <label
                    class={{
                        'pd-dropdown-label': true,
                        'pd-dropdown-disabled': this.disabled,
                    }}
                    onClick={this.toggleDropdown}
                    data-test="pd-dropdown-label">
                    {this.renderLabel()}
                </label>
                {!this.viewOnly ? (
                    <div
                        class={{
                            'pd-dropdown': true,
                            'pd-dropdown-readonly': this.readonly,
                            'pd-dropdown-error': this.error,
                        }}
                        style={this.verticalAdjust ? { '--pd-dropdown-vertical-adjust': '1.5625rem' } : {}}>
                        <button
                            ref={el => (this.buttonElement = el)}
                            class="pd-dropdown-button"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={`${this.open}`}
                            onClick={this.toggleDropdown}
                            disabled={this.disabled || this.readonly}
                            data-test="pd-dropdown-button">
                            <span
                                class={{ 'pd-dropdown-text': true, 'pd-dropdown-text-wrap': this.textWrap === 'wrap' }}
                                data-test="pd-dropdown-text">
                                {this.selectedItem?.label || this.placeholder}
                            </span>
                            <pd-icon
                                class="pd-dropdown-caret"
                                name="dropdown"
                                rotate={this.open ? 180 : 0}
                                size={2.4}></pd-icon>
                        </button>
                        {this.renderDropDown()}
                    </div>
                ) : (
                    <p class="pd-dropdown-viewonly">{this.selectedItem?.label || ''}</p>
                )}
            </Host>
        );
    }

    private renderDropDown() {
        return (
            <div
                ref={el => (this.menuElement = el)}
                class={`pd-dropdown-menu`}
                style={{
                    display: this.open ? 'block' : 'none',
                    maxHeight: `calc(3em * ${this.itemCount} + 0.25em)`,
                }}
                tabIndex={-1}>
                {this.renderEmptyItem()}
                {this.renderDropDownItems()}
            </div>
        );
    }

    private renderDropDownItems() {
        return this.items.map((item, i) => (
            <pd-dropdown-item
                value={item.label}
                selected={item.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(item, true)}
                data-test={`pd-dropdown-item-${i}`}></pd-dropdown-item>
        ));
    }

    private renderEmptyItem() {
        if (!this.emptyItem) return;
        return (
            <pd-dropdown-item
                value={this.emptyItemData.label}
                selected={this.emptyItemData.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(this.emptyItemData, true)}
                data-test={`pd-dropdown-item-empty`}></pd-dropdown-item>
        );
    }

    private renderLabel() {
        if (!this.label) return;

        return (
            <span
                class={{
                    'pd-dropdown-label-text': true,
                    'pd-dropdown-label-viewonly': this.viewOnly,
                }}>
                {this.label}
            </span>
        );
    }
}
