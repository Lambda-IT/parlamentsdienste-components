import { Component, Host, h, Prop } from '@stencil/core';
import { PdColumn } from '../../interface';

@Component({
    tag: 'pd-table',
    styleUrl: 'table.scss',
    shadow: true,
})
export class Table {
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

    private nextColumnSortDir = {};

    // claculate flex for left side (fixed) of table
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
    // TODO: merge with prev function
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

    private sort = (headerCol: PdColumn) => {
        const { columnName, sortable } = headerCol;
        if (!sortable) return;

        const dir = this.nextColumnSortDir[columnName] || 'asc';
        this.nextColumnSortDir[columnName] = dir === 'asc' ? 'desc' : 'asc';

        // TODO: use copy of rows to sort on
        this.rows = [...this.rows].sort((a, b) =>
            headerCol.sortFunc
                ? headerCol.sortFunc(a[columnName], b[columnName], dir)
                : this.defaultSortFunc(a[columnName], b[columnName], dir),
        );
    };

    render() {
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
                    justifyContent: this.getTextAlign(headerCol),
                };
                const nextSortDir = this.nextColumnSortDir[headerCol.columnName];
                return (
                    <div
                        class={`pd-table-header-cell pd-table-cell-bold ${
                            headerCol.sortable ? 'pd-table-sortable' : ''
                        } ${nextSortDir ? `pd-table-sort-${nextSortDir === 'asc' ? 'desc' : 'asc'}` : ''} ${
                            this.headerStyle
                        }`}
                        role="cell"
                        style={headerCellStyle}
                        title={headerCol.label}
                        onClick={() => this.sort(headerCol)}
                    >
                        <span>{headerCol.label}</span>
                    </div>
                );
            });
    }

    private renderRows(fixed: boolean = false) {
        const rowStyle = {
            height: `${this.rowHeight}px`,
        };

        return this.rows.map(row => (
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

    renderValue(col: PdColumn, value) {
        return <span class="pd-table-cell-value" innerHTML={col.displayFunc ? col.displayFunc(value) : value}></span>;
    }
}
