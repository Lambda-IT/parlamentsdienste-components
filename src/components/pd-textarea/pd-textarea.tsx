import { Component, ComponentDidLoad, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop, readTask, Watch } from '@stencil/core';

@Component({
    tag: 'pd-textarea',
    styleUrl: 'pd-textarea.scss',
    shadow: true,
})
export class Textarea implements ComponentInterface, ComponentDidLoad {
    private nativeInput?: HTMLTextAreaElement;

    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     */
    @Prop() autocapitalize = 'none';

    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */
    @Prop() autofocus = false;

    /**
     * If `true`, the user cannot interact with the textarea.
     */
    @Prop() disabled = false;

    /**
     * If `true`, the textarea is replaced with a simple text
     */
    @Prop() viewOnly = false;

    /**
     * A hint to the browser for which keyboard to display.
     * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
     * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
     */
    @Prop() inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

    /**
     * A hint to the browser for which enter key to display.
     * Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,
     * `"previous"`, `"search"`, and `"send"`.
     */
    @Prop() enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
     */
    @Prop() maxlength?: number;

    /**
     * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
     */
    @Prop() minlength?: number;

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
     * If `true`, the element will have its spelling and grammar checked.
     */
    @Prop() spellcheck = false;

    /**
     * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
     */
    @Prop() cols?: number;

    /**
     * The number of visible text lines for the control.
     */
    @Prop() rows?: number = 1;

    /**
     * Indicates how the control wraps text.
     */
    @Prop() wrap?: 'hard' | 'soft' | 'off';

    /**
     * Label text
     */
    @Prop() label?: string;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    /**
     * If `true`, the element height will increase based on the value.
     */
    @Prop() autoGrow = false;

    /**
     * The value of the textarea.
     */
    @Prop({ mutable: true }) value?: string = '';

    /**
     * Update the native input element when the value changes
     */
    @Watch('value')
    valueChanged() {
        const nativeInput = this.nativeInput;
        const value = this.getValue();
        if (nativeInput && nativeInput.value !== value) {
            nativeInput.value = value;
        }
        this.runAutoGrow();
        this.pdChange.emit({ value });
    }

    /**
     * Emitted when the input value has changed.
     */
    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<any>;

    /**
     * Emitted when a keyboard input occurred.
     */
    @Event({ eventName: 'pd-input' }) pdInput!: EventEmitter<KeyboardEvent>;

    /**
     * Emitted when the input loses focus.
     */
    @Event({ eventName: 'pd-blur' }) pdBlur!: EventEmitter<FocusEvent>;

    /**
     * Emitted when the input has focus.
     */
    @Event({ eventName: 'pd-focus' }) pdFocus!: EventEmitter<FocusEvent>;

    /**
     * Sets focus on the native `textarea` in `pd-textarea`. Use this method instead of the global
     * `textarea.focus()`.
     */
    @Method()
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }

    public componentDidLoad() {
        requestAnimationFrame(() => this.runAutoGrow());
    }

    private runAutoGrow() {
        const nativeInput = this.nativeInput;
        if (nativeInput && this.autoGrow) {
            readTask(() => {
                const borderWidth = parseFloat(window.getComputedStyle(nativeInput, null).getPropertyValue('border-width'));
                nativeInput.style.height = 'auto';
                nativeInput.style.height = nativeInput.scrollHeight + 2 * borderWidth + 'px';
            });
        }
    }

    private getValue(): string {
        return this.value || '';
    }

    private onInput = (ev: Event) => {
        if (this.nativeInput) {
            this.value = this.nativeInput.value;
        }
        this.pdInput.emit(ev as KeyboardEvent);
    };

    private onFocus = (ev: FocusEvent) => {
        this.pdFocus.emit(ev);
    };

    private onBlur = (ev: FocusEvent) => {
        if (!this.disabled || !this.readonly) this.pdBlur.emit(ev);
    };

    public render() {
        const value = this.getValue();

        return (
            <Host>
                <label class="pd-textarea-label">
                    {this.label ? (
                        <div
                            class={{
                                'pd-textarea-label-text': true,
                                'pd-textarea-label-viewonly': this.viewOnly,
                            }}
                            data-test="pd-textarea-label"
                        >
                            {this.label}
                        </div>
                    ) : (
                        ''
                    )}
                    {!this.viewOnly ? (
                        <textarea
                            class={{
                                'pd-textarea': true,
                                'pd-textarea-readonly': this.readonly,
                                'pd-textarea-error': this.error,
                                'pd-textarea-autogrow': this.autoGrow,
                            }}
                            ref={textarea => (this.nativeInput = textarea)}
                            autoCapitalize={this.autocapitalize}
                            autoFocus={this.autofocus}
                            enterKeyHint={this.enterkeyhint}
                            inputMode={this.inputmode}
                            disabled={this.disabled}
                            maxLength={this.maxlength}
                            minLength={this.minlength}
                            placeholder={this.placeholder || ''}
                            readOnly={this.readonly}
                            required={this.required}
                            spellcheck={this.spellcheck}
                            cols={this.cols}
                            rows={this.rows}
                            wrap={this.wrap}
                            onInput={this.onInput}
                            onBlur={this.onBlur}
                            onFocus={this.onFocus}
                            data-test="pd-textarea"
                            tabIndex={this.readonly ? -1 : undefined}
                        >
                            {value}
                        </textarea>
                    ) : (
                        <p class="pd-textarea-viewonly">{this.value}</p>
                    )}
                </label>
            </Host>
        );
    }
}
