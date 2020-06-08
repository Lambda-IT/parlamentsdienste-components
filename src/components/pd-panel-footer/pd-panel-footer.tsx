import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-panel-footer',
    styleUrl: 'pd-panel-footer.scss',
    shadow: true,
})
export class PanelFooter {
    public render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
