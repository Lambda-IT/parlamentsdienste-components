import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-footer',
    styleUrl: 'footer.scss',
    shadow: true,
})
export class Footer {
    render() {
        return (
            <Host>
                Footer
                <slot></slot>
            </Host>
        );
    }
}
