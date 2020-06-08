import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-button-group',
    styleUrl: 'pd-button-group.scss',
    shadow: true,
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
