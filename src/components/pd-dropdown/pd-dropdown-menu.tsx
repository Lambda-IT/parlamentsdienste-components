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
    ComponentDidLoad,
} from '@stencil/core';
import { DropdownItem } from '../../interface';

@Component({
    tag: 'pd-dropdown-menu',
    styleUrl: 'pd-dropdown-menu.scss',
    shadow: true,
})
export class Dropdownmenu implements ComponentInterface, ComponentDidLoad {
    @Element() element: HTMLPdDropdownMenuElement;

    /**
     * Set the opacity on 1 after the component is fully loaded and moved by popper
     */
    @State() isLoaded = false;

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
     * The selected Item
     */
    @Prop() selectedItem: DropdownItem;

    /**
     * Event for the parent (pd-dropdown) to select an item
     */
    @Event({ eventName: 'pd-dropdown-select-item' }) onDropdownSelectItem: EventEmitter<DropdownItem>;

    /**
     * Tells the parent that this component is ready (for setting the position with popperJS)
     */
    @Event({ eventName: 'pd-dropdown-menu-did-load' }) onDropdownMenuDidLoad: EventEmitter<void>;

    @Watch('selectedItem')
    public selectedItemChanged() {
        this.scrollToSelected();
    }

    public componentDidLoad() {
        this.onDropdownMenuDidLoad.emit();

        requestAnimationFrame(() => {
            this.isLoaded = true;
            this.scrollToSelected();
        });
    }

    private scrollToSelected() {
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;

        dropdownItemNodes.forEach((item) => {
            const centerItem = Math.ceil(this.itemCount / 2) - 1;
            if (item.selected) this.element.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }
    private selectItem(item: DropdownItem) {
        this.onDropdownSelectItem.emit(item);
    }

    public render() {
        return (
            <Host
                class={`pd-dropdown-menu`}
                style={{
                    opacity: this.isLoaded ? '1' : '0',
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
