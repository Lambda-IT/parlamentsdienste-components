import { Component, Host, h, Prop, Element, State, Listen, Watch } from '@stencil/core';
import { PdColumn } from '../../interface';
import { createPopper, Instance } from '@popperjs/core';

@Component({
    tag: 'pd-table',
    styleUrl: 'pd-table.scss',
    shadow: true,
})
export class Table {
    @Element() element;

    /**
     * Height of header cells
     */
    @Prop() headerHeight: string = '48';

    /**
     * Height of rows
     */
    @Prop() rowHeight: string = '48';

    /**
     * The minimum width the table should take
     */
    @Prop() minWidth: string = '300';

    /**
     * The table style
     */
    @Prop() headerStyle: 'light' | 'dark' | 'gray' = 'dark';

    /**
     * A definition for each column of the table
     */
    @Prop() columns: PdColumn[] = [];

    /**
     * The data definition for each row to display
     */
    @Prop() rows: any = [];

    @Watch('rows')
    handleRowsChanged() {
        this.filteredRows = [...this.rows];
    }

    @State() filterOpen = false;
    @State() columnFilters: any = {};
    @State() filteredRows: any = [...this.rows];

    private filterElement: HTMLPdTableFilterElement;
    private currentFilter: string;
    private headerRefs: any = {};
    private nextSortDir = {};
    private sortColumn = '';
    private popper: Instance;

    @Listen('keydown')
    protected handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'Escape') this.filterOpen = false;
    }

    protected componentDidLoad() {
        const table = this.element.shadowRoot.querySelector('.pd-table-header-row') as HTMLElement;
        this.filterElement = this.element.shadowRoot.querySelector('pd-table-filter') as HTMLPdTableFilterElement;
        this.popper = this.createMenuPopper(table, this.filterElement);
    }

    protected componentDidUpdate() {
        if (!this.filterOpen) return;
        this.popper.forceUpdate();
        this.filterElement.focusInput();
    }

    // calculate flex for left side (fixed) of table
    // has a fixed width when no column is auto
    private calcFixedFlex(columns: PdColumn[]) {
        const fixedCols = columns.filter(c => c.fixed);
        const hasAuto = fixedCols.findIndex(c => c.width === 0) !== -1;

        if (hasAuto) {
            return '1 1 auto';
        } else {
            const width = fixedCols.map(c => c.width).reduce((a, b) => a + b, 0);
            return `0 0 ${width}px`;
        }
    }

    // calculate flex for right side (scroll) of table
    // has a fixed width when no column is auto
    private calcScrollFlex(columns: PdColumn[]) {
        const fixedCols = columns.filter(c => !c.fixed);
        const hasAuto = fixedCols.findIndex(c => c.width === 0) !== -1;

        if (hasAuto) {
            return '1 1 auto';
        } else {
            const width = fixedCols.map(c => c.width).reduce((a, b) => a + b, 0);
            return `0 1 ${width}px`;
        }
    }

    // calculte min-width for left side (fixed) of table
    // sum of width/min-width of all fixed columns
    private calcFixedMinWidth(columns: PdColumn[]) {
        const fixedCols = columns.filter(c => c.fixed);
        const minWidth = fixedCols.map(c => c.width || c.minWidth || 0).reduce((a, b) => a + b, 0);
        return minWidth === 0 ? '0' : `${minWidth}px`;
    }

    private getTextAlign = (headerCol: PdColumn) =>
        headerCol.textAlign === 'left' ? 'flex-start' : headerCol.textAlign === 'right' ? 'flex-end' : 'center';

    private defaultSortFunc = (a, b, dir) => {
        if (dir === 'asc') return a === b ? 0 : a < b ? -1 : 1;
        else if (dir === 'desc') return a === b ? 0 : a > b ? -1 : 1;
    };

    /**
     * filter by string.includes()
     */
    private defaultFilterFunc = (value: any, filter: string) => {
        return value.toString().includes(filter);
    };

    private sort = (headerCol: PdColumn) => {
        const { columnName, sortable } = headerCol;
        if (!sortable) return;

        this.sortColumn = columnName;

        const dir = this.nextSortDir[columnName] || 'desc';
        this.nextSortDir[columnName] = dir === 'asc' ? 'desc' : 'asc';

        this.filteredRows = [...this.filteredRows].sort((a, b) =>
            headerCol.sortFunc
                ? headerCol.sortFunc(a[columnName], b[columnName], dir)
                : this.defaultSortFunc(a[columnName], b[columnName], dir),
        );
    };

    /**
     * filter all rows by currently set filters
     */
    private filter() {
        const customFilters = this.getCustomFilters(this.columnFilters);
        // loop all rows
        this.filteredRows = [...this.rows].filter(row => {
            // loop all current filter columns
            return Object.keys(this.columnFilters).every(key => {
                // skip if filter is empty
                if (!this.columnFilters[key]) return true;
                // use custom filter or default
                return customFilters[key]
                    ? customFilters[key](row[key], this.columnFilters[key])
                    : this.defaultFilterFunc(row[key], this.columnFilters[key]);
            });
        });
    }

    /**
     * new filter set
     */
    private filterConfirm(ev: CustomEvent) {
        this.filterOpen = false;
        this.columnFilters[this.currentFilter] = ev.detail;
        this.filter();
    }

    /**
     * returns all custom filter functions for currently used filter column
     */
    private getCustomFilters(columnFilters) {
        const customFilters = {};
        Object.keys(columnFilters).forEach(
            key => (customFilters[key] = this.columns.find(col => col.columnName === key)?.filterFunc),
        );
        return customFilters;
    }

    private openFilter(ev: MouseEvent, columnName: string) {
        ev.stopPropagation();
        this.filterElement.setValue(this.columnFilters[columnName] || '');
        this.filterElement.focusInput();
        this.currentFilter = columnName;
        this.popper.state.elements.reference = this.headerRefs[columnName];
        this.filterOpen = true;
        this.popper.update();
    }

    private clearFilter(ev: MouseEvent, columnName: string) {
        ev.stopPropagation();
        this.columnFilters = { ...this.columnFilters, [columnName]: undefined };
        this.filterOpen = false;
        this.filter();
    }

    // create a popper js element for the menu
    private createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: 'bottom',
        });
    }

    public render() {
        const headerStyle = {
            height: `${this.headerHeight}px`,
        };

        const fixedStyle = {
            flex: this.calcFixedFlex(this.columns),
            minWidth: this.calcFixedMinWidth(this.columns),
        };

        const scrollStyle = {
            flex: this.calcScrollFlex(this.columns),
        };

        return (
            <Host role="table">
                <pd-table-filter
                    class={{ 'pd-table-filter-hidden': !this.filterOpen }}
                    onPdOnConfirm={ev => this.filterConfirm(ev)}
                    onPdOnClose={() => (this.filterOpen = false)}
                ></pd-table-filter>
                <div class="pd-table" role="grid" style={{ minWidth: `${this.minWidth}px` }}>
                    <div class="pd-table-fixed" style={fixedStyle}>
                        <div class={`pd-table-header-row`} role="rowheader" style={headerStyle}>
                            {this.renderHeader(true)}
                        </div>
                        <div class="pd-table-body">{this.renderRows(true)}</div>
                    </div>
                    <div class="pd-table-horizontal-scroll" style={scrollStyle}>
                        <div class={`pd-table-header-row ${this.headerStyle}`} role="rowheader" style={headerStyle}>
                            {this.renderHeader(false)}
                        </div>
                        <div class="pd-table-body">{this.renderRows(false)}</div>
                    </div>
                </div>
            </Host>
        );
    }
    private renderHeader(fixed: boolean = false) {
        return this.columns
            .filter(c => (c.fixed || false) === fixed)
            .map(headerCol => {
                const headerCellStyle = {
                    flex: headerCol.width === 0 ? `1 1 ${headerCol.minWidth || 0}px` : `0 0 ${headerCol.width}px`,
                    minWidth: `${headerCol.minWidth || headerCol.width || 0}px`,
                };
                const columnSortDir = this.nextSortDir[headerCol.columnName];
                return (
                    <div
                        class={{
                            'pd-table-header-cell': true,
                            'pd-table-cell-bold': true,
                            'pd-table-sortable': headerCol.sortable,
                            [`pd-table-sort-${columnSortDir === 'asc' ? 'desc' : 'asc'}`]: columnSortDir,
                            [`pd-table-${this.headerStyle}`]: true,
                        }}
                        ref={el => (this.headerRefs[headerCol.columnName] = el as HTMLElement)}
                        role="cell"
                        style={headerCellStyle}
                        title={headerCol.label}
                        onClick={() => this.sort(headerCol)}
                    >
                        <div class="pd-table-header-cell-text" style={{ justifyContent: this.getTextAlign(headerCol) }}>
                            <span>{headerCol.label}</span>
                        </div>
                        <div class="pd-table-header-cell-actions">
                            {this.renderSort(columnSortDir, headerCol.columnName)}
                            {this.renderFilterIcon(headerCol)}
                        </div>
                    </div>
                );
            });
    }

    private renderRows(fixed: boolean = false) {
        const rowStyle = {
            height: `${this.rowHeight}px`,
        };

        return this.filteredRows.map(row => (
            <div class="pd-table-row" role="row" style={rowStyle}>
                {this.columns.filter(c => (c.fixed || false) === fixed).map(col => this.renderColumn(row, col))}
            </div>
        ));
    }

    private renderColumn(row, col: PdColumn) {
        const cellStyle = {
            flex: col.width === 0 ? `1 1 ${col.minWidth || 0}px` : `0 0 ${col.width}px`,
            minWidth: `${col.minWidth || col.width || 0}px`,
            justifyContent: this.getTextAlign(col),
        };

        let value = row[col.columnName];
        if (value && typeof value.getMonth === 'function') {
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(value);
            const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(value);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(value);
            value = `${da}.${mo}.${ye}`;
        }

        return (
            <div
                class={`pd-table-cell ${col.bold ? 'pd-table-cell-bold' : ''}`}
                role="cell"
                style={cellStyle}
                title={value}
            >
                {this.renderValue(col, value)}
            </div>
        );
    }

    private renderValue(col: PdColumn, value) {
        return <span class="pd-table-cell-value" innerHTML={col.displayFunc ? col.displayFunc(value) : value}></span>;
    }

    private renderSort(nextSort, columnName) {
        if (!nextSort || columnName !== this.sortColumn) return;
        return <pd-icon name="arrow" size={2} rotate={nextSort === 'asc' ? 180 : 0}></pd-icon>;
    }

    private renderFilterIcon(headerCol: PdColumn) {
        if (!headerCol.filter) return;

        if (this.columnFilters[headerCol.columnName])
            return (
                <button class="pd-table-filter-clear" onClick={ev => this.openFilter(ev, headerCol.columnName)}>
                    <pd-icon name="filter" size={2}></pd-icon>
                    <button
                        class="pd-table-filter-clear-button"
                        onClick={ev => this.clearFilter(ev, headerCol.columnName)}
                    >
                        <pd-icon size={1.2} name="close"></pd-icon>
                    </button>
                </button>
            );
        else
            return (
                <pd-icon
                    class="pd-table-filter-icon"
                    onClick={ev => this.openFilter(ev, headerCol.columnName)}
                    name="filter"
                    size={2}
                ></pd-icon>
            );
    }
}
