import { ComboboxItem } from '../../interface';

export interface ComboboxState {
    items: ComboboxItem[];
    filteredItems: ComboboxItem[];
    open: boolean;
    selectedItem: ComboboxItem;
    inputValue: string;
    currentNavigatedIndex: number;
}

export function findSelectedItemFromInitialItemsOrInputValue(state: ComboboxState): ComboboxItem | undefined {
    let selectedItem = state.items.find((item) => item.selected);
    if (state.inputValue) {
        selectedItem = state.items.filter((i) => i.label === state.inputValue).shift();
    }
    return selectedItem;
}

export function getUserIsNavigating(state: ComboboxState): boolean {
    return state.open && state.currentNavigatedIndex > -1;
}

export function openDropdownIfResults(
    state: ComboboxState,
    disabled: boolean,
    viewOnly: boolean,
    readOnly: boolean,
    closeDropdown = false,
) {
    if (!state.open && state.filteredItems.length > 0 && !disabled && !viewOnly && !readOnly) {
        state.open = true;
    } else if (closeDropdown) {
        state.open = false;
    }
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
