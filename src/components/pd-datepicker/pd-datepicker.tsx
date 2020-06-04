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

    private flatpickr: Instance;

    /**
     * Sets the current selected date(s), which can be a date string (using current dateFormat), a Date, or anArray of the Dates.
     */
    @Prop() date: DateOption | DateOption[];

    /**
     * Set the configuration for the datepicker (only applied at instantiation)
     */
    @Prop() config: Partial<Options>;

    private defaultConfig: Partial<BaseOptions> = {
        wrap: true,
        time_24hr: true,
        onChange: (selectedDates, dateStr) => this.pdOnChange.emit({ selectedDates, dateStr }),
        onOpen: (selectedDates, dateStr) => this.pdOnOpen.emit({ selectedDates, dateStr }),
        onClose: (selectedDates, dateStr) => this.pdOnClose.emit({ selectedDates, dateStr }),
        onMonthChange: (selectedDates, dateStr) => this.pdOnMonthChange.emit({ selectedDates, dateStr }),
        onYearChange: (selectedDates, dateStr) => this.pdOnYearChange.emit({ selectedDates, dateStr }),
        onReady: (selectedDates, dateStr) => this.pdOnReady.emit({ selectedDates, dateStr }),
        onValueUpdate: (selectedDates, dateStr) => this.pdOnValueUpdate.emit({ selectedDates, dateStr }),
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
     * Sets the current selected date(s) todate, which can be a date string, a Date, or anArray of the Dates.
     * Optionally, pass true as the second argument to force any onChange events to fire.
     * And if you’re passing a date string with a format other than your dateFormat, provide a dateStrFormat e.g. "m/d/Y"
     */
    @Method() async setDate(date: DateOption | DateOption[], triggerChange?: boolean, format?: string) {
        this.flatpickr.setDate(date, triggerChange, format);
    }

    @Event({ eventName: 'pd-on-change' }) pdOnChange: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-on-open' }) pdOnOpen: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-on-close' }) pdOnClose: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-on-month-change' }) pdOnMonthChange: EventEmitter<{
        selectedDates: Date[];
        dateStr: string;
    }>;
    @Event({ eventName: 'pd-on-year-change' }) pdOnYearChange: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-on-ready' }) pdOnReady: EventEmitter<{ selectedDates: Date[]; dateStr: string }>;
    @Event({ eventName: 'pd-on-value-update' }) pdOnValueUpdate: EventEmitter<{
        selectedDates: Date[];
        dateStr: string;
    }>;

    public componentDidLoad() {
        const element = this.element.shadowRoot.querySelector('.wrapper');
        this.flatpickr = flatpickr(element, Object.assign(this.defaultConfig, this.config));

        if (this.date) this.setDate(this.date);
    }

    public render() {
        return (
            <Host>
                <div class="wrapper">
                    <pd-input data-input />
                </div>
            </Host>
        );
    }
}
