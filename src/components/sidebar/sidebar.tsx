import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-sidebar',
    styleUrl: 'sidebar.scss',
    shadow: true,
})
export class Sidebar {
    render() {
        return (
            <Host role="navigation">
                <slot></slot>
            </Host>
        );
    }
}
