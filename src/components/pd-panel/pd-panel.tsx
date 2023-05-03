import {
    Component,
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

/**
 * @slot header - panel header content
 * @slot - main content
 * @slot footer - panel footer content
 */
@Component({
    tag: 'pd-panel',
    styleUrl: 'pd-panel.scss',
    shadow: true,
})
export class Panel implements ComponentInterface {
    @Element() element: HTMLElement;

    private panelHeader?: HTMLPdPanelHeaderElement;

    @State() hover: boolean = false;

    /**
     * Expands / collapses the panel content
     */
    @Prop() collapsed: boolean = false;

    /**
     * Show/hide collapse button
     */
    @Prop() collapsible: boolean = false;

    /**
     * Use as a subpanel
     */
    @Prop() subpanel: boolean = false;

    /**
     * Emitted when the value has changed.
     */
    @Event({ eventName: 'pd-collapsed' }) pdCollapsed!: EventEmitter<any>;

    @Watch('collapsed')
    async valueChanged(collapsed: boolean) {
        if (this.collapsible) {
            this.pdCollapsed.emit({ collapsed });
            await this.panelHeader.setCollapsed(collapsed);
        }
    }

    @Listen('pd-hover')
    handleHover(ev: CustomEvent) {
        ev.stopPropagation();
        this.hover = ev.detail;
    }

    public connectedCallback() {
        this.panelHeader = this.element.querySelector('pd-panel-header') as HTMLPdPanelHeaderElement;
    }

    public render() {
        return (
            <Host
                class={{
                    'pd-panel-subpanel': this.subpanel,
                    'pd-panel-hover': this.hover && this.collapsible,
                }}
            >
                <slot name="header"></slot>
                <div
                    class={{
                        'pd-panel-content-wrapper': true,
                        'pd-panel-content-collapsed': this.collapsed,
                        'pd-panel-content-expanded': !this.collapsed,
                    }}
                    aria-expanded={this.collapsed ? 'false' : 'true'}
                >
                    <div>
                        <slot></slot>
                        <slot name="footer"></slot>
                    </div>
                </div>
            </Host>
        );
    }
}
