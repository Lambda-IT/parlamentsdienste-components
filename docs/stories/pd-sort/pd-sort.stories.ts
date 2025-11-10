import { SortDropdownItem } from '@parlamentsdienste/pdcomponents-core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    items: [
        { id: '1', label: 'Name', value: 'name', sort: 'asc', selected: true },
        { id: '2', label: 'Dokumententitel', value: 'documentTitle', sort: 'desc' },
        { id: '3', label: 'Änderungsdatum', value: 'changedAt', sort: 'asc' },
        { id: '4', label: 'Erstellungsdatum', value: 'createdAt', sort: 'asc' },
        { id: '6', label: 'Author/in', value: 'author', sort: 'asc' },
    ] as SortDropdownItem[],
    disabled: false,
    reverseItem: true,
    reverseItemData: { label: 'Sort. Umkehren', selected: false },
    label: 'Sortieren nach:',
    placeholder: '',
    itemCount: 7,
    emptyItem: false,
    emptyItemData: { id: '0', label: '-', value: null, sort: null },
};

type SortArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    items: { controls: { type: 'object' } },
    reverseItemData: { controls: { type: 'object' } },
    emptyItemData: { controls: { type: 'object' } },
};

const meta: Meta<SortArgs> = {
    title: 'Interactions/Sort',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

const events = ['pd-change', 'pd-reverse'];
addEventlisteners('pd-sort', events);

///////////////////////////////////////////////////////////////////////////

const sort = (args: SortArgs) => {
    const pdSort = document.createElement('pd-sort') as HTMLPdSortElement;
    pdSort.label = args.label;
    pdSort.items = args.items;
    pdSort.disabled = args.disabled;
    pdSort.reverseItem = args.reverseItem;
    pdSort.reverseItemData = args.reverseItemData;
    pdSort.placeholder = args.placeholder;
    pdSort.itemCount = args.itemCount;
    pdSort.emptyItem = args.emptyItem;
    pdSort.emptyItemData = args.emptyItemData;
    pdSort.classList.add('m-3');

    return pdSort;
};

export const Sort: StoryObj = {
    render: sort,
};
