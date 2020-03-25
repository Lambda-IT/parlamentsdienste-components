import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-card-header',
    styleUrl: 'card-header.scss',
    shadow: true,
})
export class CardHeader {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
