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
        flatpickr(element, { wrap: true });
    }

    render() {
        return (
            <Host>
                <div class="wrapper">
                    <input data-input />
                    <button data-toggle>toggle</button>
                </div>
            </Host>
        );
    }
}
