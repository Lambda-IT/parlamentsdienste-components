import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
    tag: 'pd-list',
    styleUrl: 'pd-list.scss',
    shadow: false,
})
export class List implements ComponentInterface {
    public render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
