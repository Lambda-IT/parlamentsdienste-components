import { createPopper, Instance } from '@popperjs/core';
import {
    Component,
    ComponentDidLoad,
    ComponentDidUpdate,
    ComponentInterface,
    Element,
    h,
    Host,
    Listen,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import { PdPlacement } from '../../interface';

/**
 * @slot - Menu items
 */
@Component({
    tag: 'pd-menu',
    styleUrl: 'pd-menu.scss',
    assetsDirs: ['assets-menu'],
    shadow: true,
})
export class Menu implements ComponentInterface, ComponentDidLoad, ComponentDidUpdate {
    @Element() element: HTMLElement;

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

    /**
     * Prefered placement of menu dropdown
     */
    @Prop() placement: PdPlacement = 'bottom-start';

    @Watch('placement')
    placementChanged(placement: PdPlacement) {
        this.popper.setOptions({ placement });
    }

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
    handleClick(ev: MouseEvent) {
        if (!ev.composedPath().includes(this.element)) this.isOpen = false;
    }

    public componentDidLoad() {
        this.popper = this.createMenuPopper(this.buttonElement, this.menuElement);
    }

    public componentDidUpdate() {
        if (!this.isOpen) return;
        this.popper.forceUpdate();
    }

    private toggleOpenState() {
        this.isOpen = !this.isOpen;
    }

    // create a popper js element for the menu
    private createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: this.placement,
        });
    }

    public render() {
        return (
            <Host>
                <div class={{ 'pd-menu': true, 'pd-menu-inverted': this.invertColor }}>
                    <button
                        ref={(el) => (this.buttonElement = el)}
                        class="pd-menu-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={`${this.isOpen}`}
                        onClick={() => this.toggleOpenState()}
                        data-test="pd-menu-button"
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
                ref={(el) => (this.menuElement = el)}
                class={`pd-menu-content`}
                style={{
                    display: this.isOpen ? 'block' : 'none',
                }}
                onClick={() => this.toggleOpenState()}
            >
                <slot></slot>
            </div>
        );
    }

    private renderLabel() {
        if (!this.label) return;
        return (
            <span class="pd-menu-label" data-test="pd-menu-label">
                {this.label}
            </span>
        );
    }
}
