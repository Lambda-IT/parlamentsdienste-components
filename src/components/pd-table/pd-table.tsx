import { createPopper, Instance } from '@popperjs/core';
import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';
import {
    DropdownItem,
    PdButtonCell,
    PdColumn,
    PdPagingLocation,
    PdStatus,
    PdTableIconConfiguration,
    PdTableRow,
    PdTableStyle,
    SelectedEvent,
} from '../../interface';

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
    @Prop() headerStyle: PdTableStyle = 'dark';

    /**
     * A definition for each column of the table
     */
    @Prop() columns: PdColumn[] = [];

    /**
     * The data definition for each row to display
     */
    @Prop() rows: PdTableRow[] = [];

    /**
     * The configuration for the last column, the icon column
     */
    @Prop() iconConfig?: PdTableIconConfiguration;

    /**
     * Show button column and context menu
     */
    @Prop() showActionColumn = false;

    /**
     * Make rows selectable with a checkbox
     */
    @Prop() selectable = false;

    /**
     * Allow to render a status icon per row
     */
    @Prop() showStatus = false;

    /*
     * Show label text for menu
     */
    @Prop() menuLabel: string;

    /**
     Enables paging 
     */
    @Prop() paging: boolean = false;

    /**
     * Available Page sizes for paging
     */
    @Prop() pageSizes: DropdownItem[] = [
        { id: '1', label: '10', value: 10, selected: true },
        { id: '2', label: '25', value: 25 },
        { id: '3', label: '100', value: 100 },
    ];

    /**
     * Location of paging element
     */
    @Prop() pagingLocation: PdPagingLocation = 'right';

    /**
     * Triggers when one or all rows get selected
     */
    @Event({ eventName: 'pd-selected' }) onSelected: EventEmitter<SelectedEvent>;

    /**
     * Triggers an event when the edit icon was clicked
     */
    @Event({ eventName: 'pd-edit' }) onEdit: EventEmitter<any>;

    /**
     * Triggers an event when the view icon was clicked
     */
    @Event({ eventName: 'pd-view' }) onView: EventEmitter<any>;

    /**
     * Triggers an event when the delete icon was clicked
     */
    @Event({ eventName: 'pd-delete' }) onDelete: EventEmitter<any>;

    /**
     * Triggers an event when row was clicked
     */
    @Event({ eventName: 'pd-clicked-row' }) onRowClick: EventEmitter<any>;

    @Method() async unselectAll() {
        this.allSelected = false;
        this.filteredRows = this.filteredRows.map((r) => ({
            ...r,
            pdSelected: false,
        }));
    }

    @Method() async refresh() {
        this.filteredRows = [...this.rows];
        this.update();
        this.initPaging(this.pageSize);
    }

    @Watch('rows')
    handleRowsChanged() {
        this.filteredRows = [...this.rows];
        this.update();
    }

    private filterElement: HTMLPdTableFilterElement;
    private headerRefs: any = {};
    private nextSortDir = {};
    private popper: Instance;
    private btnCellStyle: PdButtonCell = { width: 50, minWidth: 20, align: 'right' };
    private selectableCellWidth: number = 50;
    private defaultPageSize = 10;

    @State() private totalPages = 1;
    @State() private currentFilter: string;
    @State() private sortColumn = '';
    @State() private currentPage = 1;
    @State() private pageSize = this.defaultPageSize;
    @State() private filterOpen = false;
    @State() private columnFilters: any = {};
    @State() private filteredRows: PdTableRow[] = [...this.rows];
    @State() private allSelected: boolean = false;
    @State() private isIndeterminate: boolean = false;

    @Listen('keydown')
    protected handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'Escape') this.filterOpen = false;
    }

    protected componentWillLoad() {
        this.checkIsIndeterminate();
        this.initPaging(+this.pageSizes.find((ps) => ps.selected)?.value || this.defaultPageSize);
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
        const fixedCols = columns.filter((c) => c.fixed);
        const hasAuto = fixedCols.findIndex((c) => c.width === 0) !== -1;

        if (hasAuto) {
            return '1 1 auto';
        } else {
            let width = fixedCols.map((c) => c.width).reduce((a, b) => a + b, 0);
            width += this.selectable ? this.selectableCellWidth : 0;
            return `0 0 ${width}px`;
        }
    }

    // calculate flex for right side (scroll) of table
    // has a fixed width when no column is auto
    private calcScrollFlex(columns: PdColumn[]) {
        const fixedCols = columns.filter((c) => !c.fixed);
        const hasAuto = fixedCols.findIndex((c) => c.width === 0) !== -1;

        if (hasAuto) {
            return '1 1 auto';
        } else {
            const width = fixedCols.map((c) => c.width).reduce((a, b) => a + b, 0);
            return `0 1 ${width}px`;
        }
    }

    // calculte min-width for left side (fixed) of table
    // sum of width/min-width of all fixed columns
    private calcFixedMinWidth(columns: PdColumn[]) {
        const fixedCols = columns.filter((c) => c.fixed);
        let minWidth = fixedCols.map((c) => c.width || c.minWidth || 0).reduce((a, b) => a + b, 0);
        minWidth += this.selectable ? this.selectableCellWidth : 0;
        return minWidth === 0 ? '0' : `${minWidth}px`;
    }

    private getTextAlign = (textAlign: PdColumn['textAlign']) =>
        textAlign === 'left' ? 'flex-start' : textAlign === 'right' ? 'flex-end' : 'center';

    private defaultSortFunc = (a, b, dir: 'asc' | 'desc') => {
        if (dir === 'asc') return a === b ? 0 : a < b ? -1 : 1;
        else if (dir === 'desc') return a === b ? 0 : a > b ? -1 : 1;
    };

    /**
     * filter by string.includes()
     */
    private defaultFilterFunc = (value: any, filter: string) => {
        return value.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
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
        this.filteredRows = [...this.rows].filter((row) => {
            // loop all current filter columns
            return Object.keys(this.columnFilters).every((key) => {
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
            (key) => (customFilters[key] = this.columns.find((col) => col.columnName === key)?.filterFunc),
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
            placement: 'bottom-end',
        });
    }

    private select(isSelected: boolean, row) {
        row.pdSelected = isSelected;
        this.filteredRows = [...this.filteredRows]; // trigger a rerender for the rows
        this.onSelected.emit({
            selected: isSelected,
            selectAll: false,
            row,
            rows: this.filteredRows.filter((r) => r.pdSelected),
        });
        this.checkAllSelected();
        this.checkIsIndeterminate();
    }

    private selectAll() {
        this.allSelected = !this.allSelected || this.isIndeterminate;
        if (this.allSelected) this.isIndeterminate = false;

        this.filteredRows = this.filteredRows.map((r) => ({
            ...r,
            pdSelected: this.allSelected,
        }));
        this.onSelected.emit({
            selected: false,
            selectAll: this.allSelected,
            row: {},
            rows: this.filteredRows.filter((r) => r.pdSelected),
        });
    }

    private rowClicked(row: PdTableRow) {
        this.onRowClick.emit(row);
    }

    private checkIsIndeterminate() {
        const countSelected = this.filteredRows.reduce((acc, r) => (r.pdSelected ? acc + 1 : acc), 0);
        this.isIndeterminate = countSelected > 0 && !this.allSelected;
    }

    private checkAllSelected() {
        this.allSelected = this.filteredRows.every((r) => r.pdSelected); // reset if not all checkboxes are selected
    }

    // paging functionality
    private pageChanged(ev: CustomEvent<number>) {
        this.currentPage = +ev.detail;
    }
    private pageSizeChanged(ev: CustomEvent<DropdownItem>) {
        this.initPaging(+ev.detail.value);
    }

    private initPaging(pageSize: number = this.defaultPageSize) {
        this.currentPage = 1;
        this.pageSize = pageSize;
        this.totalPages = Math.ceil(this.filteredRows.length / this.pageSize);
    }

    private update() {
        this.totalPages = Math.ceil(this.filteredRows.length / this.pageSize);
        this.currentPage = this.currentPage > this.totalPages ? this.totalPages : this.currentPage;
        this.filterOpen = false;
        this.sortColumn = '';
        this.currentFilter = undefined;
        this.checkAllSelected();
        this.checkIsIndeterminate();
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
                    onPd-confirm={(ev) => this.filterConfirm(ev)}
                    onPd-close={() => (this.filterOpen = false)}
                ></pd-table-filter>
                <div class="pd-table" role="grid" style={{ minWidth: `${this.minWidth}px` }}>
                    <div class="pd-table-fixed" style={fixedStyle}>
                        <div class={`pd-table-header-row`} role="rowheader" style={headerStyle}>
                            {this.renderHeader(true)}
                        </div>
                        <div class="pd-table-body">{this.renderRows(true, this.iconConfig)}</div>
                    </div>
                    <div class="pd-table-horizontal-scroll" style={scrollStyle}>
                        <div class={`pd-table-header-row ${this.headerStyle}`} role="rowheader" style={headerStyle}>
                            {this.renderHeader(false)}
                        </div>
                        <div class="pd-table-body">{this.renderRows(false, this.iconConfig)}</div>
                    </div>
                </div>
                {this.renderFooter()}
            </Host>
        );
    }
    private renderHeader(fixed: boolean = false) {
        const columns = this.columns
            .filter((c) => !!c.fixed === fixed)
            .map((headerCol, i) => {
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
                        ref={(el) => (this.headerRefs[headerCol.columnName] = el as HTMLElement)}
                        role="cell"
                        style={this.calculateHeaderCellStyle(headerCol)}
                        title={headerCol.label}
                        onClick={() => this.sort(headerCol)}
                        data-test={`pd-table-header-col-${i}`}
                    >
                        <div
                            class="pd-table-header-cell-text"
                            style={{ justifyContent: this.getTextAlign(headerCol.textAlign) }}
                        >
                            <span>{headerCol.label}</span>
                        </div>
                        <div class="pd-table-header-cell-actions" data-test={`pd-table-header-actions-col-${i}`}>
                            {this.renderSort(columnSortDir, headerCol.columnName)}
                            {this.renderFilterIcon(headerCol)}
                        </div>
                    </div>
                );
            });

        // render menu/button column
        const btnColumnName = 'btnColumn';
        const btnColumn = (
            <div
                class={{
                    'pd-table-header-cell': true,
                    'pd-table-cell-bold': true,
                    [`pd-table-${this.headerStyle}`]: true,
                }}
                ref={(el) => (this.headerRefs[btnColumnName] = el as HTMLElement)}
                role="cell"
                style={this.calculateHeaderCellStyle({
                    width: this.evaluateBtnColumnWidth(),
                    minWidth: this.btnCellStyle.minWidth,
                })}
            >
                <div class="pd-table-header-cell-text" style={{ justifyContent: 'flex-end' }}>
                    <pd-menu label={this.menuLabel} invertColor={this.headerStyle === 'dark' ? true : false}>
                        <slot data-menu-items=""></slot>
                    </pd-menu>
                </div>
                <div class="pd-table-header-cell-actions"></div>
            </div>
        );

        const additionalColumns = [];
        if (fixed && this.showStatus) additionalColumns.push(this.renderShowStatus());
        if (fixed && this.selectable) additionalColumns.push(this.renderSelectAll());

        return [...additionalColumns, ...columns, ...(!fixed && this.showActionColumn ? [btnColumn] : [])];
    }

    private renderRows(fixed: boolean = false, iconConfig: PdTableIconConfiguration) {
        const rowStyle = {
            height: `${this.rowHeight}px`,
        };

        let rows: PdTableRow[] = [];
        if (!this.paging) {
            rows = [...this.filteredRows];
        } else {
            const pageStart = (this.currentPage - 1) * this.pageSize;
            rows = [...this.filteredRows.slice(pageStart, pageStart + this.pageSize)];
        }

        return rows.map((row, i) => (
            <div class="pd-table-row" role="row" style={rowStyle} data-test={`pd-table-row-${i}`}>
                {this.showStatus ? this.renderStatus(row, fixed) : null}
                {this.selectable ? this.renderSelectable(row, fixed) : null}
                {this.columns.filter((c) => !!c.fixed === fixed).map((col) => this.renderColumn(row, col))}
                {this.showActionColumn ? this.renderBtnColumn(row, fixed, iconConfig) : null}
            </div>
        ));
    }

    private renderColumn(row, col: PdColumn) {
        const cellStyle = this.calculateCellStyle({ width: col.width, minWidth: col.minWidth, align: col.textAlign });

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
                onClick={() => this.rowClicked(row)}
                data-test={`pd-table-cell`}
            >
                {this.renderValue(col, value)}
            </div>
        );
    }

    private renderSelectable(row, fixed: boolean) {
        if (!fixed) return; // only render in fixed row
        const cellStyle = this.calculateCellStyle({
            minWidth: this.selectableCellWidth,
            width: this.selectableCellWidth,
            align: 'center',
        });
        return (
            <div class={`pd-table-cell`} style={cellStyle} role="cell">
                <pd-checkbox
                    checked={row.pdSelected}
                    onPd-checked={(ev) => this.select(ev.detail, row)}
                    data-test="pd-table-cell-selectable"
                ></pd-checkbox>
            </div>
        );
    }

    private renderStatus(row: PdTableRow, fixed: boolean) {
        if (!fixed) return; // only render in fixed row
        const cellStyle = this.calculateCellStyle({
            minWidth: this.selectableCellWidth,
            width: this.selectableCellWidth,
            align: 'center',
        });
        return (
            <div
                class={`pd-table-cell`}
                style={cellStyle}
                role="cell"
                onClick={() => this.rowClicked(row)}
                data-test="pd-table-cell-status"
            >
                {this.renderIcon(row.pdStatus || 'unset')}
            </div>
        );
    }

    private renderBtnColumn(row: PdTableRow, fixed: boolean, iconConfig: PdTableIconConfiguration) {
        if (fixed) return;
        const cellStyle = this.calculateCellStyle({
            ...this.btnCellStyle,
            width: this.evaluateBtnColumnWidth(),
        });
        const iConfig = { edit: false, view: false, delete: false, ...iconConfig };

        const isEditable =
            row.pdIconConfig && typeof row.pdIconConfig.edit === 'boolean' ? row.pdIconConfig.edit : iConfig.edit;
        const isViewable =
            row.pdIconConfig && typeof row.pdIconConfig.view === 'boolean' ? row.pdIconConfig.view : iConfig.view;
        const isDeletable =
            row.pdIconConfig && typeof row.pdIconConfig.delete === 'boolean' ? row.pdIconConfig.delete : iConfig.delete;

        return (
            <div class={`pd-table-cell`} style={cellStyle} role="cell">
                {this.renderButton(isEditable, 'edit', this.onEdit, row)}
                {this.renderButton(isViewable, 'detail', this.onView, row)}
                {this.renderButton(isDeletable, 'delete', this.onDelete, row)}
            </div>
        );
    }

    private renderValue(col: PdColumn, value) {
        return <span class="pd-table-cell-value" innerHTML={col.displayFunc ? col.displayFunc(value) : value}></span>;
    }

    private renderSort(nextSort, columnName) {
        if (!nextSort || columnName !== this.sortColumn) return;
        return <pd-icon name="sort" size={2} rotate={nextSort === 'asc' ? 180 : 0}></pd-icon>;
    }

    private renderFilterIcon(headerCol: PdColumn) {
        if (!headerCol.filter) return;

        if (this.columnFilters[headerCol.columnName])
            return (
                <button class="pd-table-filter-clear" onClick={(ev) => this.openFilter(ev, headerCol.columnName)}>
                    <pd-icon name="filter" size={2}></pd-icon>
                    <button
                        class="pd-table-filter-clear-button"
                        onClick={(ev) => this.clearFilter(ev, headerCol.columnName)}
                    >
                        <pd-icon size={1.2} name="close"></pd-icon>
                    </button>
                </button>
            );
        else
            return (
                <button class="pd-table-filter" onClick={(ev) => this.openFilter(ev, headerCol.columnName)}>
                    <pd-icon class="pd-table-filter-icon" name="filter" size={2}></pd-icon>
                </button>
            );
    }

    private renderButton(visible: boolean, icon: string, trigger: EventEmitter, data) {
        if (!visible) return;
        return (
            <button class="pd-table-action-btn" data-test={`pd-table-action-${icon}`}>
                <pd-icon
                    size={2.375}
                    name={icon}
                    onClick={(ev) => {
                        ev.stopPropagation();
                        trigger.emit(data);
                    }}
                ></pd-icon>
            </button>
        );
    }

    private calculateHeaderCellStyle(headerCol: { width: number; minWidth: number }) {
        return {
            flex: headerCol.width === 0 ? `1 1 ${headerCol.minWidth || 0}px` : `0 0 ${headerCol.width}px`,
            minWidth: `${headerCol.minWidth || headerCol.width || 0}px`,
        };
    }

    private calculateCellStyle(cell: { width: number; minWidth: number; align: PdColumn['textAlign'] }) {
        return {
            flex: cell.width === 0 ? `1 1 ${cell.minWidth || 0}px` : `0 0 ${cell.width}px`,
            minWidth: `${cell.minWidth || cell.width || 0}px`,
            justifyContent: this.getTextAlign(cell.align),
        };
    }

    private evaluateBtnColumnWidth(): number {
        if (this.iconConfig) {
            return Object.keys(this.iconConfig).length * this.btnCellStyle.width;
        } else {
            return this.btnCellStyle.width;
        }
    }

    private renderSelectAll() {
        const selectAllName = 'selectAllColumn';
        return (
            <div
                class={{
                    'pd-table-header-cell': true,
                    'pd-table-cell-bold': true,
                    [`pd-table-${this.headerStyle}`]: true,
                }}
                ref={(el) => (this.headerRefs[selectAllName] = el as HTMLElement)}
                role="cell"
                style={this.calculateHeaderCellStyle({
                    width: this.selectableCellWidth,
                    minWidth: this.selectableCellWidth,
                })}
            >
                <div
                    class="pd-table-header-cell-text"
                    style={{ justifyContent: this.getTextAlign(this.btnCellStyle.align) }}
                >
                    <pd-checkbox
                        onPd-checked={() => this.selectAll()}
                        checked={this.allSelected}
                        isIndeterminate={this.isIndeterminate}
                        data-test="pd-table-header-selectall"
                    ></pd-checkbox>
                </div>
                <div class="pd-table-header-cell-actions"></div>
            </div>
        );
    }

    private renderShowStatus() {
        const columnName = 'showStatusColumn';
        return (
            <div
                class={{
                    'pd-table-header-cell': true,
                    'pd-table-cell-bold': true,
                    [`pd-table-${this.headerStyle}`]: true,
                }}
                ref={(el) => (this.headerRefs[columnName] = el as HTMLElement)}
                role="cell"
                style={this.calculateHeaderCellStyle({
                    width: this.selectableCellWidth,
                    minWidth: this.selectableCellWidth,
                })}
            >
                <div
                    class="pd-table-header-cell-text"
                    style={{ justifyContent: this.getTextAlign(this.btnCellStyle.align) }}
                ></div>
                <div class="pd-table-header-cell-actions"></div>
            </div>
        );
    }

    private renderIcon(status: PdStatus) {
        switch (status) {
            case 'success':
                return <pd-icon name="status_green" size={3.6}></pd-icon>;
            case 'warning':
                return <pd-icon name="status_orange" size={3.6}></pd-icon>;
            case 'danger':
                return <pd-icon name="status_red" size={3.6}></pd-icon>;
            case 'unset':
                return <pd-icon name="status_undefined" size={3.6}></pd-icon>;
            default:
                break;
        }
    }

    private renderFooter() {
        if (!this.paging) return;
        return (
            <div
                class={{
                    'pd-table-footer': true,
                    [`pd-table-paging-location-${this.pagingLocation}`]: true,
                }}
            >
                <pd-pagination
                    current-page={this.currentPage}
                    total-pages={this.totalPages}
                    onPd-change={(ev) => this.pageChanged(ev)}
                    data-test="pd-table-pagination"
                ></pd-pagination>
                <pd-dropdown
                    items={this.pageSizes}
                    onPd-change={(ev) => this.pageSizeChanged(ev)}
                    data-test="pd-table-pagination-dropdown"
                ></pd-dropdown>
            </div>
        );
    }
}
