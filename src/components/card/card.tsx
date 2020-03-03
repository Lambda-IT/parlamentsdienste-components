import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-card',
    styleUrl: 'card.scss',
    shadow: true,
})
export class Card {
    render() {
        return (
            <Host>
                Card
                <slot></slot>
            </Host>
        );
    }
}
