import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-col',
    styleUrl: 'col.scss',
    shadow: true,
})
export class Col {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
