import {
    Component,
    ComponentDidLoad,
    ComponentInterface,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { BaseOptions, DateOption, Options } from 'flatpickr/dist/types/options';

@Component({
    tag: 'pd-datepicker',
    styleUrl: 'pd-datepicker.scss',
    shadow: true,
})
export class Datepicker implements ComponentInterface, ComponentDidLoad {
    @Element() element: HTMLElement;

    private contentWrapperElement: HTMLElement;
    private flatpickr: Instance;

    private dateInputField: HTMLInputElement;

    @State() currentValue: string = '';

    /**
     * Sets the current selected date(s), which can be a date string (using current dateFormat), a Date, or anArray of the Dates.
     */
    @Prop({ mutable: true }) date: DateOption | DateOption[];

    /**
     * Set the configuration for the datepicker (only applied at instantiation)
     * Check out https://flatpickr.js.org/options for further documentation about this config
     */
    @Prop() config: Partial<Options>;

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * If `true`, the user cannot modify the value.
     */
    @Prop() readonly = false;

    /**
     * If `true`, the user must fill in a value before submitting a form.
     */
    @Prop() required = false;

    /**
     * If `true`, a calendar icon is shown at the end of the input.
     */
    @Prop() icon = true;

    /**
     * datepicker box label
     */
    @Prop() label?: string;

    /**
     * Shows error state
     */
    @Prop() error: boolean = false;

    /**
     * Instructional text that shows before the input has a value.
     */
    @Prop() placeholder?: string;

    /**
     * Allow manual input
     */
    @Prop() allowInput: boolean = false;

    /**
     * Default vertical adjustment for inline forms
     */
    @Prop() verticalAdjust: boolean = false;

    /**
     * Input tag size (check pd-input 'size' for more info)
     */
    @Prop() size?: number = 1;

    /**
     * Hides the clear icon
     */
    @Prop() hideClearIcon?: boolean = false;

    private defaultConfig: Partial<BaseOptions> = {
        wrap: true,
        time_24hr: true,
        onOpen: (selectedDates, dateStr) => this.pdOpen.emit({ selectedDates, dateStr }),
        onClose: (selectedDates, dateStr) => {
            // When deleting the date manually (allowInput = true) out of the input field and when leaving the fiel afterwards by clicking outside, no change and no valueUpdate event is emitted...
            // Thats why we set a current value and why we emmit it manually here
            if (this.dateInputField.value === '' && this.currentValue != '') {
                this.pdChange.emit({ selectedDates: [], dateStr: '' });
            }
            this.pdClose.emit({ selectedDates, dateStr });
        },
        onMonthChange: (selectedDates, dateStr) => this.pdMonthChange.emit({ selectedDates, dateStr }),
        onYearChange: (selectedDates, dateStr) => this.pdYearChange.emit({ selectedDates, dateStr }),
        onReady: (selectedDates, dateStr) => this.pdReady.emit({ selectedDates, dateStr }),
        onValueUpdate: (selectedDates, dateStr) => {
            this.currentValue = dateStr;
            this.pdValueUpdate.emit({ selectedDates, dateStr });
        },
        onChange: (selectedDates, dateStr) => {
            this.currentValue = dateStr;
            this.pdChange.emit({ selectedDates, dateStr });
            if (this.currentValue === '') this.pdValueUpdate.emit({ selectedDates, dateStr });
        },
        allowInput: this.allowInput,
        disableMobile: true,
    };

    @Event({ eventName: 'pd-change' }) pdChange: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-open' }) pdOpen: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-close' }) pdClose: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-month-change' }) pdMonthChange: EventEmitter<{
        selectedDates: Date[];
        dateStr: string;
    }>;
    @Event({ eventName: 'pd-year-change' }) pdYearChange: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-ready' }) pdReady: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-value-update' }) pdValueUpdate: EventEmitter<{
        selectedDates: Date[];
        dateStr: string;
    }>;

    @Watch('date')
    handleDateChange(date: DateOption | DateOption[]) {
        this.setDate(date);
    }

    /**
     * Sets a config option to value, redrawing the calendar and updating the current view, if necessary.
     * Check out https://flatpickr.js.org/options or https://flatpickr.js.org/instance-methods-properties-elements/#setoption-value for further documentation about this config
     */
    @Method()
    async set(option: any, value?: any) {
        this.flatpickr.set(option, value);
    }

    /**
     * Resets the selected dates (if any) and clears the input.
     */
    @Method()
    async clear() {
        this.flatpickr.clear();
        this.date = null;
    }

    /**
     * Closes the calendar.
     */
    @Method()
    async close() {
        this.flatpickr.close();
    }

    /**
     * Shows/opens the calendar.
     */
    @Method()
    async open() {
        this.flatpickr.open();
    }

    /**
     * Shows/opens the calendar if its closed, hides/closes it otherwise.
     */
    @Method()
    async toggle() {
        this.flatpickr.toggle();
    }

    /**
     * Sets the current selected date(s) to date, which can be a date string, a Date, or anArray of the Dates.
     * Optionally, pass true as the second argument to force any onChange events to fire.
     * And if you’re passing a date string with a format other than your dateFormat, provide a dateStrFormat e.g. "m/d/Y"
     */
    @Method()
    async setDate(date: DateOption | DateOption[], triggerChange?: boolean, format?: string) {
        this.flatpickr.setDate(date, triggerChange, format);
        this.currentValue = this.flatpickr.input.value;
    }

    public componentDidLoad() {
        this.flatpickr = flatpickr(this.contentWrapperElement, Object.assign(this.defaultConfig, this.config));
        if (this.date) this.flatpickr.setDate(this.date, false);
    }

    public componentWillLoad() {
        if (this.date) this.currentValue = this.date.toString();
    }

    public disconnectedCallback() {
        if (this.flatpickr) {
            this.flatpickr.destroy();
        }
    }

    public render() {
        return (
            <Host>
                <label
                    class={{
                        'pd-datepicker-label': true,
                        'pd-datepicker-disabled': this.disabled,
                        'pd-datepicker-readonly': this.readonly,
                        'pd-datepicker-error': this.error,
                        'pd-datepicker-allowinput': this.allowInput,
                    }}
                    style={this.verticalAdjust ? { '--pd-datepicker-vertical-adjust': '1.5625rem' } : {}}
                >
                    {this.renderLabel()}
                    <div ref={el => (this.contentWrapperElement = el)} class="wrapper">
                        <input
                            ref={el => (this.dateInputField = el)}
                            data-test="pd-datepicker-input"
                            class={{
                                'pd-datepicker-input': true,
                                'pd-datepicker-disabled': this.disabled,
                                'pd-datepicker-readonly': this.readonly,
                                'pd-datepicker-error': this.error,
                            }}
                            disabled={this.disabled}
                            readonly={this.readonly}
                            required={this.required}
                            placeholder={this.placeholder}
                            tabindex={this.readonly ? '-1' : null} // this is not an optimal solution as it removes ability to copy&paste with focus
                            size={this.size}
                            data-input
                        />

                        {this.renderClearIcon()}
                        {this.renderIcon()}
                    </div>
                </label>
            </Host>
        );
    }

    private renderLabel() {
        if (!this.label) return;

        return (
            <div class="pd-datepicker-label-text" data-test="pd-datepicker-label">
                {this.label}
            </div>
        );
    }

    private renderIcon() {
        if (!this.icon) return;
        return <pd-icon class="pd-datepicker-icon calendar-icon" name="calendar" data-toggle size={2.4}></pd-icon>;
    }

    private renderClearIcon() {
        if (this.hideClearIcon || this.currentValue === '' || this.readonly || this.disabled) return;
        return (
            <button
                class="pd-datepicker-icon clear-icon"
                onClick={() => this.flatpickr.clear()}
                tabindex="-1"
                data-test="pd-datepicker-reset"
            >
                <pd-icon name="cancel" size={2.4}></pd-icon>
            </button>
        );
    }
}
