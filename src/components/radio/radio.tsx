import { Component, Host, h, Prop, Element, State } from '@stencil/core';

@Component({
    tag: 'pd-radio',
    styleUrl: 'radio.scss',
    shadow: false,
})
export class Radio {
    private inputId = `pd-radio-${radioButtonIds++}`;
    private radioGroup: any | null = null;

    @Element() element!: HTMLElement;

    @State() checked: boolean = false;

    @Prop() value?: any | null;

    @Prop() label?: string | null = null;

    @Prop() name: string = '';

    connectedCallback() {
        if (this.value === undefined) {
            this.value = this.inputId;
        }

        // set the radio-group to closest parent and add eventlistener for value change
        const radioGroup = (this.radioGroup = this.element.closest('pd-radio-group'));
        if (radioGroup) {
            this.updateState();
            radioGroup.addEventListener('pdChange', this.updateState);
        }
    }

    disconnectedCallback() {
        // remove value event listener
        const radioGroup = this.radioGroup;
        if (radioGroup) {
            radioGroup.removeEventListener('pdChange', this.updateState);
            this.radioGroup = null;
        }
    }

    private updateState = () => {
        // set radio-group value to current selected radio
        if (this.radioGroup) {
            this.checked = this.radioGroup.value === this.value;
        }
    };

    render() {
        const { inputId, name, value, label, checked } = this;
        const labelId = inputId + '-lbl';

        return (
            <Host role="pd-radio" aria-labeledby={labelId}>
                <label>
                    <input type="radio" checked={checked} name={name} value={value} />
                    <div class="pd-radio-inner"></div>
                    <div class="pd-radio-text">{label}</div>
                </label>
            </Host>
        );
    }
}

let radioButtonIds = 0;
