import { createPopper, Instance } from '@popperjs/core';
import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from '@stencil/core';
import { DropdownItem } from '../../interface';
import { closestElement } from '../../utils/helpers';
@Component({
    tag: 'pd-dropdown',
    styleUrl: 'pd-dropdown.scss',
    assetsDirs: ['assets-dropdown'],
    shadow: true,
})
export class Dropdown {
    @Element() element;
    private menuElement: HTMLElement;
    private buttonElement: HTMLElement;
    private popper: Instance;

    /**
     * Placeholder when no item is selected
     */
    @Prop() placeholder: string = '';

    /**
     * Items to display and select in dropdown
     */
    @Prop() items: DropdownItem[] = [];

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

    @Prop() error: boolean = false;

    /**
     * Set a preselected entry by index
     */
    @Method()
    async setSelectedIndex(index: number) {
        if (index >= 0 && index < this.items.length) {
            this.items[index] = { ...this.items[index], selected: true };
            this.selectedItem = this.items[index];
        }
    }

    /**
     * Reset the selection of the dropdown
     */
    @Method()
    async reset() {
        this.selectedItem = null;
    }

    @State() open: boolean = false;

    @Listen('click', { target: 'body' })
    protected handleClick(ev: MouseEvent) {
        if (closestElement('pd-dropdown', ev.composedPath()[0] as HTMLElement) !== this.element) {
            this.open = false;
        }
    }

    @Listen('keydown')
    protected handleKeyDown(ev: KeyboardEvent) {
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
                const currentIndex = this.items.findIndex((item) => item === this.selectedItem);
                const nextIndex = currentIndex >= this.items.length - 1 ? currentIndex : currentIndex + 1;
                const nextItem = this.items[nextIndex];
                if (nextItem !== this.selectedItem) this.selectItem(nextItem);
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                const currentIndex = this.items.findIndex((item) => item === this.selectedItem);
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
                    (item) => item.label.substring(0, this.currentSearch.length)?.toLowerCase() === this.currentSearch,
                );
                if (currentItem) this.selectedItem = currentItem;

                this.inputTime = current;
            }
        }
    }

    @Event({ eventName: 'pd-change' })
    public pdChange!: EventEmitter<DropdownItem>;

    private currentSearch: string = '';
    private inputTime: number = 0;

    private selectItem(item: DropdownItem, closeDropdown: boolean = false) {
        this.selectedItem = item;
        if (closeDropdown) this.open = false;
        this.pdChange.emit(item);
    }

    private toggleDropdown = () => {
        console.log(`file: pd-dropdown.tsx ~ line 158 ~ Dropdown ~ toggleDropdown`, this.open);
        this.open = !this.open;
        console.log(`file: pd-dropdown.tsx ~ line 158 ~ Dropdown ~ toggleDropdown`, this.open);
    };

    @State() selectedItem: any;

    protected componentWillLoad() {
        this.selectedItem = this.items.find((item) => item.selected);
    }

    protected componentDidLoad() {
        this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
    }

    protected componentDidUpdate() {
        if (!this.open) return;
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;
        this.scrollToSelected(dropdownItemNodes, this.menuElement);
        this.popper.forceUpdate();
    }

    private scrollToSelected(dropdownItemNodes: NodeListOf<HTMLPdDropdownItemElement>, menu: HTMLElement) {
        dropdownItemNodes.forEach((item) => {
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
            <Host class={this.error ? 'pd-dropdown-error' : ''}>
                <label
                    class={{
                        'pd-dropdown-label': true,
                        'pd-dropdown-disabled': this.disabled,
                    }}
                    onClick={this.toggleDropdown}
                >
                    {this.renderLabel()}
                </label>
                <div class={{ 'pd-dropdown': true, 'pd-dropdown-readonly': this.readonly }}>
                    <button
                        ref={(el) => (this.buttonElement = el)}
                        class="pd-dropdown-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={`${this.open}`}
                        onClick={this.toggleDropdown}
                        disabled={this.disabled || this.readonly}
                    >
                        <span class="pd-dropdown-text">{this.selectedItem?.label || this.placeholder}</span>
                        <pd-icon
                            class="pd-dropdown-caret"
                            name="dropdown"
                            rotate={this.open ? 180 : 0}
                            size={2}
                        ></pd-icon>
                    </button>
                    {this.renderDropDown()}
                </div>
            </Host>
        );
    }

    private renderDropDown() {
        return (
            <div
                ref={(el) => (this.menuElement = el)}
                class={`pd-dropdown-menu`}
                style={{
                    display: this.open ? 'block' : 'none',
                    maxHeight: `calc(3em * ${this.itemCount} + 0.25em)`,
                }}
                tabIndex={-1}
            >
                {this.renderEmptyItem()}
                {this.renderDropDownItems()}
            </div>
        );
    }

    private renderDropDownItems() {
        return this.items.map((item) => (
            <pd-dropdown-item
                value={item.label}
                selected={item.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(item, true)}
            ></pd-dropdown-item>
        ));
    }

    private renderEmptyItem() {
        if (!this.emptyItem) return;
        return (
            <pd-dropdown-item
                value={this.emptyItemData.label}
                selected={this.emptyItemData.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(this.emptyItemData, true)}
            ></pd-dropdown-item>
        );
    }

    private renderLabel() {
        if (!this.label) return;

        return <div class="pd-combobox-label-text">{this.label}</div>;
    }
}
