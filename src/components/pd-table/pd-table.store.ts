import { FilterFunction, PdColumn, PdTableRow, SortFunction } from '../../interface';
import { getFilteredRows } from './pd-table.helper';

export interface TableState {
    filteredRows: PdTableRow[];
    currentFilter: string;
    filterOpen: boolean;
    allSelected: boolean;
    isIndeterminate: boolean;
    sortColumn: string;
    nextSortDir: Record<string, 'asc' | 'desc'>;
    filterValues: Record<string, string>;
    currentPage: number;
    totalPages: number;
    pageSize: number;
    defaultPageSize: number;
    reRender: boolean;
}

export function sort(state: TableState, headerCol: PdColumn, sortFunction: SortFunction, externalRowHandling: boolean) {
    const { columnName, sortable } = headerCol;
    if (!sortable) return;

    const dir = state.nextSortDir[columnName] || 'desc';
    state.sortColumn = columnName;
    state.nextSortDir[columnName] = dir === 'asc' ? 'desc' : 'asc';

    if (externalRowHandling) {
        state.filteredRows = [...state.filteredRows];
    } else {
        state.filteredRows = [...state.filteredRows].sort((a, b) => sortFunction(a[columnName], b[columnName], dir));
    }
}

export function filter(
    state: TableState,
    filter: string,
    columnName: string,
    rows: PdTableRow[],
    filterFunctions: Record<string, FilterFunction>,
) {
    state.filterValues = { ...state.filterValues, [columnName]: filter };
    closeFilter(state);
    state.filteredRows = getFilteredRows(rows, state.filterValues, filterFunctions);
}

export function openFilter(state: TableState, columnName: string) {
    state.currentFilter = columnName;
    state.filterOpen = true;
}

export function closeFilter(state: TableState) {
    state.filterOpen = false;
}

export function selectAll(state: TableState) {
    state.allSelected = !state.allSelected || state.isIndeterminate;
    if (state.allSelected) state.isIndeterminate = false;
    state.filteredRows = state.filteredRows.map((r) => ({
        ...r,
        pdSelected: state.allSelected,
    }));
}

export function unselectAll(state: TableState) {
    state.allSelected = false;
    state.filteredRows = state.filteredRows.map((row) => ({
        ...row,
        pdSelected: false,
    }));
}

export function checkAllSelected(state: TableState) {
    state.allSelected = state.filteredRows.every((r) => r.pdSelected); // reset if not all checkboxes are selected
}

export function checkIsIndeterminate(state: TableState) {
    const countSelected = state.filteredRows.reduce((acc, r) => (r.pdSelected ? acc + 1 : acc), 0);
    state.isIndeterminate = countSelected > 0 && !state.allSelected;
}

export function refresh(state: TableState, rows: PdTableRow[]) {
    state.filteredRows = [...rows];
    state.totalPages = Math.ceil(state.filteredRows.length / state.pageSize);
    state.currentPage = state.currentPage > state.totalPages ? state.totalPages : state.currentPage;
    state.sortColumn = undefined;
    state.currentFilter = undefined;
    closeFilter(state);
    checkAllSelected(state);
    checkIsIndeterminate(state);
}

export function initPaging(state: TableState, pageSize: number = state.defaultPageSize) {
    state.currentPage = 1;
    state.pageSize = pageSize;
    state.totalPages = Math.ceil(state.filteredRows.length / state.pageSize);
}

export function pageChanged(state: TableState, currentPage: number) {
    state.currentPage = currentPage;
}
