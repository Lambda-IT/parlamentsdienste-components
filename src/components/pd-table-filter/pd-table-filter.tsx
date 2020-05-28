import { Component, Host, h, Event, EventEmitter, Listen, Element, Method, State } from '@stencil/core';
import { closestElement } from '../../utils/helpers';

@Component({
    tag: 'pd-table-filter',
    styleUrl: 'pd-table-filter.scss',
    shadow: true,
})
export class PdTableFilter {
    @Element() element;
    @State() value = '';

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

    /**
     * Emitted when filter is confirmed.
     */
    @Event() pdOnClose!: EventEmitter<void>;

    @Method()
    async reset() {
        this.value = '';
    }

    private onSearch = () => {
        this.pdOnSearch.emit();
    };

    private onClear = () => {
        this.pdOnClear.emit();
    };

    private onConfirm = () => {
        this.pdOnConfirm.emit(this.value);
    };

    private handleFilterChange(ev) {
        this.value = ev.target.value;
    }

    private onSubmit(ev: KeyboardEvent) {
        if (ev.key !== 'Enter') return;

        this.pdOnConfirm.emit(this.value);
    }

    @Listen('click', { target: 'body' })
    protected handleClick(ev: MouseEvent) {
        // the filter is inside the shadowdom of the table, we need to find the clicked element inside of the shadow dom
        // ev.target doesn't work because of that
        if (closestElement('pd-table-filter', ev.composedPath()[0] as HTMLElement) !== this.element) {
            this.pdOnClose.emit();
        }
    }

    render() {
        return (
            <Host>
                <div class="pd-table-filter-wrapper">
                    <div class="pd-table-search-input-wrapper">
                        <input
                            class="pd-table-search-input"
                            onInput={ev => this.handleFilterChange(ev)}
                            placeholder="Stichwort, Name …"
                            value={this.value}
                            onKeyDown={ev => this.onSubmit(ev)}
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
