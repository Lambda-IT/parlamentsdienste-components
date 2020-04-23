import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
    tag: 'pd-radio',
    styleUrl: 'pd-radio.scss',
    shadow: false,
})
export class Radio {
    private inputId = `pd-radio-${radioButtonIds++}`;

    @Element() element!: HTMLElement;

    @Prop() checked: boolean = false;

    @Prop() value?: any | null;

    @Prop() label?: string | null = null;

    @Prop() name: string = '';

    /**
     * Sets radio to disabled state
     */
    @Prop() disabled: boolean = false;

    render() {
        const { inputId, name, value, label, checked } = this;
        const labelId = inputId + '-lbl';

        return (
            <Host
                role="radio"
                aria-labeledby={labelId}
                aria-checked={this.checked ? 'true' : 'false'}
                aria-disabled={this.disabled ? 'true' : 'false'}
            >
                <label class="pd-radio-label">
                    <input type="radio" checked={checked} name={name} value={value} disabled={this.disabled} />
                    <div class="pd-radio-inner"></div>
                    <div class="pd-radio-text">{label}</div>
                </label>
            </Host>
        );
    }
}

let radioButtonIds = 0;
