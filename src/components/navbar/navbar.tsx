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
                <img src={getAssetPath(`./assets-navbar/logo_parlament.svg`)}></img>
                <slot></slot>
            </Host>
        );
    }
}
