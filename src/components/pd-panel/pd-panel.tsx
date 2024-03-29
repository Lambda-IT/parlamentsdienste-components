import { Component, ComponentDidLoad, ComponentInterface, Element, Event, EventEmitter, h, Host, Listen, Prop, State, Watch } from '@stencil/core';
import { collapse, expand } from '../../utils';

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
export class Panel implements ComponentInterface, ComponentDidLoad {
    @Element() element: HTMLElement;

    private contentWrapperElement: HTMLElement;
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
            collapsed ? collapse(this.contentWrapperElement) : expand(this.contentWrapperElement);
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

    public componentDidLoad() {
        // start collapsed
        if (this.collapsed) {
            this.contentWrapperElement.style.height = '0';
            this.contentWrapperElement.style.overflow = 'hidden';
        }
    }

    public render() {
        return (
            <Host
                class={{
                    'pd-panel-subpanel': this.subpanel,
                    'pd-panel-hover': this.hover && this.collapsible,
                    'pd-panel-content-collapsed': this.collapsed,
                }}
            >
                <slot name="header"></slot>
                <div
                    ref={el => (this.contentWrapperElement = el)}
                    class={{
                        'pd-panel-content-wrapper': true,
                        'pd-panel-content-collapsed': this.collapsed,
                        'pd-panel-content-expanded': !this.collapsed,
                    }}
                    aria-expanded={this.collapsed ? 'false' : 'true'}
                >
                    <slot></slot>
                    <slot name="footer"></slot>
                </div>
            </Host>
        );
    }
}
