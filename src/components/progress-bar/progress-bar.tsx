import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-progress-bar',
    styleUrl: 'progress-bar.scss',
    shadow: true,
})
export class ProgressBar {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
