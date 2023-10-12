export type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time';

export type Mode = 'ios' | 'md';

export type ChipType = 'text' | 'toggle' | 'filter';
export interface InputChangeEventDetail {
  value: string | number | undefined | null;
}

export interface StyleEventDetail {
  [styleName: string]: boolean;
}

export type SortFunction = (a: any, b: any, dir: string) => number;
export type FilterFunction = (value: any, filter: string) => boolean;
export type DisplayFunction = (value: any) => any;

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
  sortFunc?: SortFunction;
  displayFunc?: DisplayFunction;
  filterFunc?: FilterFunction;
}

export interface PdTableIconConfiguration {
  edit: boolean;
  view: boolean;
  delete: boolean;
}

export interface PdTableRow {
  [key: string]: any;
  pdIconConfig: PdTableIconConfiguration;
  pdStatus: PdStatus;
  pdSelected: boolean;
  _id: number;
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
  value: string | number;
  selected?: boolean;
  iconName?: string;
  iconSrc?: string;
}

export type TextWrap = 'wrap' | 'no-wrap';

export interface ComboboxItem extends DropdownItem {}

export interface SelectedEvent {
  selected: boolean;
  selectAll: boolean;
  row: any;
  rows: any[];
}

export interface TabValue {
  id: number;
  text: string;
  checked?: boolean;
}

export type PdPlacement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type PdStatus = 'success' | 'danger' | 'warning' | 'info' | 'unset';

export type PdIconLocation = 'left' | 'right' | 'center' | 'none';

export type PdButtonSize = 'normal' | 'small' | 'large';

export type PdButtonColor = 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export type PdButtonType = 'button' | 'submit' | 'reset';

export type PdPagingLocation = 'left' | 'right';

export type PdTableStyle = 'light' | 'dark' | 'gray';
