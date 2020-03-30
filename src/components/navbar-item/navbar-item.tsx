import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-navbar-item',
    styleUrl: 'navbar-item.scss',
    shadow: true,
})
export class NavbarItem {
    render() {
        return (
            <Host>
                <button class="item">
                    <slot></slot>
                </button>
            </Host>
        );
    }
}
