import { Component, Host, h, Event, EventEmitter, Watch, Method, Prop, Listen } from '@stencil/core';
import { InputChangeEventDetail } from '../../interface';

@Component({
    tag: 'pd-search',
    styleUrl: 'search.scss',
    shadow: true,
})
export class Search {
    private nativeInput?: HTMLInputElement;
    private inputId = `pd-input-${inputIds++}`;

    private searchStrings: string[] = [
        'Krankenkasse',
        'Krankenkasse kündingen',
        'Krankentaggeldversicherung',
        'Krankenkassen vergleichen',
    ];

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * The name of the control, which is submitted with the form data.
     */
    @Prop() name: string = this.inputId;

    /**
     * Instructional text that shows before the input has a value.
     */
    @Prop() placeholder?: string | null;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    /**
     * The value of the input.
     */
    @Prop({ mutable: true }) value?: string | number | null = '';

    @Prop() label?: string;

    @Prop() error: boolean = false;

    @Prop() helperText?: string;

    /**
     * Emitted when a keyboard input occurred.
     */
    @Event() pdInput!: EventEmitter<KeyboardEvent>;

    /**
     * Emitted when the value has changed.
     */
    @Event() pdOnChange!: EventEmitter<InputChangeEventDetail>;

    /**
     * Emitted when the input loses focus.
     */
    @Event() pdOnBlur!: EventEmitter<void>;

    /**
     * Emitted when the input has focus.
     */
    @Event() pdOnFocus!: EventEmitter<void>;

    /**
     * Update the native input element when the value changes
     */
    @Watch('value')
    protected valueChanged() {
        this.pdOnChange.emit({ value: this.value == null ? this.value : this.value.toString() });
    }

    /**
     * Sets focus on the specified `pd-input`. Use this method instead of the global
     * `input.focus()`.
     */
    @Method()
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = input.value || '';
        }

        this.pdInput.emit(ev as KeyboardEvent);
    };

    private onBlur = () => {
        this.pdOnBlur.emit();
    };

    private onFocus = () => {
        this.pdOnFocus.emit();
    };

    private onKeydown = () => {};

    private getValue(): string {
        return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
    }

    private renderDropdownItems() {
        return this.searchStrings.map(searchString => <div class="dropdown-item">{searchString}</div>);
    }

    render() {
        const value = this.getValue();
        const labelId = this.inputId + '-lbl';

        return (
            <Host class={this.error ? 'error' : ''}>
                <label class={this.disabled ? 'disabled' : ''}>
                    {this.label ? <div class="label-text">{this.label}</div> : ''}
                    <input
                        ref={input => (this.nativeInput = input)}
                        aria-labelledby={labelId}
                        disabled={this.disabled}
                        placeholder={this.placeholder || ''}
                        value={value}
                        onInput={this.onInput}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        onKeyDown={this.onKeydown}
                    />
                    <div class="clear">
                        <div class="clear-icon"></div>
                    </div>
                    <button class="search" type="submit" tabIndex={-1}></button>
                </label>
                <div class="dropdown">{this.renderDropdownItems()}</div>
            </Host>
        );
    }
}

let inputIds = 0;
