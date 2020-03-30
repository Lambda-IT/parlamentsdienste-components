import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-sidebar',
    styleUrl: 'sidebar.scss',
    shadow: true,
})
export class Sidebar {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
