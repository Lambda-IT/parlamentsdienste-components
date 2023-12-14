import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';
import { InputChangeEventDetail } from '../../types';

@Component({
    tag: 'pd-slider',
    styleUrl: 'pd-slider.scss',
    shadow: true,
})
export class Slider implements ComponentInterface {
    @State() sliderValue: number = 0;

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
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    /**
     * slider value
     */
    @Prop({ mutable: true }) value?: number = null;

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
                    class={{
                        'pd-slider': true,
                        'pd-slider-disabled': this.disabled,
                        'pd-slider-readonly': this.readonly,
                        'pd-slider-error': this.error,
                    }}
                    name={this.name}
                    disabled={this.disabled || this.readonly}
                    type="range"
                    multiple
                    min={this.min}
                    max={this.max}
                    step={this.step}
                    value={this.sliderValue}
                    onChange={this.onChange}
                    onInput={this.onInput}
                    data-test="pd-slider-input"
                />
            </Host>
        );
    }
}
