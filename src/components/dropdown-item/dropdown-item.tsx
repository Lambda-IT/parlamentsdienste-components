import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-dropdown-item',
    styleUrl: 'dropdown-item.scss',
    shadow: true,
})
export class DropdownItem implements ComponentInterface {
    render() {
        return (
            <Host>
                <div class="dropdown-item">
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
