import { Component, Host, h, Event, EventEmitter, Watch, Method, Prop, Listen, Element } from '@stencil/core';
import { InputChangeEventDetail } from '../../interface';

@Component({
    tag: 'pd-search',
    styleUrl: 'search.scss',
    shadow: true,
})
export class Search {
    private nativeInput?: HTMLInputElement;
    private inputId = `pd-input-${inputIds++}`;
    @Element() element!: HTMLElement;
    @Prop() open: boolean = false; // temp prop
    @Prop() searchStrings: string[] = [
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
        if (this.value) this.searchStrings = [...this.searchStrings, `${this.value}`]; // TODO: remove
    }

    @Watch('searchStrings')
    protected searchStringsChanged() {
        this.open = true;
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'ArrowDown') {
            if (this.open) {
                console.log('arrow');
            }
        }
    }

    @Listen('click', { target: 'body' })
    handleClick(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.open = false;
        }
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

    private selectItem = (ev: Event) => {
        const selectedItem = ev.target && (ev.target as HTMLElement).closest('pd-dropdown-item');
        this.value = selectedItem.value;
        this.open = false;
    };

    private reset() {
        this.value = '';
        this.open = false;
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
                    <div class="clear" onClick={() => this.reset()}>
                        <div class="clear-icon"></div>
                    </div>
                    <button class="search" type="submit" tabIndex={-1}></button>
                </label>
                {this.renderDropdownItems()}
            </Host>
        );
    }

    private renderDropdownItems() {
        if (!this.open) return;
        return (
            <div class="dropdown" onClick={this.selectItem}>
                {this.searchStrings.map(searchString => (
                    <pd-dropdown-item value={searchString}></pd-dropdown-item>
                ))}
            </div>
        );
    }
}

let inputIds = 0;
