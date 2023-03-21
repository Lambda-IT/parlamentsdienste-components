import { createPopper, Instance } from '@popperjs/core';
import {
    Component,
    ComponentDidLoad,
    ComponentDidUpdate,
    ComponentInterface,
    ComponentWillLoad,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Listen,
    Method,
    Prop,
    Watch,
} from '@stencil/core';
import { createStore } from '@stencil/store';

import {
    DropdownItem,
    PdColumn,
    PdPagingLocation,
    PdStatus,
    PdTableIconConfiguration,
    PdTableRow,
    PdTableStyle,
    SelectedEvent,
} from '../../interface';
import {
    btnCellStyle,
    calcFixedFlex,
    calcFixedMinWidth,
    calcScrollFlex,
    calculateCellStyle,
    calculateHeaderCellStyle,
    defaultFilterFunc,
    defaultSortFunc,
    evaluateBtnColumnWidth,
    getFilterFunctions,
    getTextAlign,
    selectableCellWidth,
} from './pd-table.helper';
import * as S from './pd-table.store';

/**
 * @slot - Action menu items
 */
@Component({
    tag: 'pd-table',
    styleUrl: 'pd-table.scss',
    shadow: true,
})
export class Table implements ComponentInterface, ComponentWillLoad, ComponentDidLoad, ComponentDidUpdate {
    private filterElement: HTMLPdTableFilterElement;
    private headerRefs: Record<string, HTMLElement> = {};
    private popper: Instance;
    private state: S.TableState;

    @Element() element: HTMLElement;

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
     * Sets selectable rows to disabled
     */
    @Prop() disabled = false;

    /**
     * Sets selectable rows to readonly
     */
    @Prop() readonly = false;

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
     * Disables the sort, filter and pagination of the component.
     * Enables pd-sort, pd-filter-input, pd-filter-change events
     * Enables a slot for a external pagination-component
     */
    @Prop() externalRowHandling: boolean = false;

    /**
     * If externalRowHandling is true, this property can be used to set the status of the checkbox on the top left of the table
     */
    @Prop() selectedStatus: 'all' | 'none' | 'indeterminate' = 'none';

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

    /**
     * Gets emitted when a column gets sorted
     */
    @Event({ eventName: 'pd-sort' }) onSort!: EventEmitter<{}>;

    /**
     * Gets emitted when the filter changes
     */
    @Event({ eventName: 'pd-filter-change' }) onFilterChange!: EventEmitter<{}>;

    /**
     * Gets emitted when the filter input changes
     */
    @Event({ eventName: 'pd-filter-input' }) onFilterInput!: EventEmitter<string>;

    @Method()
    async unselectAll() {
        S.unselectAll(this.state);
    }

    @Method()
    async refresh() {
        S.refresh(this.state, this.rows, this.externalRowHandling);
        S.initPaging(this.state, this.state.pageSize);
    }

    @Watch('rows')
    handleRowsChanged() {
        S.refresh(this.state, this.rows, this.externalRowHandling);
    }

    @Watch('selectedStatus')
    handleSelectedStatusChanged() {
        if (!this.externalRowHandling) return;
        switch (this.selectedStatus) {
            case 'all':
                this.state.isIndeterminate = false;
                this.state.allSelected = true;
                break;
            case 'none':
                this.state.isIndeterminate = false;
                this.state.allSelected = false;
                break;
            case 'indeterminate':
                this.state.isIndeterminate = true;
                break;
        }
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'Escape') S.closeFilter(this.state);
    }

    constructor() {
        const { state } = createStore<S.TableState>({
            filteredRows: [],
            currentFilter: undefined,
            filterOpen: false,
            allSelected: false,
            isIndeterminate: false,
            sortColumn: undefined,
            nextSortDir: {},
            filterValues: {},
            currentPage: 1,
            totalPages: 1,
            pageSize: 10,
            defaultPageSize: 10,
        });
        this.state = state;
        this.state.filteredRows = this.rows;
        this.handleSelectedStatusChanged();
    }

    public componentWillLoad() {
        S.checkIsIndeterminate(this.state);
        S.initPaging(this.state, +this.pageSizes.find((ps) => ps.selected)?.value || this.state.defaultPageSize);
    }

    public componentDidLoad() {
        const table = this.element.shadowRoot.querySelector('.pd-table-header-row') as HTMLElement;
        this.filterElement = this.element.shadowRoot.querySelector('pd-table-filter') as HTMLPdTableFilterElement;
        this.popper = this.createMenuPopper(table, this.filterElement);
    }

    public componentDidUpdate() {
        if (!this.state.filterOpen) return;
        this.popper.forceUpdate();
        this.filterElement.focusInput();
    }

    /**
     * new filter set
     */
    private filterConfirm(ev: CustomEvent<string>) {
        S.filter(
            this.state,
            ev.detail,
            this.state.currentFilter,
            this.rows,
            getFilterFunctions(this.columns, defaultFilterFunc),
            this.externalRowHandling,
        );
        this.emitFilterChange();
    }

    private openFilter(ev: MouseEvent, columnName: string) {
        ev.stopPropagation();
        this.filterElement.setValue(this.state.filterValues[columnName] || '');
        this.filterElement.focusInput();
        this.popper.state.elements.reference = this.headerRefs[columnName];
        this.popper.update();
        S.openFilter(this.state, columnName);
    }

    private clearFilter(ev: MouseEvent, columnName: string) {
        ev.stopPropagation();
        S.filter(
            this.state,
            undefined,
            columnName,
            this.rows,
            getFilterFunctions(this.columns, defaultFilterFunc),
            this.externalRowHandling,
        );
        this.emitFilterChange();
    }

    // create a popper js element for the menu
    private createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: 'bottom-end',
        });
    }

    private select(isSelected: boolean, row) {
        row.pdSelected = isSelected;
        this.onSelected.emit({
            selected: isSelected,
            selectAll: false,
            row,
            rows: this.state.filteredRows.filter((r) => r.pdSelected),
        });
        S.checkAllSelected(this.state);
        S.checkIsIndeterminate(this.state);
    }

    private selectAll() {
        S.selectAll(this.state);
        this.onSelected.emit({
            selected: false,
            selectAll: this.state.allSelected,
            row: {},
            rows: this.state.filteredRows.filter((r) => r.pdSelected),
        });
    }

    private rowClicked(row: PdTableRow) {
        this.onRowClick.emit(row);
    }

    // paging functionality
    private pageChanged(ev: CustomEvent<number>) {
        S.pageChanged(this.state, +ev.detail);
    }

    private pageSizeChanged(ev: CustomEvent<DropdownItem>) {
        S.initPaging(this.state, +ev.detail.value);
    }

    private emitSort(headerCol: PdColumn) {
        if (!headerCol.sortable) return;
        const { columnName } = headerCol;

        this.onSort.emit({
            sortColumnName: headerCol.columnName,
            sortColumnLabel: headerCol.label,
            sortDirection: this.state.nextSortDir[columnName] === 'asc' ? 'desc' : 'asc',
        });
    }

    private emitFilterChange() {
        this.onFilterChange.emit(this.state.filterValues);
    }

    private emitFilterInput(ev: CustomEvent<string>) {
        ev.stopPropagation();

        this.onFilterInput.emit(ev.detail);
    }

    public render() {
        const headerStyle = {
            height: `${this.headerHeight}px`,
        };

        const fixedStyle = {
            flex: calcFixedFlex(this.columns, this.selectable),
            minWidth: calcFixedMinWidth(this.columns, this.selectable),
        };

        const scrollStyle = {
            flex: calcScrollFlex(this.columns),
        };

        return (
            <Host role="table">
                <pd-table-filter
                    class={{ 'pd-table-filter-hidden': !this.state.filterOpen }}
                    onPd-confirm={(ev) => this.filterConfirm(ev)}
                    onPd-close={() => (this.state.filterOpen = false)}
                    onPd-filter-input={(ev) => this.emitFilterInput(ev)}
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
                const columnSortDir = this.state.nextSortDir[headerCol.columnName];
                return (
                    <div
                        class={{
                            'pd-table-header-cell': true,
                            'pd-table-cell-bold': true,
                            'pd-table-sortable': headerCol.sortable,
                            [`pd-table-sort-${columnSortDir === 'asc' ? 'desc' : 'asc'}`]: !!columnSortDir,
                            [`pd-table-${this.headerStyle}`]: true,
                        }}
                        ref={(el) => (this.headerRefs[headerCol.columnName] = el as HTMLElement)}
                        role="cell"
                        style={calculateHeaderCellStyle(headerCol)}
                        title={headerCol.label}
                        onClick={() => {
                            S.sort(
                                this.state,
                                headerCol,
                                headerCol.sortFunc ?? defaultSortFunc,
                                this.externalRowHandling,
                            );
                            this.emitSort(headerCol);
                        }}
                        data-test={`pd-table-header-col-${i}`}
                    >
                        <div
                            class="pd-table-header-cell-text"
                            style={{ justifyContent: getTextAlign(headerCol.textAlign) }}
                        >
                            <span>{headerCol.label}</span>
                        </div>
                        <div class="pd-table-header-cell-actions" data-test={`pd-table-header-actions-col-${i}`}>
                            {this.renderSort(this.state.nextSortDir[headerCol.columnName], headerCol.columnName)}
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
                style={calculateHeaderCellStyle({
                    width: evaluateBtnColumnWidth(this.iconConfig),
                    minWidth: btnCellStyle.minWidth,
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
            rows = [...this.state.filteredRows];
        } else {
            const pageStart = (this.state.currentPage - 1) * this.state.pageSize;
            rows = [...this.state.filteredRows.slice(pageStart, pageStart + this.state.pageSize)];
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
        const cellStyle = calculateCellStyle({ width: col.width, minWidth: col.minWidth, align: col.textAlign });

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
        const cellStyle = calculateCellStyle({
            minWidth: selectableCellWidth,
            width: selectableCellWidth,
            align: 'center',
        });
        return (
            <div class={`pd-table-cell`} style={cellStyle} role="cell">
                <pd-checkbox
                    checked={row.pdSelected}
                    onPd-checked={(ev) => this.select(ev.detail, row)}
                    disabled={this.disabled}
                    readonly={this.readonly}
                    data-test="pd-table-cell-selectable"
                ></pd-checkbox>
            </div>
        );
    }

    private renderStatus(row: PdTableRow, fixed: boolean) {
        if (!fixed) return; // only render in fixed row
        const cellStyle = calculateCellStyle({
            minWidth: selectableCellWidth,
            width: selectableCellWidth,
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
        const cellStyle = calculateCellStyle({
            ...btnCellStyle,
            width: evaluateBtnColumnWidth(this.iconConfig),
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
        if (!nextSort || columnName !== this.state.sortColumn) return;
        return <pd-icon name="sort" size={2} rotate={nextSort === 'asc' ? 180 : 0}></pd-icon>;
    }

    private renderFilterIcon(headerCol: PdColumn) {
        if (!headerCol.filter) return;

        if (this.state.filterValues[headerCol.columnName])
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
                style={calculateHeaderCellStyle({
                    width: selectableCellWidth,
                    minWidth: selectableCellWidth,
                })}
            >
                <div class="pd-table-header-cell-text" style={{ justifyContent: getTextAlign(btnCellStyle.align) }}>
                    <pd-checkbox
                        onPd-checked={() => {
                            this.selectAll();
                        }}
                        checked={this.state.allSelected || this.selectedStatus === 'all'}
                        isIndeterminate={this.state.isIndeterminate}
                        disabled={this.disabled}
                        readonly={this.readonly}
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
                style={calculateHeaderCellStyle({
                    width: selectableCellWidth,
                    minWidth: selectableCellWidth,
                })}
            >
                <div
                    class="pd-table-header-cell-text"
                    style={{ justifyContent: getTextAlign(btnCellStyle.align) }}
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
        if (!this.paging && !this.externalRowHandling) return;
        return (
            <div
                class={{
                    'pd-table-footer': true,
                    [`pd-table-paging-location-${this.pagingLocation}`]: true,
                }}
            >
                {this.paging && !this.externalRowHandling ? (
                    [
                        <pd-pagination
                            current-page={this.state.currentPage}
                            total-pages={this.state.totalPages}
                            onPd-change={(ev) => this.pageChanged(ev)}
                            data-test="pd-table-pagination"
                        ></pd-pagination>,
                        <pd-dropdown
                            items={this.pageSizes}
                            onPd-change={(ev) => this.pageSizeChanged(ev)}
                            data-test="pd-table-pagination-dropdown"
                        ></pd-dropdown>,
                    ]
                ) : (
                    <slot name="external-pagination" />
                )}
            </div>
        );
    }
}
