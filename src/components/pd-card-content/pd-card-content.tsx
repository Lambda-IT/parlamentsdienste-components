import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-card-content',
    styleUrl: 'pd-card-content.scss',
})
export class CardContent {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
