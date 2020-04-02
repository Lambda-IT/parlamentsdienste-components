import { Component, Host, h, Element, Prop, getAssetPath } from '@stencil/core';

@Component({
    tag: 'pd-card-header',
    styleUrl: 'card-header.scss',
    assetsDirs: ['./assets'],
    shadow: true,
})
export class CardHeader {
    @Element() element!: HTMLElement;

    @Prop() collapsed: boolean = false;

    private card: any | null = null;

    connectedCallback() {
        // set the radio-group to closest parent and add eventlistener for value change
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
                <div class="header">
                    <slot></slot>
                </div>
                <div style={{ float: 'right' }} onClick={() => this.toggle()}>
                    <img
                        src={getAssetPath(`./assets/icon_collapse.svg`)}
                        style={{ transform: `rotate(${this.collapsed ? '180deg' : '0deg'})` }}
                    ></img>
                </div>
            </Host>
        );
    }
}
