import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'pd-checkbox',
    styleUrl: 'pd-checkbox.scss',
    shadow: true,
})
export class Checkbox {
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
    @Prop() checked: boolean = false;

    /**
     * value of checkbox
     */
    @Prop() value: boolean = false;

    /**
     * checkbox name
     */
    @Prop() name: string;

    @Prop() error: boolean = false;

    @Event({ eventName: 'pd-checked' }) pdChecked: EventEmitter<any>;

    private onClick = (ev: Event) => {
        this.checked = !this.checked;
        this.value = this.checked;
        this.pdChecked.emit(ev);
    };

    public render() {
        return (
            <Host
                role="checkbox"
                aria-checked={this.checked ? 'true' : 'false'}
                aria-disabled={this.disabled ? 'true' : 'false'}
                class={this.error ? 'pd-checkbox-error' : ''}
            >
                <label class={{ 'pd-checkbox-label': true, 'pd-checkbox-readonly': this.readonly }}>
                    <input
                        class="pd-checkbox-input"
                        type="Checkbox"
                        checked={this.checked}
                        disabled={this.disabled}
                        readOnly={this.readonly}
                        required={this.required}
                        value={`${this.value}`}
                        name={this.name}
                        onClick={this.onClick}
                    ></input>
                    <div class="pd-checkbox-inner">
                        <div class="pd-checkbox-checkmark"></div>
                    </div>
                    <div class="pd-checkbox-text">{this.text}</div>
                </label>
            </Host>
        );
    }
}
