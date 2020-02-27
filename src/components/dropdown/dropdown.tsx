import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-dropdown',
    styleUrl: 'dropdown.scss',
    shadow: true,
})
export class Dropdown {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
