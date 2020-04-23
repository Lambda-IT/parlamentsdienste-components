import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-card-footer',
    styleUrl: 'pd-card-footer.scss',
    shadow: true,
})
export class CardFooter {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
