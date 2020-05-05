export type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time';

export type Mode = 'ios' | 'md';

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
    fixed?: boolean;
    textAlign?: 'left' | 'right' | 'center';
    sortFunc?: (a: any, b: any, dir: string) => number;
    displayFunc?: (value: any) => any;
}

export interface PdModalConfig {
    title: string;
    minWidth: string;
    maxWidth: string;
    minHeight: string;
    maxHeight: string;
    backdropVisible: boolean;
    zIndex: string;
    close: ()=>void;
}
