import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'pd-checkbox',
    styleUrl: 'pd-checkbox.scss',
    shadow: true,
})
export class Checkbox implements ComponentInterface {
    /**
     * Checkbox description text
     */
    @Prop() text: string = '';

    /**
     * Sets checkbox to disabled state
     */
    @Prop() disabled: boolean = false;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    @Prop() required = false;

    /**
     * Sets check state of the checkbox true/false
     */
    @Prop({ mutable: true }) checked: boolean = false;

    /**
     * value of checkbox
     */
    @Prop({ mutable: true }) value: boolean = false;

    /**
     * indeterminate state
     */
    @Prop() isIndeterminate: boolean = false;

    /**
     * checkbox name
     */
    @Prop() name: string;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    /**
     * Default vertical adjustment for inline forms
     */
    @Prop() verticalAdjust: boolean = false;

    @Event({ eventName: 'pd-checked' }) pdChecked: EventEmitter<boolean>;

    private onClick = () => {
        this.checked = !this.checked;
        this.value = this.checked;
        this.pdChecked.emit(this.value);
    };

    public render() {
        return (
            <Host
                role="checkbox"
                aria-checked={this.checked ? 'true' : 'false'}
                aria-disabled={this.disabled ? 'true' : 'false'}
            >
                <label
                    class={{
                        'pd-checkbox-label': true,
                        'pd-checkbox-readonly': this.readonly,
                        'pd-checkbox-error': this.error,
                    }}
                    style={this.verticalAdjust ? { '--pd-checkbox-vertical-adjust': '2.3rem' } : {}}
                    data-test="pd-checkbox-label"
                >
                    <input
                        class="pd-checkbox-input"
                        type="Checkbox"
                        checked={this.checked}
                        disabled={this.disabled || this.readonly}
                        required={this.required}
                        value={`${this.value}`}
                        name={this.name}
                        onClick={this.onClick}
                    />
                    <div
                        class={{
                            'pd-checkbox-inner': true,
                            'pd-checkbox-checked': this.checked || this.isIndeterminate,
                        }}
                    >
                        <div class={{ 'pd-checkbox-checkmark': this.checked && !this.isIndeterminate }}></div>
                        <div class={{ 'pd-checkbox-indeterminate': this.isIndeterminate }}></div>
                    </div>
                    <div class="pd-checkbox-text" data-test="pd-checkbox-text">
                        {this.text}
                    </div>
                </label>
            </Host>
        );
    }
}
