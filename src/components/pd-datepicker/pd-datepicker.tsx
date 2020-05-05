import { Component, Host, h, Element } from '@stencil/core';
import flatpickr from 'flatpickr';

@Component({
    tag: 'pd-datepicker',
    styleUrl: 'pd-datepicker.scss',
    shadow: true,
})
export class Datepicker {
    @Element() element: HTMLElement;

    constructor() {}

    componentDidLoad() {
        const element = this.element.shadowRoot.querySelector('.wrapper');
        flatpickr(element, {
            wrap: true,
            enableTime: true,
            time_24hr: true,
        });
    }

    render() {
        return (
            <Host>
                <div class="wrapper">
                    <pd-input data-input />
                </div>
            </Host>
        );
    }
}
