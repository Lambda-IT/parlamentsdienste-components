import { Component, Host, h, Element, State, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'pd-card-header',
    styleUrl: 'pd-card-header.scss',
    assetsDirs: ['assets-card-header'],
    shadow: true,
})
export class CardHeader {
    @Element() element!: HTMLElement;

    @State() collapsed: boolean = false;
    private card: any | null = null;

    private collapsible: boolean = false;

    @Event({ eventName: 'pd-on-collapsed' }) pdOnCollapsed!: EventEmitter<boolean>;

    connectedCallback() {
        this.card = this.element.closest('pd-card') as HTMLPdCardElement;
        if (this.card) {
            this.collapsible = this.card.collapsible;
            this.collapsed = this.card.collapsed;
        }
    }

    /**
     * Update card collapsed state
     */
    private toggle() {
        this.collapsed = !this.collapsed;
        this.card.collapsed = this.collapsed;
        this.pdOnCollapsed.emit(this.collapsed);
    }

    render() {
        return (
            <Host>
                <div class="pd-card-header-content">
                    <slot></slot>
                </div>
                {this.rendercollapsible()}
            </Host>
        );
    }

    rendercollapsible() {
        if (!this.collapsible) return;

        return (
            <div class="pd-card-header-collapse" onClick={() => this.toggle()}>
                <pd-icon name="caret" size={1.2} rotate={this.collapsed ? 180 : 0}></pd-icon>
            </div>
        );
    }
}
