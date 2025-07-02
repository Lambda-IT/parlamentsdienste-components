import { Component, Element, Event, EventEmitter, Host, Listen, Prop, Watch, h } from '@stencil/core';

@Component({
    tag: 'pd-radio-group',
    styleUrl: 'pd-radio-group.scss',
    shadow: true,
})
export class PdRadioGroup {
    @Element() element: HTMLElement;

    radios: NodeListOf<HTMLPdRadioElement>;

    /**
     * Name of the radio-group. Used to group radios together
     */
    @Prop() name: string = '';

    /**
     * Value of the radio-group. Used to set the value of the selected radio
     */
    @Prop() value: string = null;

    /**
     * If `true`, the user cannot interact with the radio buttons.
     */
    @Prop() disabled = false;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<string>;

    @Watch('value')
    valueChanged(newValue: string) {
        if (!newValue) return;
        this.radios.forEach((radio: HTMLPdRadioElement) => {
            if (radio.value === newValue) {
                radio.checked = true;
                this.pdChange.emit(radio.value);
            } else {
                radio.checked = false;
            }
        });
    }

    @Watch('disabled')
    disabledChanged(newValue: boolean) {
        this.handlePropChanged('disabled', newValue);
    }

    @Watch('error')
    errorChanged(newValue: boolean) {
        this.handlePropChanged('error', newValue);
    }

    @Watch('readonly')
    readonlyChanged(newValue: boolean) {
        this.handlePropChanged('readonly', newValue);
    }

    handlePropChanged(propName: string, newValue: any) {
        if (typeof newValue !== 'boolean') return;
        this.radios.forEach((radio: HTMLPdRadioElement) => {
            radio[propName] = newValue;
        });
    }

    @Listen('change')
    radioChange(ev: InputEvent) {
        ev.stopPropagation();
        const target = ev.target as HTMLPdRadioElement;
        this.pdChange.emit(target.value);
    }

    componentDidLoad() {
        this.radios = this.element.querySelectorAll('pd-radio');
        this.radios.forEach((radio: HTMLPdRadioElement) => {
            radio.name = this.name;

            if (this.value && radio.value === this.value) {
                radio.checked = true;
                this.pdChange.emit(radio.value);
            } else {
                radio.checked = false;
            }
        });
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
