import { Component, ComponentInterface, Element, h, Host, State } from '@stencil/core';

@Component({
    tag: 'pd-panel-header',
    styleUrl: 'pd-panel-header.scss',
    assetsDirs: ['assets-panel-header'],
    shadow: true,
})
export class PanelHeader implements ComponentInterface {
    @Element() element: HTMLElement;

    @State() collapsed: boolean = false;
    private panel: any | null = null;

    private collapsible: boolean = false;

    public connectedCallback() {
        this.panel = this.element.closest('pd-panel') as HTMLPdPanelElement;
        if (this.panel) {
            this.collapsible = this.panel.collapsible;
            this.collapsed = this.panel.collapsed;
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

    public render() {
        return (
            <Host class={{ 'pd-panel-header-collapsed': this.collapsed }} onClick={(e) => this.toggle(e)}>
                <div class="pd-panel-header-content">
                    <slot></slot>
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
                onClick={(e) => this.toggle(e)}
                data-test="pd-panel-header-collapse"
            >
                <pd-icon name="caret" size={2.4} rotate={this.collapsed ? 0 : 180}></pd-icon>
            </button>
        );
    }
}
