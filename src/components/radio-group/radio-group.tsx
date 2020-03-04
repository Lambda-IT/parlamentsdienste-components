import { Component, Host, h, Prop, Watch, Event, EventEmitter } from '@stencil/core';
import { RadioGroupChangeEventDetail } from './radio-group.interface';

@Component({
    tag: 'pd-radio-group',
})
export class RadioGroup {
    /**
     * If `true`, the radios can be deselected.
     */
    @Prop() allowEmptySelection = false;

    /**
     * the value of the radio group.
     */
    @Prop({ mutable: true }) value?: any | null;

    @Watch('value')
    valueChanged(value: any | undefined) {
        this.pdChange.emit({ value });
    }

    /**
     * Emitted when the value has changed.
     */
    @Event() pdChange!: EventEmitter<RadioGroupChangeEventDetail>;

    private onClick = (ev: Event) => {
        const selectedRadio = ev.target && (ev.target as HTMLElement).closest('pd-radio');
        if (selectedRadio) {
            const currentValue = this.value;
            const newValue = selectedRadio.value;
            if (newValue !== currentValue) {
                this.value = newValue;
            } else if (this.allowEmptySelection) {
                this.value = undefined;
            }
        }
    };

    render() {
        return <Host role="radiogroup" onClick={this.onClick}></Host>;
    }
}
