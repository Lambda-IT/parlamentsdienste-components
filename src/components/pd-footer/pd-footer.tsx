import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-footer',
    styleUrl: 'pd-footer.scss',
    shadow: true,
})
export class Footer {
    render() {
        return (
            <Host role="contentinfo">
                Footer
                <slot></slot>
            </Host>
        );
    }
}
