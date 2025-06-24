import { ComboboxItem } from '../../types';

export interface ComboboxState {
    items: ComboboxItem[];
    filteredItems: ComboboxItem[];
    open: boolean;
    selectedItem: ComboboxItem;
    inputValue: string;
    currentNavigatedIndex: number;
}

export function isUserNavigating(state: ComboboxState): boolean {
    return state.open && state.currentNavigatedIndex > -1;
}

export function openDropdownOrCloseWhenNotAllowed(state: ComboboxState, disabled: boolean, viewOnly: boolean, readOnly: boolean) {
    if (isAllowOpen(state, disabled, viewOnly, readOnly)) {
        state.open = true;
        return;
    }
    if (state.open) closeDropdown(state);
}

export function isAllowOpen(state: ComboboxState, disabled: boolean, viewOnly: boolean, readOnly: boolean): boolean {
    return state.filteredItems.length > 0 && !disabled && !viewOnly && !readOnly;
}

export function closeDropdown(state: ComboboxState) {
    state.open = false;
    state.currentNavigatedIndex = -1;
}

export function getFirstSelectedItem(state: ComboboxState): ComboboxItem | null {
    return state.filteredItems.find(item => item.selected) || null;
}

export function navigateToNextItem(state: ComboboxState, direction: 'up' | 'down') {
    //if we have a selected item we just jump there on the first press of an arrow key
    if (getFirstSelectedItem(state) && state.currentNavigatedIndex === -1) {
        setCurrentNavigatedIndexToSelectedItem(state);
        return;
    }

    switch (direction) {
        case 'down': {
            if (state.currentNavigatedIndex < state.filteredItems.length - 1) {
                state.currentNavigatedIndex++;
            }
            break;
        }
        case 'up': {
            if (state.currentNavigatedIndex > 0) {
                state.currentNavigatedIndex--;
            }
            break;
        }
    }
}

export function setCurrentNavigatedIndexToSelectedItem(state: ComboboxState) {
    state.currentNavigatedIndex = state.filteredItems.indexOf(getFirstSelectedItem(state));
}

export function selectedHasIcon(state: ComboboxState): boolean {
    return state.selectedItem?.iconName || state.selectedItem?.iconSrc ? true : false;
}
