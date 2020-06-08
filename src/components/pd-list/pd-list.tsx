import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-list',
    styleUrl: 'pd-list.scss',
    shadow: false,
})
export class PdList {
    public render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
