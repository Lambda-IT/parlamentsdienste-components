import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
    tag: 'pd-panel-header',
    styleUrl: 'pd-panel-header.scss',
    assetsDirs: ['assets-panel-header'],
    shadow: true,
})
export class PanelHeader {
    @Element() element!: HTMLElement;

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
    private toggle() {
        this.collapsed = !this.collapsed;
        this.panel.collapsed = this.collapsed;
    }

    public render() {
        return (
            <Host class={{ 'pd-panel-header-collapsed': this.collapsed }}>
                <div class="pd-panel-header-content">
                    <slot></slot>
                </div>
                {this.rendercollapsible()}
            </Host>
        );
    }

    private rendercollapsible() {
        if (!this.collapsible) return;

        return (
            <div class="pd-panel-header-collapse" onClick={() => this.toggle()}>
                <pd-icon name="expand" size={1.2} rotate={this.collapsed ? 0 : 180}></pd-icon>
            </div>
        );
    }
}
