import { Component, Host, h, Element, Event, EventEmitter, Prop, Method, Watch } from '@stencil/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { Options, DateOption, BaseOptions } from 'flatpickr/dist/types/options';

@Component({
    tag: 'pd-datepicker',
    styleUrl: 'pd-datepicker.scss',
    shadow: true,
})
export class Datepicker {
    @Element() element: HTMLElement;
    private contentWrapperElement: HTMLElement;

    private flatpickr: Instance;

    /**
     * Sets the current selected date(s), which can be a date string (using current dateFormat), a Date, or anArray of the Dates.
     */
    @Prop() date: DateOption | DateOption[];

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

    private defaultConfig: Partial<BaseOptions> = {
        wrap: true,
        time_24hr: true,
        onOpen: (selectedDates, dateStr) => this.pdOpen.emit({ selectedDates, dateStr }),
        onClose: (selectedDates, dateStr) => this.pdClose.emit({ selectedDates, dateStr }),
        onMonthChange: (selectedDates, dateStr) => this.pdMonthChange.emit({ selectedDates, dateStr }),
        onYearChange: (selectedDates, dateStr) => this.pdYearChange.emit({ selectedDates, dateStr }),
        onReady: (selectedDates, dateStr) => this.pdReady.emit({ selectedDates, dateStr }),
        onValueUpdate: (selectedDates, dateStr) => this.pdValueUpdate.emit({ selectedDates, dateStr }),
    };

    @Watch('date')
    protected handleDateChange(date: DateOption | DateOption[]) {
        this.setDate(date);
    }

    /**
     * Sets a config option to value, redrawing the calendar and updating the current view, if necessary.
     */
    @Method() async set(option: keyof Options | { [k in keyof Options]?: Options[k] }, value?: any) {
        this.flatpickr.set(option, value);
    }

    /**
     * Resets the selected dates (if any) and clears the input.
     */
    @Method() async clear() {
        this.flatpickr.clear();
    }

    /**
     * Closes the calendar.
     */
    @Method() async close() {
        this.flatpickr.close();
    }

    /**
     * Shows/opens the calendar.
     */
    @Method() async open() {
        this.flatpickr.open();
    }

    /**
     * Shows/opens the calendar if its closed, hides/closes it otherwise.
     */
    @Method() async toggle() {
        this.flatpickr.toggle();
    }

    /**
     * Sets the current selected date(s) to date, which can be a date string, a Date, or anArray of the Dates.
     * Optionally, pass true as the second argument to force any onChange events to fire.
     * And if you’re passing a date string with a format other than your dateFormat, provide a dateStrFormat e.g. "m/d/Y"
     */
    @Method() async setDate(date: DateOption | DateOption[], triggerChange?: boolean, format?: string) {
        this.flatpickr.setDate(date, triggerChange, format);
    }

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

    public componentDidLoad() {
        this.flatpickr = flatpickr(this.contentWrapperElement, Object.assign(this.defaultConfig, this.config));

        if (this.date) this.setDate(this.date);
    }

    public render() {
        return (
            <Host>
                <label
                    class={{
                        'pd-datepicker-label': true,
                        'pd-datepicker-disabled': this.disabled,
                        'pd-datepicker-readonly': this.readonly,
                    }}
                >
                    {this.renderLabel()}
                    <div ref={(el) => (this.contentWrapperElement = el)} class="wrapper">
                        <pd-input
                            class="pd-datepicker-input"
                            disabled={this.disabled}
                            readonly={this.readonly}
                            required={this.required}
                            tabindex={this.readonly ? '-1' : null} // this is not an optimal solution as it removes ability to copy&paste with focus
                            data-input
                        />
                        {this.renderIcon()}
                    </div>
                </label>
            </Host>
        );
    }

    private renderLabel() {
        if (!this.label) return;

        return <div class="pd-combobox-label-text">{this.label}</div>;
    }

    private renderIcon() {
        if (!this.icon) return;
        return <pd-icon class="pd-datepicker-icon" name="calendar" data-toggle size={2.4}></pd-icon>;
    }
}
