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

    render() {
        const headerStyle = {
            height: `${this.headerHeight}px`,
        };

        return (
            <Host>
                <div class="pd-table" role="grid" style={{ minWidth: `${this.minWidth}px` }}>
                    <div class={`pd-table-header-row ${this.headerStyle}`} role="row" style={headerStyle}>
                        {this.renderHeader()}
                    </div>
                    <div class="pd-table-body">{this.renderRows()}</div>
                </div>
            </Host>
        );
    }

    private renderHeader() {
        console.log(this.columns, this.rows);
        return this.columns.map(headerCol => {
            const flex = headerCol.width === 0 ? '1 1 auto' : `0 1 ${headerCol.width}px`;
            return (
                <div class="pd-table-cell pd-table-cell-bold" role="cell" style={{ flex }}>
                    {headerCol.label}
                </div>
            );
        });
    }

    private renderRows() {
        const rowStyle = {
            height: `${this.rowHeight}px`,
        };

        return this.rows.map(row => (
            <div class="pd-table-row" role="row" style={rowStyle}>
                {this.columns.map(col => this.renderColumn(row, col))}
            </div>
        ));
    }

    private renderColumn(row, col) {
        const flex = col.width === 0 ? '1 1 auto' : `0 1 ${col.width}px`;

        return (
            <div class={`pd-table-cell ${col.bold ? 'pd-table-cell-bold' : ''}`} role="cell" style={{ flex }}>
                {row[col.columnName]}
            </div>
        );
    }
}
