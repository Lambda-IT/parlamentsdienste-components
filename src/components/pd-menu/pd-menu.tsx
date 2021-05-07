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
     * Label nearby to the dot menu icon
     */
    @Prop() label = '';

    /**
     * Switch dark colors to bright font color
     */
    @Prop() invertColor = false;

    /**
     * Items to display and select in dropdown
     */
    @Prop() items: any[] = [];

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
                <div class={{ 'pd-menu': true, 'pd-menu-iverted': this.invertColor }}>
                    <button
                        class="pd-menu-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={`${this.isOpen}`}
                        onClick={() => this.toggleOpenState()}
                    >
                        {this.renderLabel()}
                        <pd-icon class="pd-menu-icon" size={2} name="menu_actions"></pd-icon>
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

    private renderLabel() {
        if (!this.label) return;
        return <span class="pd-menu-label">{this.label}</span>;
    }
}
