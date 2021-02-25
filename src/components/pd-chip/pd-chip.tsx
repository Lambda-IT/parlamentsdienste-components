import { Component, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
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
     * Sets chip to checked state
     */
    @Prop() checked: boolean = false;

    /**
     * Sets chip type |text|toggle|filter|
     */
    @Prop() type: ChipType = 'text';

    /**
     *
     */
    @Event() removeChip!: EventEmitter;

    /**
     *
     */
    @Event() checkChip!: EventEmitter;

    /**
     *
     */
    @State() checkedState: boolean = this.checked;

    /**
     *
     */
    @Listen('click', { capture: true })
    handleClick() {
        this.checkedState = !this.checkedState;
        this.checkChip.emit(this.checkedState);
    }

    private removeClicked(e: Event) {
        e.preventDefault();
        this.removeChip.emit(this);
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
