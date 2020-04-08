import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
    tag: 'pd-card-content',
    styleUrl: 'card-content.scss',
})
export class CardContent {
    @Element() element!: HTMLElement;

    @Prop() collapsed: boolean = false;

    private card: any | null = null;

    connectedCallback() {
        // set the radio-group to closest parent and add eventlistener for value change
        this.card = this.element.closest('pd-card');
        if (this.card) {
            this.card.addEventListener('pdCollapsed', collapsedEvent => {
                this.collapsed = collapsedEvent.detail.collapsed;
            });
        }
    }

    render() {
        return <Host class={this.collapsed ? 'pd-card-content-collapsed' : ''}>{this.collapsed}</Host>;
    }
}
