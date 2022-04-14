import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, State } from '@stencil/core';

/**
 * @slot - Header content
 * @slot subtitle - panel header subtitle content
 * @slot icons - Additional icons left of carret
 */
@Component({
    tag: 'pd-panel-header',
    styleUrl: 'pd-panel-header.scss',
    assetsDirs: ['assets-panel-header'],
    shadow: true,
})
export class PanelHeader implements ComponentInterface {
    @Element() element: HTMLElement;

    @State() collapsed: boolean = false;
    @State() private hover = false;

    /**
     * Used for panel hover stylings
     */
    @Event({ eventName: 'pd-hover' }) pdHover!: EventEmitter<boolean>;
    private panel?: HTMLPdPanelElement;

    private collapsible: boolean = false;
    private subpanel: boolean = false;

    public connectedCallback() {
        this.panel = this.element.closest('pd-panel') as HTMLPdPanelElement;
        if (this.panel) {
            this.collapsible = this.panel.collapsible;
            this.collapsed = this.panel.collapsed;
            this.subpanel = this.panel.subpanel;
        }
    }

    /**
     * Update panel collapsed state
     */
    private toggle(e: Event) {
        e.stopPropagation();
        this.collapsed = !this.collapsed;
        this.panel.collapsed = this.collapsed;
    }

    private handleHover(hover: boolean) {
        this.hover = hover;
        this.pdHover.emit(hover);
    }

    public render() {
        return (
            <Host
                class={{
                    'pd-panel-header-collapsed': this.collapsed,
                    'pd-panel-header-subpanel': this.subpanel,
                    'pd-panel-header-hover': this.hover && this.collapsible,
                }}
            >
                <div
                    class="pd-panel-header-content"
                    onMouseOver={() => this.handleHover(true)}
                    onMouseOut={() => this.handleHover(false)}
                    onClick={(e) => this.toggle(e)}
                >
                    <slot></slot>
                    <div class="pd-panel-header-subtitle">
                        <slot name="subtitle"></slot>
                    </div>
                </div>
                <div class="pd-panel-header-icons">
                    <slot name="icons"></slot>
                    {this.rendercollapsible()}
                </div>
            </Host>
        );
    }

    private rendercollapsible() {
        if (!this.collapsible) return;

        return (
            <button
                class="pd-panel-header-collapse"
                onMouseOver={() => this.handleHover(true)}
                onMouseOut={() => this.handleHover(false)}
                onClick={(e) => this.toggle(e)}
                data-test="pd-panel-header-collapse"
            >
                <pd-icon name="caret" size={2.4} rotate={this.collapsed ? 0 : 180}></pd-icon>
            </button>
        );
    }
}
