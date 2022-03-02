import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
    tag: 'pd-panel-content',
    styleUrl: 'pd-panel-content.scss',
    shadow: false,
})
export class PanelContent implements ComponentInterface {
    public render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
