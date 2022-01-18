import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop } from '@stencil/core';
import { closestParentElement } from '../../utils/helpers';

@Component({
    tag: 'pd-table-filter',
    styleUrl: 'pd-table-filter.scss',
    shadow: true,
})
export class PdTableFilter {
    @Element() element;
    private inputRef: HTMLInputElement;

    /**
     * filter value
     */
    @Prop() value = '';

    /**
     * Emitted when filter changes.
     */
    @Event({ eventName: 'pd-search' }) pdSearch!: EventEmitter<void>;

    /**
     * Emitted when filter is confirmed.
     */
    @Event({ eventName: 'pd-confirm' }) pdConfirm!: EventEmitter<string>;

    /**
     * Emitted when filter is confirmed.
     */
    @Event({ eventName: 'pd-close' }) pdClose!: EventEmitter<void>;

    @Method()
    async reset() {
        this.value = '';
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
    }

    @Method()
    async focusInput() {
        this.inputRef.focus();
    }

    private onSearch = () => {
        this.pdSearch.emit();
    };

    private onClear = () => {
        this.value = '';
        this.inputRef.focus();
        this.value = this.value;
    };

    private onConfirm = () => {
        this.pdConfirm.emit(this.value);
    };

    private handleFilterChange(ev) {
        this.value = ev.target.value;
    }

    private onSubmit(ev: KeyboardEvent) {
        if (ev.key !== 'Enter') return;

        this.pdConfirm.emit(this.value);
    }

    @Listen('click', { target: 'body' })
    protected handleClick(ev: MouseEvent) {
        // the filter is inside the shadowdom of the table, we need to find the clicked element inside of the shadow dom
        // ev.target doesn't work because of that
        if (closestParentElement('pd-table-filter', ev.composedPath()) !== this.element) this.pdClose.emit();
    }

    public render() {
        return (
            <Host>
                <div class="pd-table-filter-wrapper">
                    <div class="pd-table-search-input-wrapper">
                        <input
                            ref={(el) => (this.inputRef = el as HTMLInputElement)}
                            class="pd-table-search-input"
                            onInput={(ev) => this.handleFilterChange(ev)}
                            placeholder="Stichwort, Name …"
                            value={this.value}
                            onKeyDown={(ev) => this.onSubmit(ev)}
                            data-test="pd-table-filter-input"
                        />
                        <button class="pd-table-search-button" onClick={this.onSearch} tabindex="-1">
                            <pd-icon class="pd-table-search-button-icon" name="search" size={2.375}></pd-icon>
                        </button>
                    </div>
                    <button class="pd-table-filter-clear" onClick={this.onClear} data-test="pd-table-filter-clear">
                        <pd-icon class="pd-table-filter-close" size={2.375} name="close"></pd-icon>
                    </button>
                </div>
                <button class="pd-table-filter-confirm" onClick={this.onConfirm} data-test="pd-table-filter-confirm">
                    <pd-icon name="confirm" size={2.375}></pd-icon>
                </button>
            </Host>
        );
    }
}
