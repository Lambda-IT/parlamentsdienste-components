import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'pd-card-content',
    styleUrl: 'card-content.scss',
})
export class CardContent {
    @Prop() padding: 'none' | 'vertical' | 'horizontal';

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
