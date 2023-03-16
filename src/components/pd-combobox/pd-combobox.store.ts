import { ComboboxItem } from '../../interface';

export interface ComboboxState {
    items: ComboboxItem[];
    filteredItems: ComboboxItem[];
    open: boolean;
    selectedItem: ComboboxItem;
    inputValue: string;
    currentNavigatedIndex: number;
}

export function findSelectedItem(state: ComboboxState): ComboboxItem | undefined {
    let selectedItem = state.items.find((item) => item.selected);
    if (state.inputValue) {
        selectedItem = state.items.filter((i) => i.label === state.inputValue).shift();
    }
    return selectedItem;
}

export function isUserNavigating(state: ComboboxState): boolean {
    return state.open && state.currentNavigatedIndex > -1;
}

export function openDropdownOrCloseWhenNotAllowed(
    state: ComboboxState,
    disabled: boolean,
    viewOnly: boolean,
    readOnly: boolean,
) {
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

export function navigateToNextItem(state: ComboboxState, direction: 'up' | 'down') {
    //if we have a selected item we just jump there on the first press of an arrow key
    if (state.selectedItem && state.currentNavigatedIndex === -1) {
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
    state.currentNavigatedIndex = state.filteredItems.indexOf(state.selectedItem);
}

export function selectedHasIcon(state: ComboboxState): boolean {
    return state.selectedItem?.iconName || state.selectedItem?.iconSrc ? true : false;
}
