import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'pd-checkbox',
    styleUrl: 'checkbox.scss',
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
     * Sets check state of the checkbox true/false
     */
    @Prop() checked: boolean = false;

    @Prop() value: boolean = false;

    @Prop() name: string = '';

    @Event({ eventName: 'pd-checked' }) pdChecked: EventEmitter<any>;

    private onClick = (ev: Event) => {
        this.checked = !this.checked;
        this.value = this.checked;
        this.pdChecked.emit(ev);
    };

    render() {
        return (
            <Host>
                <label>
                    <input
                        type="Checkbox"
                        checked={this.checked}
                        disabled={this.disabled}
                        value={`${this.value}`}
                        name={this.name}
                        onClick={this.onClick}
                    ></input>
                    <div class="pd-checkbox-inner"></div>
                    <div class="pd-checkbox-text">{this.text}</div>
                </label>
            </Host>
        );
    }
}
