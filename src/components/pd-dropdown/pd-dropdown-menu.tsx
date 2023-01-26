import {
    Component,
    ComponentDidLoad,
    ComponentInterface,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Listen,
    Prop,
    State,
    Watch,
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

    @Event({ eventName: 'pd-keydown' }) pdKeydown!: EventEmitter<KeyboardEvent>;

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        this.pdKeydown.emit(ev);
    }

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
                role="listbox"
                class={`pd-dropdown-menu`}
                style={{
                    opacity: this.isLoaded ? '1' : '0',
                    maxHeight: `calc(3em * ${this.itemCount} + 0.25em)`,
                }}
                tabIndex={-1}
            >
                {this.renderDropDownItems()}
            </Host>
        );
    }

    private renderDropDownItems() {
        return this.items.map((item, i) => (
            <pd-dropdown-item
                id={`pd-dropdown-item-${i}`}
                ref={(el) => {
                    if (item.id === this.selectedItem?.id) el.focus();
                }}
                tabindex="0"
                value={item.label}
                selected={item.id === this.selectedItem?.id || false}
                onClick={() => this.selectItem(item)}
                data-test={`pd-dropdown-item-${i}`}
            ></pd-dropdown-item>
        ));
    }
}
