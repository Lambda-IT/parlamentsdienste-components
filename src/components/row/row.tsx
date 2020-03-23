import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-row',
    styleUrl: 'row.scss',
    shadow: true,
})
export class Row {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
