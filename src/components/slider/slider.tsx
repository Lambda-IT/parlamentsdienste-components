import { Component, Host, h, Event, Prop, EventEmitter } from '@stencil/core';

@Component({
    tag: 'pd-slider',
    styleUrl: 'slider.scss',
    shadow: true,
})
export class Slider {
    @Prop() disabled;

    @Prop() max: number = 100;

    @Prop() min: number = 0;

    @Prop() step: number = 1;

    @Prop() name: string = '';

    @Prop() value: number = 0;

    @Event() pdChange: EventEmitter<number>;

    render() {
        return (
            <Host>
                <div class="slider-background"></div>
                <div class="slider-bar"></div>
                <div class="slider-knob"></div>
            </Host>
        );
    }
}
