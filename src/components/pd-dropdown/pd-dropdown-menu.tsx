import {
    Component,
    ComponentInterface,
    EventEmitter,
    Event,
    h,
    Host,
    Prop,
    Element,
    State,
    Watch,
} from '@stencil/core';
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
    @Element() element: HTMLPdDropdownMenuElement;

    @State() isLoaded: boolean = false;

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
    @Prop() emptyItemData: DropdownItem;

    /**
     * TODO
     */
    @Prop() selectedItem: DropdownItem;

    /**
     * Triggers when one or all rows get selected
     * onPd-dropdown-select-item
     */
    @Event({ eventName: 'pd-dropdown-select-item' }) onDropdownSelectItem: EventEmitter<DropdownItem>;

    /**
     * Tells the parent that this component is ready (for setting the position)
     * onPd-dropdown-menu-did-load
     */
    @Event({ eventName: 'pd-dropdown-menu-did-load' }) onDropdownMenuDidLoad: EventEmitter<void>;

    public componentDidLoad() {
        console.log('menu');
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;

        this.onDropdownMenuDidLoad.emit();

        requestAnimationFrame(() => {
            // this.isLoaded = true;
            this.scrollToSelected(dropdownItemNodes, this.element);
        });
    }
    private scrollToSelected(dropdownItemNodes: NodeListOf<HTMLPdDropdownItemElement>, menu: HTMLElement) {
        dropdownItemNodes.forEach((item) => {
            const centerItem = Math.ceil(this.itemCount / 2) - 1;
            // console.log(item.selected, item.offsetTop - 48 * centerItem);
            if (item.selected) menu.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }
    private selectItem(item: DropdownItem) {
        // this.selectedItem = item;
        // console.log(item);
        this.onDropdownSelectItem.emit(item);
        // if (closeDropdown) this.open = false;
        // this.pdChange.emit(item);
    }

    public render() {
        return (
            <Host
                // ref={(el) => (this.menuElement = el)}
                class={`pd-dropdown-menu`}
                style={{
                    opacity: this.open ? '1' : '0',
                    // display: this.isLoaded ? 'block' : 'none',
                    maxHeight: `calc(3em * ${this.itemCount} + 0.25em)`,
                }}
                tabIndex={-1}
            >
                {this.renderEmptyItem()}
                {this.renderDropDownItems()}
            </Host>
        );
    }

    private renderDropDownItems() {
        return this.items.map((item, i) => (
            <pd-dropdown-item
                value={item.label}
                selected={item.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(item)}
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
                onClick={() => this.selectItem(this.emptyItemData)}
                data-test={`pd-dropdown-item-empty`}
            ></pd-dropdown-item>
        );
    }
}
