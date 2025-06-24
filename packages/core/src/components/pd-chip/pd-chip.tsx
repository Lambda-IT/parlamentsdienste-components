import { Component, ComponentInterface, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';
import { ChipType } from '../../types';

/**
 * @slot - Chip content
 */
@Component({
    tag: 'pd-chip',
    styleUrl: 'pd-chip.scss',
    shadow: true,
})
export class Chip implements ComponentInterface {
    /**
     * Sets chip to disabled state
     */
    @Prop() disabled: boolean = false;

    /**
     * Sets chip to readonly state
     */
    @Prop() readonly: boolean = false;

    /**
     * Sets chip to checked state
     */
    @Prop({ mutable: true }) checked: boolean = false;

    /**
     * Sets chip type |text|toggle|filter|
     */
    @Prop() type: ChipType = 'text';

    /**
     * Event for clicking the cross to remove a chip
     */
    @Event({ eventName: 'pd-remove-chip' }) removeChip!: EventEmitter;

    /**
     * Event for check chip
     */
    @Event({ eventName: 'pd-check-chip' }) checkChip!: EventEmitter;

    /**
     * Click event
     */
    @Listen('click', { capture: true })
    handleClick() {
        if (!this.disabled && !this.readonly) {
            this.checked = !this.checked;
            this.checkChip.emit(this.checked);
        }
    }

    private removeClicked(e: Event) {
        e.preventDefault();
        if (!this.disabled && !this.readonly) this.removeChip.emit(this);
    }

    public render() {
        const { type, disabled } = this;
        const role = 'button';
        const iconSize = 1.25;

        return (
            <button
                disabled={disabled}
                role={role}
                class={{
                    'pd-chip': true,
                    'pd-chip-checked': this.checked || type === 'toggle' ? true : false,
                    'pd-chip-disabled': this.disabled,
                    'pd-chip-readonly': this.readonly,
                    [`pd-chip-${type}`]: true,
                }}
            >
                {type === 'filter' && this.checked && (
                    <div class="pd-chip-icon pd-chip-icon-left">
                        <pd-icon size={iconSize} name="confirm_bold"></pd-icon>
                    </div>
                )}
                <slot></slot>
                {type === 'toggle' && !this.readonly && (
                    <button
                        data-test="pd-chip-remove"
                        tabindex={this.disabled || this.readonly ? '-1' : null}
                        class="pd-chip-remove pd-chip-icon pd-chip-icon-right"
                        onClick={e => this.removeClicked(e)}
                    >
                        <pd-icon size={iconSize} name="close_bold"></pd-icon>
                    </button>
                )}
            </button>
        );
    }
}
