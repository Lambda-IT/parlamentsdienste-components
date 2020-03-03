import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'pd-datepicker',
    styleUrl: 'datepicker.scss',
    shadow: true,
})
export class Datepicker {
    render() {
        return (
            <Host>
                Datepicker
                <slot></slot>
            </Host>
        );
    }
}
