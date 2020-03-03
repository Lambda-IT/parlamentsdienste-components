import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-tag',
    styleUrl: 'tag.scss',
    shadow: true,
})
export class Tag {
    render() {
        return (
            <Host>
                Tag
                <slot></slot>
            </Host>
        );
    }
}
