import { Component, Host, h, Prop } from '@stencil/core';
import { PdColumn } from '../../interface';

@Component({
    tag: 'pd-table',
    styleUrl: 'table.scss',
    shadow: true,
})
export class Table {
    @Prop() headerHeight: string = '48';

    @Prop() rowHeight: string = '48';

    @Prop() minWidth: string = '300';

    @Prop() headerStyle: 'light' | 'dark' | 'gray' = 'dark';

    @Prop() columns: PdColumn[] = [];

    @Prop() rows: any = [];

    private nextColumnSortDir = {};

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

    private calcFixedMinWidth(columns: PdColumn[]) {
        const fixedCols = columns.filter(c => c.fixed);
        const minWidth = fixedCols.map(c => c.width || c.minWidth || 0).reduce((a, b) => a + b, 0);
        return minWidth === 0 ? '0' : `${minWidth}px`;
    }

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

    private getTextAlign = (headerCol: PdColumn) =>
        headerCol.textAlign === 'left' ? 'flex-start' : headerCol.textAlign === 'right' ? 'flex-end' : 'center';

    private sort = (headerCol: PdColumn) => {
        const { columnName, sortable } = headerCol;
        if (!sortable) return;

        const order = this.nextColumnSortDir[columnName] || 'asc';
        this.nextColumnSortDir[columnName] = order === 'asc' ? 'desc' : 'asc';

        this.rows = [
            ...this.rows.sort((a, b) => {
                if (order === 'asc')
                    return a[columnName] === b[columnName] ? 0 : a[columnName] < b[columnName] ? -1 : 1;
                else if (order === 'desc')
                    return a[columnName] === b[columnName] ? 0 : a[columnName] > b[columnName] ? -1 : 1;
            }),
        ];
    };

    render() {
        // console.log("Table -> render -> this.rows", JSON.stringify(this.rows))

        // console.log("Table -> render -> this.columns", JSON.stringify(this.columns))
        // console.log("Table -> render -> typeof this.columns", typeof this.columns)
        
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

        // console.log("Table -> renderRows -> this.rows", this.rows)

        // console.log("Table -> renderRows -> typeof this.rows", typeof this.rows)


        return this.rows.map(row => (
            <div class="pd-table-row" role="row" style={rowStyle}>
                {this.columns.filter(c => (c.fixed || false) === fixed).map(col => this.renderColumn(row, col))}
            </div>
        ));
        
    }

    private renderColumn(row, col) {
        const cellStyle = {
            flex: col.width === 0 ? `1 1 ${col.minWidth || 0}px` : `0 0 ${col.width}px`,
            minWidth: `${col.minWidth || col.width || 0}px`,
            justifyContent: this.getTextAlign(col),
        };

        let value = row[col.columnName];
        if(value && typeof value.getMonth === 'function') {
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(value)
            const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(value)
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(value)
            value = `${da}.${mo}.${ye}`
        }

        return (
            <div
                class={`pd-table-cell ${col.bold ? 'pd-table-cell-bold' : ''}`}
                role="cell"
                style={cellStyle}
                title={value}
            >
                <span>{value}</span>
            </div>
        );
    }
}
