import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-navbar',
    styleUrl: 'pd-navbar.scss',
    assetsDirs: ['assets-navbar'],
    shadow: true,
})
export class Navbar {
    render() {
        return (
            <Host role="navigation">
                <pd-icon class="pd-navbar-icon" name="parlament" size={3}></pd-icon>
                <slot></slot>
            </Host>
        );
    }
}
