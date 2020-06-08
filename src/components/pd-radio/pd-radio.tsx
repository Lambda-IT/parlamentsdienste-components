import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
    tag: 'pd-radio',
    styleUrl: 'pd-radio.scss',
    shadow: false,
})
export class Radio {
    @Element() element!: HTMLElement;

    /**
     * Checks radio
     */
    @Prop() checked: boolean = false;

    /**
     * Value of radio
     */
    @Prop() value?: any | null;

    /**
     * Label used by radio
     */
    @Prop() label?: string | null = null;

    /**
     * Name of radio. Used to group radios together
     */
    @Prop() name: string = '';

    /**
     * Sets radio to disabled state
     */
    @Prop() disabled: boolean = false;

    public render() {
        const { name, value, label, checked } = this;

        return (
            <Host
                role="radio"
                aria-checked={this.checked ? 'true' : 'false'}
                aria-disabled={this.disabled ? 'true' : 'false'}
            >
                <label class="pd-radio-label">
                    <input
                        class="pd-radio-input"
                        type="radio"
                        checked={checked}
                        name={name}
                        value={value}
                        disabled={this.disabled}
                    />
                    <div class="pd-radio-inner"></div>
                    <div class="pd-radio-text">{label}</div>
                </label>
            </Host>
        );
    }
}
