export type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time';

export type Mode = 'ios' | 'md';

export type ChipType = 'text' | 'toggle' | 'filter';
export interface InputChangeEventDetail {
    value: string | number | undefined | null;
}

export interface StyleEventDetail {
    [styleName: string]: boolean;
}

export interface PdColumn {
    columnName: string;
    label: string;
    width: number;
    minWidth: number;
    bold?: boolean;
    sortDir?: 'desc' | 'asc';
    sortable?: boolean;
    filter?: boolean;
    fixed?: boolean;
    textAlign?: 'left' | 'right' | 'center';
    sortFunc?: (a: any, b: any, dir: string) => number;
    displayFunc?: (value: any) => any;
    filterFunc?: (value: any, filter: string) => boolean;
}

export interface PdTableIconConfiguration {
    edit: boolean;
    select: boolean;
    delete: boolean;
}

export interface PdButtonCell {
    width: number;
    minWidth: number;
    align: PdColumn['textAlign'];
}

export interface PdModalConfig {
    title: string;
    backdropVisible?: boolean;
    zIndex?: string;
}

export interface DropdownItem {
    id: string;
    label: string;
    value: string;
    selected?: boolean;
}

export interface ComboboxItem {
    id: string;
    label: string;
    value: string;
}
