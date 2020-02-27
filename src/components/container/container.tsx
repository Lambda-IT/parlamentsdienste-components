import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-container',
    styleUrl: 'container.scss',
    shadow: true,
})
export class Container {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
