// calculte min-width for left side (fixed) of table

import { FilterFunction, PdButtonCell, PdColumn, PdTableIconConfiguration, PdTableRow } from '../../interface';

export const selectableCellWidth: number = 50;
export const statusCellWidth: number = 50;
export const btnCellStyle: PdButtonCell = { width: 50, minWidth: 20, align: 'right' };

export const defaultSortFunc = (a, b, dir: 'asc' | 'desc') => {
    if (dir === 'asc') return a === b ? 0 : a < b ? -1 : 1;
    else if (dir === 'desc') return a === b ? 0 : a > b ? -1 : 1;
};

/**
 * filter by string.includes()
 */
export const defaultFilterFunc: FilterFunction = (value: any, filter: string) => {
    return `${value}`.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
};

// sum of width/min-width of all fixed columns
export function calcFixedMinWidth(columns: PdColumn[], selectable: boolean, status: boolean) {
    const fixedCols = columns.filter((c) => c.fixed);
    let minWidth = fixedCols.map((c) => c.width || c.minWidth || 0).reduce((a, b) => a + b, 0);
    minWidth += selectable ? selectableCellWidth : 0;
    minWidth += status ? statusCellWidth : 0;
    return minWidth === 0 ? '0' : `${minWidth}px`;
}

// calculate flex for left side (fixed) of table
// has a fixed width when no column is auto
export function calcFixedFlex(columns: PdColumn[], selectable: boolean, status: boolean) {
    const fixedCols = columns.filter((c) => c.fixed);
    const hasAuto = fixedCols.findIndex((c) => c.width === 0) !== -1;

    if (hasAuto) {
        return '1 1 auto';
    } else {
        let width = fixedCols.map((c) => c.width).reduce((a, b) => a + b, 0);
        width += selectable ? selectableCellWidth : 0;
        width += status ? statusCellWidth : 0;
        return `0 0 ${width}px`;
    }
}

// calculate flex for right side (scroll) of table
// has a fixed width when no column is auto
export function calcScrollFlex(columns: PdColumn[]) {
    const fixedCols = columns.filter((c) => !c.fixed);
    const hasAuto = fixedCols.findIndex((c) => c.width === 0) !== -1;

    if (hasAuto) {
        return '1 1 auto';
    } else {
        const width = fixedCols.map((c) => c.width).reduce((a, b) => a + b, 0);
        return `0 1 ${width}px`;
    }
}

export function getCustomFilterFunctions(columns: PdColumn[], columnFilters) {
    const customFilters = {};
    Object.keys(columnFilters).forEach(
        (key) => (customFilters[key] = columns.find((col) => col.columnName === key)?.filterFunc),
    );
    return customFilters;
}

export function calculateHeaderCellStyle(headerCol: { width: number; minWidth: number }) {
    return {
        flex: headerCol.width === 0 ? `1 1 ${headerCol.minWidth || 0}px` : `0 0 ${headerCol.width}px`,
        minWidth: `${headerCol.minWidth || headerCol.width || 0}px`,
    };
}

export function calculateCellStyle(cell: { width: number; minWidth: number; align: PdColumn['textAlign'] }) {
    return {
        flex: cell.width === 0 ? `1 1 ${cell.minWidth || 0}px` : `0 0 ${cell.width}px`,
        minWidth: `${cell.minWidth || cell.width || 0}px`,
        justifyContent: getTextAlign(cell.align),
    };
}

export function evaluateBtnColumnWidth(iconConfig: PdTableIconConfiguration): number {
    if (iconConfig) {
        return Object.keys(iconConfig).length * btnCellStyle.width;
    } else {
        return btnCellStyle.width;
    }
}

export function getTextAlign(textAlign: PdColumn['textAlign']) {
    return textAlign === 'left' ? 'flex-start' : textAlign === 'right' ? 'flex-end' : 'center';
}

export function getFilterFunctions(columns: PdColumn[], defaultFilterFunc: FilterFunction) {
    return columns.reduce(
        (prev, cur) => ({
            ...prev,
            [cur.columnName]: cur.filterFunc ?? defaultFilterFunc,
        }),
        {} as Record<string, FilterFunction>,
    );
}

export function getFilteredRows(
    rows: PdTableRow[],
    filterValues: Record<string, string>,
    filterFunctions: Record<string, FilterFunction>,
) {
    return [...rows].filter((row) => {
        // loop all current filter columns
        return Object.keys(filterValues).every((key) => {
            // skip if filter is empty
            if (!filterValues[key]) return true;
            // use custom filter or default
            return filterFunctions[key](row[key], filterValues[key]);
        });
    });
}
