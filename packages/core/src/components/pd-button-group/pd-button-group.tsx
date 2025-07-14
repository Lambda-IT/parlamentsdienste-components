import { Component, ComponentInterface, h, Host } from '@stencil/core';

/**
 * @slot - Slot for buttons in group
 */
@Component({
    tag: 'pd-button-group',
    styleUrl: 'pd-button-group.scss',
    shadow: true,
})
export class ButtonGroup implements ComponentInterface {
    public render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
