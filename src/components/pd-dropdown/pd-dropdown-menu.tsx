import { Component, ComponentInterface, EventEmitter, Event, h, Host, Prop, State, Watch } from '@stencil/core';
import { createPopper, Instance } from '@popperjs/core';
import { DropdownItem } from '../../interface';
/**
 * @slot - Label content
 */
@Component({
    tag: 'pd-dropdown-menu',
    styleUrl: 'pd-dropdown-menu.scss',
    shadow: true,
})
export class Dropdownmenu implements ComponentInterface {
    private menuElement: HTMLElement;

    constructor() {}

    @Prop() open = true;

    /**
     * Items visible in dropdown
     */
    @Prop() itemCount: number = 5;

    /**
     * Items to display and select in dropdown
     */
    @Prop() items: DropdownItem[] = [];

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
     * TODO
     */
    @Prop() selectedItem: DropdownItem = null;

    // For popper.js
    @Prop() buttonElement: HTMLElement;

    // @Watch('show')
    // public showChanged(show) {
    //     // console.log(this.overlayElement);
    //     if (show) {
    //         document.body.appendChild(this.overlayElement);
    //     } else {
    //     }
    // }

    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<DropdownItem>;

    public componentDidLoad() {}

    private selectItem(item: DropdownItem, closeDropdown: boolean = false) {
        this.selectedItem = item;
        if (closeDropdown) this.open = false;
        this.pdChange.emit(item);
    }

    public render() {
        return <Host>{this.renderDropDown()}</Host>;
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
        return this.items.map((item, i) => (
            <pd-dropdown-item
                value={item.label}
                selected={item.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(item, true)}
                data-test={`pd-dropdown-item-${i}`}
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
                data-test={`pd-dropdown-item-empty`}
            ></pd-dropdown-item>
        );
    }
}
