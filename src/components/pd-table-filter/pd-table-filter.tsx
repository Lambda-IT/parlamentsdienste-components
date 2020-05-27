import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'pd-table-filter',
    styleUrl: 'pd-table-filter.scss',
    shadow: true,
})
export class PdTableFilter {
    private filterValue = '';

    /**
     * Emitted when filter changes.
     */
    @Event() pdOnSearch!: EventEmitter<void>;

    /**
     * Emitted when the input was cleared.
     */
    @Event() pdOnClear!: EventEmitter<void>;

    /**
     * Emitted when filter is confirmed.
     */
    @Event() pdOnConfirm!: EventEmitter<string>;

    private onSearch = () => {
        this.pdOnSearch.emit();
    };

    private onClear = () => {
        this.pdOnClear.emit();
    };

    private onConfirm = () => {
        this.pdOnConfirm.emit(this.filterValue);
    };

    private handleFilterChange(ev) {
        this.filterValue = ev.target.value;
        console.log(`PdTableFilter -> handleFilterChange -> value`, this.filterValue);
    }

    render() {
        return (
            <Host class="pd-table-filter">
                <div class="pd-table-filter-wrapper">
                    <div class="pd-table-search-input-wrapper">
                        <input
                            class="pd-table-search-input"
                            onInput={ev => this.handleFilterChange(ev)}
                            placeholder="Stichwort, Name …"
                        />
                        <button class="pd-table-search-button" onClick={this.onSearch} tabindex="-1">
                            <pd-icon class="pd-table-search-button-icon" name="search" size={2.4}></pd-icon>
                        </button>
                    </div>
                    <button class="pd-table-filter-clear" onClick={this.onClear}>
                        <pd-icon class="pd-table-filter-close" size={2.5} name="close"></pd-icon>
                    </button>
                </div>
                <button class="pd-table-filter-confirm" onClick={this.onConfirm}>
                    <pd-icon name="confirm" size={2.8}></pd-icon>
                </button>
            </Host>
        );
    }
}
