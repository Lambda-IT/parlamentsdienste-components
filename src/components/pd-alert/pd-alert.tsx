import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-alert',
    styleUrl: 'pd-alert.css',
    shadow: true,
})
export class PdAlert {
    render() {
        return <Host>Alert</Host>;
    }
}
