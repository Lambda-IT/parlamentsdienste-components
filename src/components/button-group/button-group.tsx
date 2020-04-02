import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-button-group',
    styleUrl: 'button-group.scss',
    shadow: false,
})
export class ButtonGroup {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
