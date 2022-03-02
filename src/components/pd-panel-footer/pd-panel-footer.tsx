import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
    tag: 'pd-panel-footer',
    styleUrl: 'pd-panel-footer.scss',
    shadow: true,
})
export class PanelFooter implements ComponentInterface {
    public render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
