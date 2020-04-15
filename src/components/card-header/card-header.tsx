import { Component, Host, h, Element, getAssetPath, State } from '@stencil/core';

@Component({
    tag: 'pd-card-header',
    styleUrl: 'card-header.scss',
    assetsDirs: ['assets-card-header'],
    shadow: true,
})
export class CardHeader {
    @Element() element!: HTMLElement;

    @State() collapsed: boolean = false;
    private card: any | null = null;

    connectedCallback() {
        this.card = this.element.closest('pd-card');
        if (this.card) {
            this.collapsed = this.card.collapsed;
        }
    }

    /**
     * Update card collapsed state
     */
    private toggle() {
        this.collapsed = !this.collapsed;
        this.card.collapsed = this.collapsed;
    }

    render() {
        return (
            <Host>
                <div class="pd-card-header">
                    <slot></slot>
                </div>
                <div style={{ float: 'right' }} onClick={() => this.toggle()}>
                    <img
                        src={getAssetPath(`./assets-card-header/icon_collapse.svg`)}
                        style={{ transform: `rotate(${this.collapsed ? '180deg' : '0deg'})` }}
                    ></img>
                </div>
            </Host>
        );
    }
}
