import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { c as createStore } from './p-CUDtfOHC.js';
import { d as defineCustomElement$7 } from './p-CiZ4Y22d.js';
import { d as defineCustomElement$6 } from './p-jXD7iRW0.js';
import { d as defineCustomElement$5 } from './p-DdjZSDbb.js';
import { d as defineCustomElement$4 } from './p-CGp-npjr.js';
import { d as defineCustomElement$3 } from './p-DQDubugP.js';
import { d as defineCustomElement$2 } from './p-BZMk-qiC.js';
import { c as createPopper } from './p-BfP9ezJQ.js';

// calculte min-width for left side (fixed) of table
const selectableCellWidth = 50;
const statusCellWidth = 50;
const btnCellStyle = { width: 50, minWidth: 20, align: 'right' };
const defaultSortFunc = (a, b, dir) => {
    if (dir === 'asc')
        return a === b ? 0 : a < b ? -1 : 1;
    else if (dir === 'desc')
        return a === b ? 0 : a > b ? -1 : 1;
};
/**
 * filter by string.includes()
 */
const defaultFilterFunc = (value, filter) => {
    return `${value}`.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
};
// sum of width/min-width of all fixed columns
function calcFixedMinWidth(columns, selectable, status) {
    const fixedCols = columns.filter(c => c.fixed);
    let minWidth = fixedCols.map(c => c.width || c.minWidth || 0).reduce((a, b) => a + b, 0);
    minWidth += selectable ? selectableCellWidth : 0;
    minWidth += status ? statusCellWidth : 0;
    return minWidth === 0 ? '0' : `${minWidth}px`;
}
// calculate flex for left side (fixed) of table
// has a fixed width when no column is auto
function calcFixedFlex(columns, selectable, status) {
    const fixedCols = columns.filter(c => c.fixed);
    const hasAuto = fixedCols.findIndex(c => c.width === 0) !== -1;
    if (hasAuto) {
        return '1 1 auto';
    }
    else {
        let width = fixedCols.map(c => c.width).reduce((a, b) => a + b, 0);
        width += selectable ? selectableCellWidth : 0;
        width += status ? statusCellWidth : 0;
        return `0 0 ${width}px`;
    }
}
// calculate flex for right side (scroll) of table
// has a fixed width when no column is auto
function calcScrollFlex(columns) {
    const fixedCols = columns.filter(c => !c.fixed);
    const hasAuto = fixedCols.findIndex(c => c.width === 0) !== -1;
    if (hasAuto) {
        return '1 1 auto';
    }
    else {
        const width = fixedCols.map(c => c.width).reduce((a, b) => a + b, 0);
        return `0 1 ${width}px`;
    }
}
function calculateHeaderCellStyle(headerCol) {
    return {
        flex: headerCol.width === 0 ? `1 1 ${headerCol.minWidth || 0}px` : `0 0 ${headerCol.width}px`,
        minWidth: `${headerCol.minWidth || headerCol.width || 0}px`,
    };
}
function calculateCellStyle(cell) {
    return {
        flex: cell.width === 0 ? `1 1 ${cell.minWidth || 0}px` : `0 0 ${cell.width}px`,
        minWidth: `${cell.minWidth || cell.width || 0}px`,
        justifyContent: getTextAlign(cell.align),
    };
}
function evaluateBtnColumnWidth(iconConfig) {
    if (iconConfig) {
        return Object.keys(iconConfig).length * btnCellStyle.width;
    }
    else {
        return btnCellStyle.width;
    }
}
function getTextAlign(textAlign) {
    return textAlign === 'left' ? 'flex-start' : textAlign === 'right' ? 'flex-end' : 'center';
}
function getFilterFunctions(columns, defaultFilterFunc) {
    return columns.reduce((prev, cur) => ({
        ...prev,
        [cur.columnName]: cur.filterFunc ?? defaultFilterFunc,
    }), {});
}

function getVisibleRows(state, columns, externalRowHandling) {
    if (externalRowHandling) {
        return [...state.visibleRows];
    }
    const filterFunctions = getFilterFunctions(columns, defaultFilterFunc);
    const filteredRows = state.allRows.filter(row => {
        // loop all current filter columns
        return Object.keys(state.filterValues).every(key => {
            // skip if filter is empty
            if (!state.filterValues[key])
                return true;
            // use custom filter or default
            return filterFunctions[key](row[key], state.filterValues[key]);
        });
    });
    const sortCol = columns.find(col => col.columnName === state.sortColumn);
    if (!sortCol || !sortCol.sortable)
        return filteredRows;
    const { columnName } = sortCol;
    const sortFunction = sortCol.sortFunc ?? defaultSortFunc;
    const dir = state.nextSortDir[columnName] || 'desc';
    return [...filteredRows].sort((a, b) => sortFunction(a[columnName], b[columnName], dir));
}
function setSort(state, headerCol) {
    const { columnName, sortable } = headerCol;
    if (!sortable)
        return;
    const dir = state.nextSortDir[columnName] || 'desc';
    state.sortColumn = columnName;
    state.nextSortDir[columnName] = dir === 'asc' ? 'desc' : 'asc';
}
function setFilter(state, filter, columnName) {
    if (!filter) {
        delete state.filterValues[columnName];
    }
    else {
        state.filterValues = { ...state.filterValues, [columnName]: filter };
    }
    closeFilter(state);
}
function openFilter(state, columnName) {
    state.currentFilter = columnName;
    state.filterOpen = true;
}
function closeFilter(state) {
    state.filterOpen = false;
}
function selectAll(state) {
    state.allSelected = !state.allSelected || state.isIndeterminate;
    if (state.allSelected)
        state.isIndeterminate = false;
    state.allRows.forEach(r => {
        if (state.visibleRows.find(vr => vr._id === r._id))
            r.pdSelected = state.allSelected;
    });
}
function unselectAll(state) {
    state.allSelected = false;
    state.allRows.forEach(r => {
        r.pdSelected = false;
    });
}
function checkAllSelected(state) {
    state.allSelected = state.visibleRows.every(r => r.pdSelected); // reset if not all checkboxes are selected
}
function checkIsIndeterminate(state) {
    const countSelected = state.visibleRows.reduce((acc, r) => (r.pdSelected ? acc + 1 : acc), 0);
    state.isIndeterminate = countSelected > 0 && !state.allSelected;
}
function refresh(state, rows, externalRowHandling, columns) {
    state.allRows = rows.map((r, i) => ({ ...r, _id: i }));
    if (externalRowHandling) {
        state.visibleRows = state.allRows;
    }
    else {
        state.visibleRows = getVisibleRows(state, columns, externalRowHandling);
    }
    closeFilter(state);
    if (!externalRowHandling) {
        state.totalPages = Math.ceil(state.visibleRows.length / state.pageSize);
        state.currentPage = state.currentPage > state.totalPages ? state.totalPages : state.currentPage;
        state.sortColumn = undefined;
        state.currentFilter = undefined;
        state.filterValues = {};
        checkAllSelected(state);
        checkIsIndeterminate(state);
    }
}
function initPaging(state, pageSize = state.defaultPageSize) {
    state.currentPage = 1;
    state.pageSize = pageSize;
    state.totalPages = Math.ceil(state.visibleRows.length / state.pageSize);
}
function pageChanged(state, currentPage) {
    state.currentPage = currentPage;
}

const pdTableCss = "input,textarea,a,button{font:1rem/1.5rem Avenir;letter-spacing:0.19px;margin:0}button,[type=button],[type=reset],[type=submit]{appearance:none}:host{display:block;flex:1;--pd-menu-label-weight:700;--pd-menu-label-color:black;--pd-dropdown-vertical-padding:0.125rem}*,::before,::after{box-sizing:border-box;outline:none}.pd-table{display:flex}.pd-table .pd-table-horizontal-scroll{overflow:auto}.pd-table .pd-table-horizontal-scroll .pd-table-row,.pd-table .pd-table-horizontal-scroll .pd-table-header-row{overflow:visible}.pd-table-header-row{display:flex;flex-direction:row;height:3em;color:#ffffff;overflow:hidden}.pd-table-header-row .pd-table-header-cell{display:flex;justify-content:space-between;align-items:center;padding:0 0.625em}.pd-table-header-row .pd-table-header-cell .pd-table-header-cell-text{display:flex;flex:1 1 auto;overflow:hidden}.pd-table-header-row .pd-table-header-cell .pd-table-header-cell-text span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.pd-table-header-row .pd-table-header-cell .pd-table-header-cell-actions{display:flex;align-items:center}.pd-table-header-row .pd-table-header-cell .pd-table-filter-icon{cursor:pointer}.pd-table-header-row .pd-table-header-cell.pd-table-sortable{user-select:none;cursor:pointer}.pd-table-header-row .pd-table-header-cell.pd-table-dark{background-color:#033840;border-bottom:0.125em solid #033840;border-top:0.125em solid #033840;fill:#ffffff;--pd-checkbox-background-color:white}.pd-table-header-row .pd-table-header-cell.pd-table-dark.pd-table-sortable:hover{background-color:#0b7285}.pd-table-header-row .pd-table-header-cell.pd-table-dark.pd-table-sortable:active{background-color:#15aabf}.pd-table-header-row .pd-table-header-cell.pd-table-light{border-bottom:0.125em solid #033840;border-top:0.125em solid #033840;color:#0b0b0b}.pd-table-header-row .pd-table-header-cell.pd-table-light.pd-table-sortable:hover{background-color:#dee2e6}.pd-table-header-row .pd-table-header-cell.pd-table-light.pd-table-sortable:active{background-color:#15aabf}.pd-table-header-row .pd-table-header-cell.pd-table-gray{background-color:#dee2e6;border-bottom:0.125em solid #dee2e6;border-top:0.125em solid #dee2e6;color:#0b0b0b}.pd-table-header-row .pd-table-header-cell.pd-table-gray.pd-table-sortable:hover{background-color:#e3e0e0}.pd-table-header-row .pd-table-header-cell.pd-table-gray.pd-table-sortable:active{background-color:#15aabf}.pd-table-body .pd-table-row{display:flex;flex-direction:row;height:3em;overflow:hidden}.pd-table-body .pd-table-row:last-child .pd-table-cell{border-bottom:none}.pd-table-cell{display:flex;justify-content:center;align-items:center;padding:0 0.625em;border-bottom:0.125em solid #dee2e6;background:transparent}.pd-table-cell .pd-table-action-btn{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none;margin:0 0.25rem;fill:#0b7285;cursor:pointer}.pd-table-cell .pd-table-action-btn:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-table-cell .pd-table-action-btn:hover{fill:#15aabf}.pd-table-cell .pd-table-action-btn:hover:active{fill:#66d9e8}.pd-table-cell span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.pd-table-cell-bold{font-weight:700}.pd-table-filter{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none}.pd-table-filter:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-table-filter-clear{display:flex;fill:#ffffff;align-items:center;padding:0.1rem;margin-left:0.2rem;background-color:#0b7285;border-radius:0.25rem;border:none;cursor:pointer}.pd-table-filter-clear:focus-visible{background-color:#ffec99;fill:#033840}.pd-table-filter-clear .pd-table-filter-clear-button{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none;display:flex;align-items:center;color:#ffffff}.pd-table-filter-clear .pd-table-filter-clear-button:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-table-filter-hidden{display:none}.pd-table-footer{display:flex;flex-direction:row;margin-top:1rem}.pd-table-footer pd-pagination{margin-right:1rem}.pd-table-footer.pd-table-paging-location-left{justify-content:flex-start}.pd-table-footer.pd-table-paging-location-right{justify-content:flex-end}";

const Table = /*@__PURE__*/ proxyCustomElement(class Table extends H {
    filterElement;
    headerRefs = {};
    popper;
    state;
    get element() { return this; }
    /**
     * Height of header cells
     */
    headerHeight = '48';
    /**
     * Height of rows
     */
    rowHeight = '48';
    /**
     * The minimum width the table should take
     */
    minWidth = '300';
    /**
     * The table style
     */
    headerStyle = 'dark';
    /**
     * A definition for each column of the table
     */
    columns = [];
    /**
     * The data definition for each row to display
     */
    rows = [];
    /**
     * The configuration for the last column, the icon column
     */
    iconConfig;
    /**
     * Show button column and context menu
     */
    showActionColumn = false;
    /**
     * Make rows selectable with a checkbox
     */
    selectable = false;
    /**
     * Sets selectable rows to disabled
     */
    disabled = false;
    /**
     * Sets selectable rows to readonly
     */
    readonly = false;
    /**
     * Allow to render a status icon per row
     */
    showStatus = false;
    /*
     * Show label text for menu
     */
    menuLabel;
    /**
     Enables paging
     */
    paging = false;
    /**
     * Available Page sizes for paging
     */
    pageSizes = [
        { id: '1', label: '10', value: 10, selected: true },
        { id: '2', label: '25', value: 25 },
        { id: '3', label: '100', value: 100 },
    ];
    /**
     * Location of paging element
     */
    pagingLocation = 'right';
    /**
     * Disables the sort, filter and pagination of the component.
     * Enables pd-sort, pd-filter-input, pd-filter-change events
     * Enables a slot for a external pagination-component
     */
    externalRowHandling = false;
    /**
     * If externalRowHandling is true, this property can be used to set the status of the checkbox on the top left of the table
     */
    selectedStatus = 'none';
    /**
     * Triggers when one or all rows get selected
     */
    onSelected;
    /**
     * Triggers an event when the edit icon was clicked
     */
    onEdit;
    /**
     * Triggers an event when the view icon was clicked
     */
    onView;
    /**
     * Triggers an event when the delete icon was clicked
     */
    onDelete;
    /**
     * Triggers an event when row was clicked
     */
    onRowClick;
    /**
     * Gets emitted when a column gets sorted
     */
    onSort;
    /**
     * Gets emitted when the filter changes
     */
    onFilterChange;
    /**
     * Gets emitted when the filter input changes
     */
    onFilterInput;
    async unselectAll() {
        unselectAll(this.state);
        this.state.visibleRows = getVisibleRows(this.state, this.columns, this.externalRowHandling);
    }
    async refresh() {
        refresh(this.state, this.rows, this.externalRowHandling, this.columns);
        initPaging(this.state, this.state.pageSize);
    }
    handleRowsChanged() {
        refresh(this.state, this.rows, this.externalRowHandling, this.columns);
        initPaging(this.state, this.state.pageSize);
    }
    handleSelectedStatusChanged() {
        if (!this.externalRowHandling)
            return;
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
    handleKeyDown(ev) {
        if (ev.key === 'Escape')
            closeFilter(this.state);
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.onSelected = createEvent(this, "pd-selected");
        this.onEdit = createEvent(this, "pd-edit");
        this.onView = createEvent(this, "pd-view");
        this.onDelete = createEvent(this, "pd-delete");
        this.onRowClick = createEvent(this, "pd-clicked-row");
        this.onSort = createEvent(this, "pd-sort");
        this.onFilterChange = createEvent(this, "pd-filter-change");
        this.onFilterInput = createEvent(this, "pd-filter-input");
        const { state } = createStore({
            allRows: [],
            visibleRows: [],
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
        this.state.allRows = this.rows.map((r, i) => ({ ...r, _id: i }));
        if (this.externalRowHandling) {
            this.state.visibleRows = this.state.allRows;
        }
        else {
            this.state.visibleRows = getVisibleRows(this.state, this.columns, this.externalRowHandling);
        }
        this.handleSelectedStatusChanged();
    }
    componentWillLoad() {
        checkAllSelected(this.state);
        checkIsIndeterminate(this.state);
        initPaging(this.state, +this.pageSizes.find(ps => ps.selected)?.value || this.state.defaultPageSize);
    }
    componentDidLoad() {
        const table = this.element.shadowRoot.querySelector('.pd-table-header-row');
        this.filterElement = this.element.shadowRoot.querySelector('pd-table-filter');
        this.popper = this.createMenuPopper(table, this.filterElement);
    }
    componentDidUpdate() {
        if (!this.state.filterOpen)
            return;
        this.popper.forceUpdate();
        this.filterElement.focusInput();
    }
    /**
     * new filter set
     */
    filterConfirm(ev) {
        setFilter(this.state, ev.detail, this.state.currentFilter);
        this.state.visibleRows = getVisibleRows(this.state, this.columns, this.externalRowHandling);
        initPaging(this.state, this.state.pageSize);
        this.emitFilterChange();
    }
    openFilter(ev, columnName) {
        ev.stopPropagation();
        this.filterElement.setValue(this.state.filterValues[columnName] || '');
        this.filterElement.focusInput();
        this.popper.state.elements.reference = this.headerRefs[columnName];
        this.popper.update();
        openFilter(this.state, columnName);
    }
    clearFilter(ev, columnName) {
        ev.stopPropagation();
        setFilter(this.state, undefined, columnName);
        this.state.visibleRows = getVisibleRows(this.state, this.columns, this.externalRowHandling);
        initPaging(this.state, this.state.pageSize);
        checkAllSelected(this.state);
        checkIsIndeterminate(this.state);
        this.emitFilterChange();
    }
    // create a popper js element for the menu
    createMenuPopper(button, menu) {
        return createPopper(button, menu, {
            placement: 'bottom-end',
        });
    }
    select(isSelected, row) {
        this.state.allRows.find(r => r._id === row._id).pdSelected = isSelected;
        this.state.visibleRows = getVisibleRows(this.state, this.columns, this.externalRowHandling);
        this.onSelected.emit({
            selected: isSelected,
            selectAll: false,
            row,
            rows: this.state.allRows.filter(r => r.pdSelected),
        });
        if (!this.externalRowHandling) {
            checkAllSelected(this.state);
            checkIsIndeterminate(this.state);
        }
    }
    selectAll() {
        selectAll(this.state);
        this.state.visibleRows = getVisibleRows(this.state, this.columns, this.externalRowHandling);
        this.onSelected.emit({
            selected: false,
            selectAll: this.state.allSelected,
            row: {},
            rows: this.state.visibleRows.filter(r => r.pdSelected),
        });
    }
    rowClicked(row, event) {
        event.preventDefault();
        this.onRowClick.emit({ ...row, event });
    }
    // paging functionality
    pageChanged(ev) {
        pageChanged(this.state, +ev.detail);
    }
    pageSizeChanged(ev) {
        initPaging(this.state, +ev.detail.value);
    }
    emitSort(headerCol) {
        if (!headerCol.sortable)
            return;
        const { columnName } = headerCol;
        this.onSort.emit({
            sortColumnName: headerCol.columnName,
            sortColumnLabel: headerCol.label,
            sortDirection: this.state.nextSortDir[columnName] === 'asc' ? 'desc' : 'asc',
        });
    }
    emitFilterChange() {
        this.onFilterChange.emit(this.state.filterValues);
    }
    emitFilterInput(ev) {
        ev.stopPropagation();
        this.onFilterInput.emit(ev.detail);
    }
    render() {
        const headerStyle = {
            height: `${this.headerHeight}px`,
        };
        const fixedStyle = {
            flex: calcFixedFlex(this.columns, this.selectable, this.showStatus),
            minWidth: calcFixedMinWidth(this.columns, this.selectable, this.showStatus),
        };
        const scrollStyle = {
            flex: calcScrollFlex(this.columns),
        };
        return (h(Host, { key: '0595add5182d40ec5424078370846f26095b7cd6', role: "table" }, h("pd-table-filter", { key: '8bbfce3b157426e0ff6d5fb4245a12c9d04bd17d', class: { 'pd-table-filter-hidden': !this.state.filterOpen }, "onPd-confirm": ev => this.filterConfirm(ev), "onPd-close": () => (this.state.filterOpen = false), "onPd-filter-input": ev => this.emitFilterInput(ev) }), h("div", { key: '49ec64a987f4411dc8deda226cc8c8e79bc0934d', class: "pd-table", role: "grid", style: { minWidth: `${this.minWidth}px` } }, h("div", { key: '296658174541e89577157b498b24608d7c6b20c5', class: "pd-table-fixed", style: fixedStyle }, h("div", { key: '6306b7b88d4cbd72222c7dbed1651d2af274ac23', class: `pd-table-header-row`, role: "rowheader", style: headerStyle }, this.renderHeader(true)), h("div", { key: 'd39b608c0cec3fb3d418ae0e42082469a2d3597e', class: "pd-table-body" }, this.renderRows(true, this.iconConfig))), h("div", { key: '570ebaebbe0673f31fbd886725583961319eeab8', class: "pd-table-horizontal-scroll", style: scrollStyle }, h("div", { key: 'ef51b73aa0333a0b54d5bdeafa0eec027ee8019e', class: `pd-table-header-row ${this.headerStyle}`, role: "rowheader", style: headerStyle }, this.renderHeader(false)), h("div", { key: '114c87bae0bdefb20ba19285fd877384c99e0478', class: "pd-table-body" }, this.renderRows(false, this.iconConfig)))), this.renderFooter()));
    }
    renderHeader(fixed = false) {
        const columns = this.columns
            .filter(c => !!c.fixed === fixed)
            .map((headerCol, i) => {
            const columnSortDir = this.state.nextSortDir[headerCol.columnName];
            return (h("div", { class: {
                    'pd-table-header-cell': true,
                    'pd-table-cell-bold': true,
                    'pd-table-sortable': headerCol.sortable,
                    [`pd-table-sort-${columnSortDir === 'asc' ? 'desc' : 'asc'}`]: !!columnSortDir,
                    [`pd-table-${this.headerStyle}`]: true,
                }, ref: el => (this.headerRefs[headerCol.columnName] = el), role: "cell", style: calculateHeaderCellStyle(headerCol), title: headerCol.label, onClick: () => {
                    setSort(this.state, headerCol);
                    this.state.visibleRows = getVisibleRows(this.state, this.columns, this.externalRowHandling);
                    this.emitSort(headerCol);
                }, "data-test": `pd-table-header-col-${i}` }, h("div", { class: "pd-table-header-cell-text", style: { justifyContent: getTextAlign(headerCol.textAlign) } }, h("span", null, headerCol.label)), h("div", { class: "pd-table-header-cell-actions", "data-test": `pd-table-header-actions-col-${i}` }, this.renderSort(this.state.nextSortDir[headerCol.columnName], headerCol.columnName), this.renderFilterIcon(headerCol))));
        });
        // render menu/button column
        const btnColumnName = 'btnColumn';
        const btnColumn = (h("div", { class: {
                'pd-table-header-cell': true,
                'pd-table-cell-bold': true,
                [`pd-table-${this.headerStyle}`]: true,
            }, ref: el => (this.headerRefs[btnColumnName] = el), role: "cell", style: calculateHeaderCellStyle({
                width: evaluateBtnColumnWidth(this.iconConfig),
                minWidth: btnCellStyle.minWidth,
            }) }, h("div", { class: "pd-table-header-cell-text", style: { justifyContent: 'flex-end' } }, h("pd-menu", { label: this.menuLabel, invertColor: this.headerStyle === 'dark' ? true : false }, h("slot", { "data-menu-items": "" }))), h("div", { class: "pd-table-header-cell-actions" })));
        const additionalColumns = [];
        if (fixed && this.showStatus)
            additionalColumns.push(this.renderShowStatus());
        if (fixed && this.selectable)
            additionalColumns.push(this.renderSelectAll());
        return [...additionalColumns, ...columns, ...(!fixed && this.showActionColumn ? [btnColumn] : [])];
    }
    renderRows(fixed = false, iconConfig) {
        const rowStyle = {
            height: `${this.rowHeight}px`,
        };
        let rows = [];
        if (!this.paging) {
            rows = [...this.state.visibleRows];
        }
        else {
            const pageStart = (this.state.currentPage - 1) * this.state.pageSize;
            rows = [...this.state.visibleRows.slice(pageStart, pageStart + this.state.pageSize)];
        }
        return rows.map((row, i) => (h("div", { class: "pd-table-row", role: "row", style: rowStyle, "data-test": `pd-table-row-${i}` }, this.showStatus ? this.renderStatus(row, fixed) : null, this.selectable ? this.renderSelectable(row, fixed) : null, this.columns.filter(c => !!c.fixed === fixed).map(col => this.renderColumn(row, col)), this.showActionColumn ? this.renderBtnColumn(row, fixed, iconConfig) : null)));
    }
    renderColumn(row, col) {
        const cellStyle = calculateCellStyle({ width: col.width, minWidth: col.minWidth, align: col.textAlign });
        let value = row[col.columnName];
        if (value && typeof value.getMonth === 'function') {
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(value);
            const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(value);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(value);
            value = `${da}.${mo}.${ye}`;
        }
        return (h("div", { class: `pd-table-cell ${col.bold ? 'pd-table-cell-bold' : ''}`, role: "cell", style: cellStyle, title: value, onClick: e => this.rowClicked(row, e), onAuxClick: e => this.rowClicked(row, e), "data-test": `pd-table-cell` }, this.renderValue(col, value)));
    }
    renderSelectable(row, fixed) {
        if (!fixed)
            return; // only render in fixed row
        const cellStyle = calculateCellStyle({
            minWidth: selectableCellWidth,
            width: selectableCellWidth,
            align: 'center',
        });
        return (h("div", { class: `pd-table-cell`, style: cellStyle, role: "cell" }, h("pd-checkbox", { checked: row.pdSelected, "onPd-checked": ev => this.select(ev.detail, row), disabled: this.disabled, readonly: this.readonly, "data-test": "pd-table-cell-selectable" })));
    }
    renderStatus(row, fixed) {
        if (!fixed)
            return; // only render in fixed row
        const cellStyle = calculateCellStyle({
            minWidth: selectableCellWidth,
            width: selectableCellWidth,
            align: 'center',
        });
        return (h("div", { class: `pd-table-cell`, style: cellStyle, role: "cell", onClick: e => this.rowClicked(row, e), onAuxClick: e => this.rowClicked(row, e), "data-test": "pd-table-cell-status" }, this.renderIcon(row.pdStatus || 'unset')));
    }
    renderBtnColumn(row, fixed, iconConfig) {
        if (fixed)
            return;
        const cellStyle = calculateCellStyle({
            ...btnCellStyle,
            width: evaluateBtnColumnWidth(this.iconConfig),
        });
        const iConfig = { edit: false, view: false, delete: false, ...iconConfig };
        const isEditable = row.pdIconConfig && typeof row.pdIconConfig.edit === 'boolean' ? row.pdIconConfig.edit : iConfig.edit;
        const isViewable = row.pdIconConfig && typeof row.pdIconConfig.view === 'boolean' ? row.pdIconConfig.view : iConfig.view;
        const isDeletable = row.pdIconConfig && typeof row.pdIconConfig.delete === 'boolean' ? row.pdIconConfig.delete : iConfig.delete;
        return (h("div", { class: `pd-table-cell`, style: cellStyle, role: "cell" }, this.renderButton(isEditable, 'edit', this.onEdit, row), this.renderButton(isViewable, 'detail', this.onView, row), this.renderButton(isDeletable, 'delete', this.onDelete, row)));
    }
    renderValue(col, value) {
        return h("span", { class: "pd-table-cell-value", innerHTML: col.displayFunc ? col.displayFunc(value) : value });
    }
    renderSort(nextSort, columnName) {
        if (!nextSort || columnName !== this.state.sortColumn)
            return;
        return h("pd-icon", { name: "sort", size: 2, rotate: nextSort === 'asc' ? 180 : 0 });
    }
    renderFilterIcon(headerCol) {
        if (!headerCol.filter)
            return;
        if (this.state.filterValues[headerCol.columnName])
            return (h("button", { class: "pd-table-filter-clear", onClick: ev => this.openFilter(ev, headerCol.columnName) }, h("pd-icon", { name: "filter", size: 2 }), h("button", { class: "pd-table-filter-clear-button", onClick: ev => this.clearFilter(ev, headerCol.columnName) }, h("pd-icon", { size: 1.2, name: "close" }))));
        else
            return (h("button", { class: "pd-table-filter", onClick: ev => this.openFilter(ev, headerCol.columnName) }, h("pd-icon", { class: "pd-table-filter-icon", name: "filter", size: 2 })));
    }
    renderButton(visible, icon, trigger, data) {
        if (!visible)
            return;
        return (h("button", { class: "pd-table-action-btn", "data-test": `pd-table-action-${icon}` }, h("pd-icon", { size: 2.375, name: icon, onClick: ev => {
                ev.stopPropagation();
                trigger.emit(data);
            } })));
    }
    renderSelectAll() {
        const selectAllName = 'selectAllColumn';
        return (h("div", { class: {
                'pd-table-header-cell': true,
                'pd-table-cell-bold': true,
                [`pd-table-${this.headerStyle}`]: true,
            }, ref: el => (this.headerRefs[selectAllName] = el), role: "cell", style: calculateHeaderCellStyle({
                width: selectableCellWidth,
                minWidth: selectableCellWidth,
            }) }, h("div", { class: "pd-table-header-cell-text", style: { justifyContent: getTextAlign(btnCellStyle.align) } }, h("pd-checkbox", { "onPd-checked": () => {
                this.selectAll();
            }, checked: this.state.allSelected || this.selectedStatus === 'all', isIndeterminate: this.state.isIndeterminate, disabled: this.disabled, readonly: this.readonly, "data-test": "pd-table-header-selectall" })), h("div", { class: "pd-table-header-cell-actions" })));
    }
    renderShowStatus() {
        const columnName = 'showStatusColumn';
        return (h("div", { class: {
                'pd-table-header-cell': true,
                'pd-table-cell-bold': true,
                [`pd-table-${this.headerStyle}`]: true,
            }, ref: el => (this.headerRefs[columnName] = el), role: "cell", style: calculateHeaderCellStyle({
                width: selectableCellWidth,
                minWidth: selectableCellWidth,
            }) }, h("div", { class: "pd-table-header-cell-text", style: { justifyContent: getTextAlign(btnCellStyle.align) } }), h("div", { class: "pd-table-header-cell-actions" })));
    }
    renderIcon(status) {
        switch (status) {
            case 'success':
                return h("pd-icon", { name: "status_green", size: 3.6 });
            case 'warning':
                return h("pd-icon", { name: "status_orange", size: 3.6 });
            case 'danger':
                return h("pd-icon", { name: "status_red", size: 3.6 });
            case 'unset':
                return h("pd-icon", { name: "status_undefined", size: 3.6 });
        }
    }
    renderFooter() {
        if (!this.paging && !this.externalRowHandling)
            return;
        return (h("div", { class: {
                'pd-table-footer': true,
                [`pd-table-paging-location-${this.pagingLocation}`]: true,
            } }, this.paging && !this.externalRowHandling ? ([
            h("pd-pagination", { "current-page": this.state.currentPage, "total-pages": this.state.totalPages, "onPd-change": ev => this.pageChanged(ev), "data-test": "pd-table-pagination" }),
            h("pd-dropdown", { items: this.pageSizes, "onPd-change": ev => this.pageSizeChanged(ev), "data-test": "pd-table-pagination-dropdown" }),
        ]) : (h("slot", { name: "external-pagination" }))));
    }
    static get watchers() { return {
        "rows": ["handleRowsChanged"],
        "selectedStatus": ["handleSelectedStatusChanged"]
    }; }
    static get style() { return pdTableCss; }
}, [1, "pd-table", {
        "headerHeight": [1, "header-height"],
        "rowHeight": [1, "row-height"],
        "minWidth": [1, "min-width"],
        "headerStyle": [1, "header-style"],
        "columns": [16],
        "rows": [16],
        "iconConfig": [16, "icon-config"],
        "showActionColumn": [4, "show-action-column"],
        "selectable": [4],
        "disabled": [4],
        "readonly": [4],
        "showStatus": [4, "show-status"],
        "menuLabel": [1, "menu-label"],
        "paging": [4],
        "pageSizes": [16, "page-sizes"],
        "pagingLocation": [1, "paging-location"],
        "externalRowHandling": [4, "external-row-handling"],
        "selectedStatus": [1, "selected-status"],
        "unselectAll": [64],
        "refresh": [64]
    }, [[0, "keydown", "handleKeyDown"]], {
        "rows": ["handleRowsChanged"],
        "selectedStatus": ["handleSelectedStatusChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-table", "pd-checkbox", "pd-dropdown", "pd-dropdown-item", "pd-icon", "pd-menu", "pd-table-filter"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Table);
            }
            break;
        case "pd-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "pd-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "pd-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "pd-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "pd-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "pd-table-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const PdTable = Table;
const defineCustomElement = defineCustomElement$1;

export { PdTable, defineCustomElement };
//# sourceMappingURL=pd-table.js.map

//# sourceMappingURL=pd-table.js.map