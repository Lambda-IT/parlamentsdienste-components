import { Component, Event, EventEmitter, h, Listen, Prop, State, Watch } from '@stencil/core';
import { ChipType } from '../../interface';

@Component({
    tag: 'pd-chip',
    styleUrl: 'pd-chip.scss',
    shadow: true,
})
export class Chip {
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
    @Prop() checked: boolean = false;

    /**
     * Sets chip type |text|toggle|filter|
     */
    @Prop() type: ChipType = 'text';

    /**
     * Event for clicking the cross to remove a chip
     */
    @Event() removeChip!: EventEmitter;

    /**
     * Event for check chip
     */
    @Event() checkChip!: EventEmitter;

    /**
     * Handles current checked State
     */
    @State() checkedState: boolean = this.checked;

    @Watch('checked')
    protected checkedStateChanged() {
        this.checkedState = this.checked;
    }

    /**
     * Click event
     */
    @Listen('click', { capture: true })
    handleClick() {
        if (!this.disabled && !this.readonly) {
            this.checkedState = !this.checkedState;
            this.checkChip.emit(this.checkedState);
        }
    }

    private removeClicked(e: Event) {
        e.preventDefault();
        if (!this.disabled && !this.readonly) this.removeChip.emit(this);
    }

    public render() {
        const { type, disabled } = this;
        const role = 'button';
        const iconSize = 1;

        return (
            <button
                disabled={disabled}
                role={role}
                class={{
                    'pd-chip': true,
                    'pd-chip-checked': this.checkedState || type === 'toggle' ? true : false,
                    'pd-chip-readonly': this.readonly,
                    [`pd-chip-${type}`]: true,
                }}
            >
                {type === 'filter' && this.checkedState && (
                    <div class="pd-chip-icon pd-chip-icon-left">
                        <pd-icon size={iconSize} name="confirm_bold"></pd-icon>
                    </div>
                )}
                <slot></slot>
                {type === 'toggle' && (
                    <div class="pd-chip-icon pd-chip-icon-right" onClick={(e) => this.removeClicked(e)}>
                        <pd-icon size={iconSize} name="close_bold"></pd-icon>
                    </div>
                )}
            </button>
        );
    }
}
