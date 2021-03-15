import { Component, Host, h, State, Listen, Element, Prop, Event, EventEmitter, Method } from '@stencil/core';
import { createPopper, Instance } from '@popperjs/core';
import { closestElement } from '../../utils/helpers';
@Component({
    tag: 'pd-menu',
    styleUrl: 'pd-menu.scss',
    assetsDirs: ['assets-menu'],
    shadow: true,
})
export class Menu {
    @Element() element;
    private menuElement: HTMLElement;
    private buttonElement: HTMLElement;
    private popper: Instance;

    /**
     * Placeholder when no item is selected
     */
    @Prop() placeholder = '';

    /**
     * Items to display and select in dropdown
     */
    @Prop() items: any[] = [];

    /**
     * Enable selection of an empty item
     */
    @Prop() emptyItem = false;

    /**
     * Data used for the empty item
     */
    @Prop() emptyItemData: any = {
        id: '0',
        label: '-',
        value: null,
    };

    @State() isOpen = false;

    /**
     * Open menu
     */
    @Method()
    async open() {
        this.isOpen = true;
    }

    /**
     * Close menu
     */
    @Method()
    async close() {
        this.isOpen = false;
    }

    @Listen('click', { target: 'body' })
    protected handleClick(ev: MouseEvent) {
        if (closestElement('pd-menu', ev.composedPath()[0] as HTMLElement) !== this.element) {
            this.isOpen = false;
        }
    }

    @Event({ eventName: 'pd-change' })
    pdChange!: EventEmitter<any>;

    protected componentDidLoad() {
        this.menuElement = this.element.shadowRoot.querySelector('.pd-menu-content') as HTMLElement;
        this.buttonElement = this.element.shadowRoot.querySelector('.pd-menu-button') as HTMLElement;
        this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
    }

    protected componentDidUpdate() {
        if (!this.isOpen) return;
        this.popper.forceUpdate();
    }

    private toggleOpenState() {
        this.isOpen = !this.isOpen;
    }

    // create a popper js element for the menu
    private createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: 'bottom-start',
        });
    }

    render() {
        return (
            <Host>
                <div class="pd-menu">
                    <button
                        class="pd-menu-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={`${this.isOpen}`}
                        onClick={() => this.toggleOpenState()}
                    >
                        <pd-icon size={2} name="menu_actions"></pd-icon>
                    </button>
                    <div>{this.renderMenu()}</div>
                </div>
            </Host>
        );
    }

    private renderMenu() {
        return (
            <div
                class={`pd-menu-content`}
                style={{
                    display: this.isOpen ? 'block' : 'none',
                }}
                tabIndex={-1}
                onClick={() => this.toggleOpenState()}
            >
                <slot></slot>
            </div>
        );
    }
}
