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
} from '@stencil/core';
import { SortDropdownItem, SortRevertItem } from '../../interface';

@Component({
    tag: 'pd-sort',
    styleUrl: 'pd-sort.scss',
    shadow: true,
})
export class Dropdown implements ComponentInterface, ComponentWillLoad, ComponentDidLoad, ComponentDidUpdate {
    private menuElement: HTMLElement;
    private buttonElement: HTMLElement;
    private popper: Instance;

    @Element() element: HTMLElement;

    @State() open: boolean = false;
    @State() selectedItem: SortDropdownItem;

    /**
     * Placeholder when no item is selected
     */
    @Prop() placeholder: string = '';

    /**
     * Items to display and select in dropdown
     */
    @Prop() items: SortDropdownItem[] = [];

    /**
     * Items visible in dropdown
     */
    @Prop() itemCount: number = 7;

    /**
     * Enable selection of an empty item
     */
    @Prop() emptyItem: boolean = false;

    /**
     * Data used for the empty item
     */
    @Prop() emptyItemData: SortDropdownItem = {
        id: '0',
        label: '-',
        value: null,
        sort: null,
    };

    /**
     * Enables the revert item at the bottom of the dropdown
     */
    @Prop() reverseItem: boolean = false;

    /**
     * Data used for the reverse item at the bottom of the dropdown
     */
    @Prop() reverseItemData: SortRevertItem = {
        label: 'Sort. Umkehren',
        selected: false,
    };

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * Label
     */
    @Prop() label: string = 'Sortieren nach:';

    @Event({ eventName: 'pd-change' }) pdChange: EventEmitter<SortDropdownItem>;
    @Event({ eventName: 'pd-reverse' }) pdReverse: EventEmitter<SortDropdownItem>;

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
        }
    }

    private selectItem(item: SortDropdownItem, closeDropdown: boolean = false) {
        this.selectedItem = item;
        if (this.reverseItem && this.reverseItemData.selected) {
            this.reverseItemData.selected = false;
        }
        if (closeDropdown) this.open = false;
        this.pdChange.emit(item);
    }
    private reverseItemClicked() {
        if (!this.selectedItem) return;

        // If we already have a reverse item selected, we reselect the already selected item which will trigger the pdChange event and unselect the reverse item
        if (this.reverseItemData.selected) {
            this.selectItem(this.selectedItem, true);
            return;
        }
        this.reverseItemData.selected = true;
        this.open = false;
        this.pdReverse.emit(this.selectedItem);
    }

    private toggleDropdown = () => {
        if (!this.disabled) this.open = !this.open;
    };

    public componentWillLoad() {
        this.selectedItem = this.items.find((item) => item.selected);
    }

    public componentDidLoad() {
        this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
    }

    public componentDidUpdate() {
        this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);

        if (this.open) this.popper.forceUpdate();
    }

    // create a popper js element for the menu
    private createMenuPopper(button, menu) {
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

    public render() {
        return (
            <Host>
                <div
                    class={{
                        'pd-sort': true,
                    }}
                >
                    <button
                        ref={(el) => (this.buttonElement = el)}
                        class="pd-sort-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={`${this.open}`}
                        onClick={this.toggleDropdown}
                        disabled={this.disabled}
                        data-test="pd-sort-button"
                    >
                        <span class={{ 'pd-sort-text': true }} data-test="pd-dropdown-text">
                            {this.label + ' '}
                            {this.selectedItem?.label || this.placeholder}
                        </span>
                        <pd-icon
                            class="pd-sort-caret"
                            name="dropdown"
                            rotate={this.open ? 180 : 0}
                            size={2.4}
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
                class={`pd-sort-menu`}
                style={{
                    display: this.open ? 'block' : 'none',
                    maxHeight: `calc(3em * ${this.itemCount} + 0.5em)`,
                }}
                tabIndex={-1}
            >
                {this.renderEmptyItem()}
                {this.renderDropDownItems()}
                {this.renderReverseItem()}
            </div>
        );
    }

    private renderDropDownItems() {
        return this.items
            .filter((item) => item.sort)
            .map((item, i) => (
                <pd-dropdown-item
                    value={item.label}
                    selected={item.id === this.selectedItem?.id || false}
                    onClick={() => this.selectItem(item, true)}
                    data-test={`pd-sort-item-${i}`}
                ></pd-dropdown-item>
            ));
    }

    private renderReverseItem() {
        if (!this.reverseItem || !this.selectedItem) return;
        return (
            <div class="pd-sort-menu-bottom-separator">
                <pd-dropdown-item
                    value={this.reverseItemData.label}
                    selected={this.reverseItemData.selected || false}
                    onClick={() => this.reverseItemClicked()}
                    data-test={`pd-sort-revert-item`}
                ></pd-dropdown-item>
            </div>
        );
    }

    private renderEmptyItem() {
        if (!this.emptyItem) return;
        return (
            <pd-dropdown-item
                value={this.emptyItemData.label}
                selected={this.emptyItemData.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(this.emptyItemData, true)}
                data-test={`pd-sort-item-empty`}
            ></pd-dropdown-item>
        );
    }
}
