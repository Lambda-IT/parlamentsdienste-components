import { Component, Host, h, Event, Prop, EventEmitter, State, Watch } from '@stencil/core';
import { InputChangeEventDetail } from '../../interface';

@Component({
    tag: 'pd-slider',
    styleUrl: 'pd-slider.scss',
    shadow: true,
})
export class Slider {
    /**
     * max value
     */
    @Prop() max: number = 100;

    /**
     * min value
     */
    @Prop() min: number = 0;

    /**
     * value steps
     */
    @Prop() step: number = 1;

    /**
     * slider name
     */
    @Prop() name: string = '';

    /**
     * slider value
     */
    @Prop({ mutable: true }) value?: number | null = null;

    @State() sliderValue: number = 0;

    @Watch('value')
    valueChanged(value) {
        this.sliderValue = value;
    }

    /**
     * Emitted when the value has changed.
     */
    @Event({ eventName: 'pd-input' }) pdInput!: EventEmitter<InputChangeEventDetail>;

    /**
     * Emitted when slider has been released.
     */
    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<InputChangeEventDetail>;

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = parseFloat(input.value) || 0;
        }
        this.pdInput.emit({ value: this.value });
    };

    private onChange = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = parseFloat(input.value) || 0;
        }
        this.pdChange.emit({ value: this.value });
    };

    public render() {
        return (
            <Host>
                <input
                    name={this.name}
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
