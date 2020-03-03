export type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time';

export type Mode = 'ios' | 'md';

export interface InputChangeEventDetail {
    value: string | number | undefined | null;
}

export interface StyleEventDetail {
    [styleName: string]: boolean;
}
