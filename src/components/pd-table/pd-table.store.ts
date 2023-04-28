import { PdColumn, PdTableRow, SortFunction } from '../../interface';
import { getFilterFunctions, defaultFilterFunc } from './pd-table.helper';

export interface TableState {
    allRows: PdTableRow[];
    visibleRows: PdTableRow[];
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
}

export function getVisibleRows(state: TableState, columns: PdColumn[], externalRowHandling: boolean) {
    if (externalRowHandling) {
        return [...state.visibleRows];
    }

    const filterFunctions = getFilterFunctions(columns, defaultFilterFunc);

    return state.allRows.filter((row) => {
        // loop all current filter columns
        return Object.keys(state.filterValues).every((key) => {
            // skip if filter is empty
            if (!state.filterValues[key]) return true;
            // use custom filter or default
            return filterFunctions[key](row[key], state.filterValues[key]);
        });
    });
}

export function sort(state: TableState, headerCol: PdColumn, sortFunction: SortFunction, externalRowHandling: boolean) {
    const { columnName, sortable } = headerCol;
    if (!sortable) return;

    const dir = state.nextSortDir[columnName] || 'desc';
    state.sortColumn = columnName;
    state.nextSortDir[columnName] = dir === 'asc' ? 'desc' : 'asc';

    if (externalRowHandling) {
        state.visibleRows = [...state.visibleRows];
    } else {
        state.visibleRows = [...state.visibleRows].sort((a, b) => sortFunction(a[columnName], b[columnName], dir));
    }
}

export function setFilter(state: TableState, filter: string, columnName: string) {
    if (!filter) {
        delete state.filterValues[columnName];
    } else {
        state.filterValues = { ...state.filterValues, [columnName]: filter };
    }

    closeFilter(state);
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

    state.allRows.forEach((r) => {
        if (state.visibleRows.find((vr) => vr._id === r._id)) r.pdSelected = state.allSelected;
    });
}

export function unselectAll(state: TableState) {
    state.allSelected = false;

    state.allRows.forEach((r) => {
        r.pdSelected = false;
    });
}

export function checkAllSelected(state: TableState) {
    state.allSelected = state.visibleRows.every((r) => r.pdSelected); // reset if not all checkboxes are selected
}

export function checkIsIndeterminate(state: TableState) {
    const countSelected = state.visibleRows.reduce((acc, r) => (r.pdSelected ? acc + 1 : acc), 0);
    state.isIndeterminate = countSelected > 0 && !state.allSelected;
}

export function refresh(state: TableState, rows: PdTableRow[], externalRowHandling: boolean, columns: PdColumn[]) {
    state.allRows = rows.map((r, i) => ({ ...r, _id: i }));
    if (externalRowHandling) {
        state.visibleRows = state.allRows;
    } else {
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

export function initPaging(state: TableState, pageSize: number = state.defaultPageSize) {
    state.currentPage = 1;
    state.pageSize = pageSize;
    state.totalPages = Math.ceil(state.visibleRows.length / state.pageSize);
}

export function pageChanged(state: TableState, currentPage: number) {
    state.currentPage = currentPage;
}
