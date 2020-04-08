import { Component, Host, h, getAssetPath } from '@stencil/core';

@Component({
    tag: 'pd-navbar',
    styleUrl: 'navbar.scss',
    assetsDirs: ['assets-navbar'],
    shadow: true,
})
export class Navbar {
    render() {
        return (
            <Host>
                <img class="pd-navbar-icon" src={getAssetPath(`./assets-navbar/logo_parlament.svg`)}></img>
                <slot></slot>
            </Host>
        );
    }
}
