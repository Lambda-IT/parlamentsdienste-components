import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-timeline',
    styleUrl: 'pd-timeline.scss',
    shadow: true,
})
export class Timeline {
    render() {
        return (
            <Host>
                Timeline
                <slot></slot>
            </Host>
        );
    }
}