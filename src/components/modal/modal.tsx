import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-modal',
    styleUrl: 'modal.scss',
    shadow: true,
})
export class Modal {
    render() {
        return (
            <Host>
                Modal
                <slot></slot>
            </Host>
        );
    }
}
