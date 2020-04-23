import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-toast',
    styleUrl: 'pd-toast.scss',
    shadow: true,
})
export class PdToast {
    render() {
        return <Host>Toast</Host>;
    }
}
