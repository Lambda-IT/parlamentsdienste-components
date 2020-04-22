import { Component, Host, h, Element } from '@stencil/core';
import flatpickr from 'flatpickr';

@Component({
    tag: 'pd-datepicker',
    styleUrl: 'datepicker.scss',
    shadow: true,
})
export class Datepicker {
    @Element() element: HTMLElement;

    private picker;

    constructor() {}

    componentDidLoad() {
        const element = this.element.shadowRoot.querySelector('.wrapper');
        this.picker = flatpickr(element, { wrap: true /*, clickOpens: false*/ });
        console.log(`Datepicker -> componentDidLoad -> flatpickr`, flatpickr);
    }

    private open() {
        //this.picker.toggle();
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
