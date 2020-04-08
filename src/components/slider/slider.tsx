import { Component, Host, h, Event, Prop, EventEmitter, State, Watch } from '@stencil/core';
import { InputChangeEventDetail } from '../../interface';

@Component({
    tag: 'pd-slider',
    styleUrl: 'slider.scss',
    shadow: true,
})
export class Slider {
    @State() sliderValue: number = 0;

    @Prop() disabled;

    @Prop() max: number = 100;

    @Prop() min: number = 0;

    @Prop() step: number = 1;

    @Prop() name: string = '';

    @Prop({ mutable: true }) value?: number | null = null;

    @Watch('value')
    valueChanged(value) {
        this.sliderValue = value;
    }

    /**
     * Emitted when the value has changed.
     */
    @Event() pdOnInput!: EventEmitter<InputChangeEventDetail>;

    /**
     * Emitted when slider has been released.
     */
    @Event() pdOnChange!: EventEmitter<InputChangeEventDetail>;

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = parseFloat(input.value) || 0;
        }
        this.pdOnInput.emit({ value: this.value });
    };

    private onChange = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = parseFloat(input.value) || 0;
        }
        this.pdOnChange.emit({ value: this.value });
    };

    render() {
        return (
            <Host>
                <input
                    class="pd-slider"
                    type="range"
                    multiple
                    min={this.min}
                    max={this.max}
                    step={this.step}
                    value={this.sliderValue}
                    onChange={this.onChange}
                    onInput={this.onInput}
                />
            </Host>
        );
    }
}
