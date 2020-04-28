import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-panel-content',
    styleUrl: 'pd-panel-content.scss',
})
export class PanelContent {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
