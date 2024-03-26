import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    items: [
        { id: '1', label: 'Name', value: 'name', sort: 'asc', selected: true },
        { id: '2', label: 'Dokumententitel', value: 'documentTitle', sort: 'desc' },
        { id: '3', label: 'Änderungsdatum', value: 'changedAt', sort: 'asc' },
        { id: '4', label: 'Erstellungsdatum', value: 'createdAt', sort: 'asc' },
        { id: '6', label: 'Author/in', value: 'author', sort: 'asc' },
    ],
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

const defaultArgTypes = {
    items: { controls: { type: 'object' } },
    reverseItemData: { controls: { type: 'object' } },
    emptyItemData: { controls: { type: 'object' } },
};

const meta: Meta<SortArgs> = {
    title: 'Interactions/Sort',
    parameters: {
        actions: {
            handles: ['pd-change', 'pd-reverse'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const sort = args => {
    const pdSort = document.createElement('pd-sort');
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
    args: defaultArgs,
    argTypes: defaultArgTypes,
};
