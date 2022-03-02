import { Component, ComponentInterface, h, Host } from '@stencil/core';

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
