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
                <slot name="header"></slot>
                <slot></slot>
                <slot name="footer"></slot>
            </Host>
        );
    }
}
