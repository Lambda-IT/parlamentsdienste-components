import { Component, Host, h, State, Listen, Element, Prop, getAssetPath, Event, EventEmitter } from '@stencil/core';
import { createPopper } from '@popperjs/core';

// TODO: move out of file
export interface DropdownItem {
    id: string;
    label: string;
    value: string;
    selected?: boolean;
}

@Component({
    tag: 'pd-dropdown',
    styleUrl: 'pd-dropdown.scss',
    assetsDirs: ['assets-dropdown'],
    shadow: true,
})
export class Dropdown {
    @Element() element;

    /**
     * Placeholder when no item is selected
     */
    @Prop() placeholder: string = 'Placeholder';

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

    @State() open: boolean = false;

    @Listen('click', { target: 'body' })
    handleClick(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.open = false;
        }
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
            case ' ': {
                ev.preventDefault();
                break;
            }

            case 'ArrowDown': {
                ev.preventDefault();
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

    @Event({ eventName: 'pd-on-change' }) pdOnChange!: EventEmitter<DropdownItem>;

    private currentSearch: string = '';
    private inputTime: number = 0;

    private selectItem(item: DropdownItem, closeDropdown: boolean = false) {
        this.selectedItem = item;
        if (closeDropdown) this.open = false;
        this.pdOnChange.emit(item);
    }

    private openDropdown = () => {
        this.open = !this.open;
    };

    @State() selectedItem: any;

    componentWillLoad() {
        this.selectedItem = this.items.find(item => item.selected);
    }

    componentDidUpdate() {
        if (!this.open) return;

        const menu = this.element.shadowRoot.querySelector('.pd-dropdown-menu') as HTMLElement;
        const button = this.element.shadowRoot.querySelector('.pd-dropdown-button') as HTMLElement;
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;

        this.scrollToSelected(dropdownItemNodes, menu);
        this.createMenuPopper(button, menu);
    }

    private scrollToSelected(dropdownItemNodes: NodeListOf<HTMLPdDropdownItemElement>, menu: HTMLElement) {
        dropdownItemNodes.forEach(item => {
            const centerItem = Math.ceil(this.itemCount / 2) - 1;
            if (item.selected) menu.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }

    // create a popper js element for the menu
    private createMenuPopper(button, menu) {
        createPopper(button, menu, {
            placement: 'bottom',
        });
    }

    render() {
        return (
            <Host>
                <div class="pd-dropdown">
                    <button
                        class="pd-dropdown-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={`${this.open}`}
                        onClick={this.openDropdown}
                    >
                        <span class="pd-dropdown-text">{this.selectedItem?.label || this.placeholder}</span>
                        <img
                            class="pd-dropdown-caret"
                            src={getAssetPath(`./assets-dropdown/icon-right_button.svg`)}
                            style={{ transform: `rotate(${this.open ? '270deg' : '90deg'})` }}
                        ></img>
                    </button>
                    {this.renderDropDown()}
                </div>
            </Host>
        );
    }

    private renderDropDown() {
        return (
            <div
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
        return this.items.map(item => (
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
}
