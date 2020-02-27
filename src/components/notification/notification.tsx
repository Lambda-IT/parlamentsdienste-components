import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-notification',
    styleUrl: 'notification.scss',
    shadow: true,
})
export class Notification {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
