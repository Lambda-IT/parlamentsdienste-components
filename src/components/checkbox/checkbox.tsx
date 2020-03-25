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

    @Prop() value: string = '';

    @Prop() name: string = '';

    @Event() pdChanged: EventEmitter<any>;

    handleChanged() {
        this.checked = !this.checked;
        this.pdChanged.emit(this.checked);
    }

    render() {
        return (
            <Host>
                <label>
                    <input
                        type="Checkbox"
                        checked={this.checked}
                        disabled={this.disabled}
                        value={this.value}
                        name={this.name}
                        onClick={() => this.handleChanged()}
                    ></input>
                    <div class="checkbox-inner"></div>
                    {this.text}
                </label>
            </Host>
        );
    }
}
