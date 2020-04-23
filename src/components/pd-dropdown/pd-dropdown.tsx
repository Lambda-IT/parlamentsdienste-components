import { Component, Host, h, State, Listen, Element, Prop, getAssetPath } from '@stencil/core';

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

    @Prop() placeholder: string = 'Placeholder';

    @Prop() items: DropdownItem[] = [];

    @State() open: boolean = false;

    @Listen('click', { target: 'body' })
    handleClick(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.open = false;
        }
    }

    // TODO: WIP
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
                let nextIndex = currentIndex >= this.items.length - 1 ? currentIndex : currentIndex + 1;
                this.selectedItem = this.items[nextIndex];
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                let currentIndex = this.items.findIndex(item => item === this.selectedItem);
                let nextIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
                this.selectedItem = this.items[nextIndex];
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

    private selectItem(item) {
        this.selectedItem = item;
        this.open = false;
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
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;

        dropdownItemNodes.forEach(item => {
            if (item.selected) menu.scrollTop = item.offsetTop - 48 * 2;
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
            <div class={`pd-dropdown-menu`} style={{ display: this.open ? 'block' : 'none' }} tabIndex={-1}>
                {this.renderDropDownItems()}
            </div>
        );
    }

    private renderDropDownItems() {
        return this.items.map(item => (
            <pd-dropdown-item
                value={item.label}
                selected={item.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(item)}
            ></pd-dropdown-item>
        ));
    }
}
