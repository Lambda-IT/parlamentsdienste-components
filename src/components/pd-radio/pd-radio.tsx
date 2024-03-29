import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'pd-radio',
    styleUrl: 'pd-radio.scss',
    shadow: false,
})
export class Radio implements ComponentInterface {
    @Element() element: HTMLElement;

    /**
     * Checks radio
     */
    @Prop() checked: boolean = false;

    /**
     * Value of radio
     */
    @Prop() value?: any;

    /**
     * Label used by radio
     */
    @Prop() label?: string = null;

    /**
     * Name of radio. Used to group radios together
     */
    @Prop() name: string = '';

    /**
     * Sets radio to disabled state
     */
    @Prop() disabled: boolean = false;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    /**
     * Default vertical adjustment for inline forms
     */
    @Prop() verticalAdjust: boolean = false;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    public render() {
        const { name, value, label, checked } = this;

        return (
            <Host role="radio" aria-checked={this.checked ? 'true' : 'false'} aria-disabled={this.disabled ? 'true' : 'false'}>
                <label
                    class={{
                        'pd-radio-label': true,
                        'pd-radio-readonly': this.readonly,
                        'pd-radio-error': this.error,
                    }}
                    style={this.verticalAdjust ? { '--pd-radio-vertical-adjust': '2.3rem' } : {}}
                    data-test="pd-radio-label"
                >
                    <input class="pd-radio-input" type="radio" checked={checked} name={name} value={value} disabled={this.disabled || this.readonly} />
                    <div class="pd-radio-inner"></div>
                    <div class="pd-radio-text" data-test="pd-radio-text">
                        {label}
                    </div>
                </label>
            </Host>
        );
    }
}
