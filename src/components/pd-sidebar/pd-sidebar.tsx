import { Component, ComponentInterface, h, Host } from '@stencil/core';

/**
 * @slot - Sidebar items
 */
@Component({
    tag: 'pd-sidebar',
    styleUrl: 'pd-sidebar.scss',
    shadow: true,
})
export class Sidebar implements ComponentInterface {
    public render() {
        return (
            <Host role="navigation">
                <slot></slot>
            </Host>
        );
    }
}
