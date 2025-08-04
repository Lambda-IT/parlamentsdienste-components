import { Component, ComponentInterface, Event, EventEmitter, Fragment, h, Host, Method, Prop, Watch } from '@stencil/core';
import { InputChangeEventDetail, TextFieldTypes } from '../../types';

@Component({
    tag: 'pd-input',
    styleUrl: 'pd-input.scss',
    shadow: true,
})
export class Input implements ComponentInterface {
    private nativeInput?: HTMLInputElement;

    /**
     * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
     */
    @Prop() accept?: string;

    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     */
    @Prop() autocapitalize = 'off';

    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    @Prop() autocomplete: 'on' | 'off' = 'off';

    /**
     * Whether auto correction should be enabled when the user is entering/editing the text value.
     */
    @Prop() autocorrect: 'on' | 'off' = 'off';

    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    @Prop() autofocus = false;

    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    @Prop() clearInput = false;

    /**
     * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
     */
    @Prop() clearOnEdit?: boolean;

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * If `true`, the input is replaced with a simple text
     */
    @Prop() viewOnly = false;

    /**
     * A hint to the browser for which keyboard to display.
     * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
     * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
     */
    @Prop() inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

    /**
     * The maximum value, which must not be less than its minimum (min attribute) value.
     */
    @Prop() max?: string;

    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
     */
    @Prop() maxlength?: number;

    /**
     * The minimum value, which must not be greater than its maximum (max attribute) value.
     */
    @Prop() min?: string;

    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
     */
    @Prop() minlength?: number;

    /**
     * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
     */
    @Prop() multiple?: boolean;

    /**
     * The name of the control, which is submitted with the form data.
     */
    @Prop() name: string;

    /**
     * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
     */
    @Prop() pattern?: string;

    /**
     * Instructional text that shows before the input has a value.
     */
    @Prop() placeholder?: string;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    @Prop() required = false;

    /**
     * Works with the min and max attributes to limit the increments at which a value can be set.
     * Possible values are: `"any"` or a positive floating point number.
     */
    @Prop() step?: string;

    /**
     * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
     */
    @Prop() size?: number = 1;

    /**
     * The type of control to display. The default type is text.
     */
    @Prop() type: TextFieldTypes = 'text';

    /**
     * The value of the input.
     */
    @Prop({ mutable: true }) value?: string | number = '';

    /**
     * Label text
     */
    @Prop() label?: string;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    /**
     * Default vertical adjustment for inline forms
     */
    @Prop() verticalAdjust: boolean = false;

    /**
     * Shows the character count below the input.
     */
    @Prop() showCharacterCount: boolean = false;

    /**
     * Emitted when a keyboard input occurred.
     */
    @Event({ eventName: 'pd-input' }) pdInput!: EventEmitter<KeyboardEvent>;

    /**
     * Emitted when the value has changed.
     */
    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<InputChangeEventDetail>;

    /**
     * Emitted when the input loses focus.
     */
    @Event({ eventName: 'pd-blur' }) pdBlur!: EventEmitter<void>;

    /**
     * Emitted when the input has focus.
     */
    @Event({ eventName: 'pd-focus' }) pdFocus!: EventEmitter<void>;

    /**
     * Update the native input element when the value changes
     */
    @Watch('value')
    protected valueChanged() {
        this.pdChange.emit({ value: this.value == null ? this.value : this.value.toString() });
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
        console.log('pd-input', this.value);
        this.pdInput.emit(ev as KeyboardEvent);
    };

    private onBlur = () => {
        if (!this.disabled || !this.readonly) this.pdBlur.emit();
    };

    private onFocus = () => {
        this.pdFocus.emit();
    };

    private getValue(): string {
        return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
    }

    public render() {
        const value = this.getValue();

        return (
            <Host>
                <label class="pd-input-label">
                    {this.label ? (
                        <div
                            class={{
                                'pd-input-label-text': true,
                                'pd-input-label-viewonly': this.viewOnly,
                            }}
                            data-test="pd-input-label"
                        >
                            {this.label}
                        </div>
                    ) : (
                        ''
                    )}
                    {!this.viewOnly ? (
                        <Fragment>
                            <input
                                class={{
                                    'pd-input': true,
                                    'pd-input-readonly': this.readonly,
                                    'pd-input-error': this.error,
                                }}
                                ref={input => (this.nativeInput = input)}
                                disabled={this.disabled}
                                accept={this.accept}
                                autoCapitalize={this.autocapitalize}
                                autoComplete={this.autocomplete}
                                autoCorrect={this.autocorrect}
                                autoFocus={this.autofocus}
                                inputMode={this.inputmode}
                                min={this.min}
                                max={this.max}
                                minLength={this.minlength}
                                maxLength={this.maxlength}
                                multiple={this.multiple}
                                name={this.name}
                                pattern={this.pattern}
                                placeholder={this.placeholder || ''}
                                readonly={this.readonly}
                                required={this.required}
                                step={this.step}
                                size={this.size}
                                type={this.type}
                                value={value}
                                onInput={this.onInput}
                                onBlur={this.onBlur}
                                onFocus={this.onFocus}
                                // onKeyUp={e => {
                                //     console.log('pd-input keyup', e.key);
                                // }}
                                style={this.verticalAdjust ? { '--pd-input-vertical-adjust': '1.5625rem' } : {}}
                                data-test="pd-input"
                                tabIndex={this.readonly ? -1 : undefined}
                            />
                            {this.showCharacterCount && (
                                <div class="character-count">
                                    <span class="pd-input-character-count">
                                        {value.length}
                                        {this.maxlength && `/${this.maxlength}`}
                                    </span>
                                </div>
                            )}
                        </Fragment>
                    ) : (
                        <p class="pd-input-viewonly">{this.value}</p>
                    )}
                </label>
            </Host>
        );
    }
}
