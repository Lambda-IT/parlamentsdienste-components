import { Component, Host, h, getAssetPath } from '@stencil/core';

@Component({
    tag: 'pd-navbar',
    styleUrl: 'navbar.scss',
    assetsDirs: ['./assets-s'],
    shadow: true,
})
export class Navbar {
    render() {
        return (
            <Host>
                <div class="icon">
                    <img src={getAssetPath(`./assets/logo_parlament.svg`)}></img>
                </div>
                <slot></slot>
            </Host>
        );
    }
}
