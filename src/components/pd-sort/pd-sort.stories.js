import notes from './readme.md';

export default {
    title: 'Interactions/Sort',
    parameters: {
        actions: {
            handles: ['pd-change', 'pd-revert'],
        },
        notes,
    },
    argTypes: {
        label: { controls: { type: 'string' } },
        items: { controls: { type: 'object' } },
        disabled: { controls: { type: 'boolean' } },
        revertItem: { controls: { type: 'boolean' } },
        revertItemData: { controls: { type: 'object' } },
        label: { controls: { type: 'string' } },
        placeholder: { controls: { type: 'string' } },
        itemCount: { controls: { type: 'number' } },
        emptyItem: { controls: { type: 'boolean' } },
        emptyItemData: { controls: { type: 'object' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Sort = (args) => {
    const pdSort = document.createElement('pd-sort');
    pdSort.label = args.label;
    pdSort.items = args.items;
    pdSort.disabled = args.disabled;
    pdSort.revertItem = args.revertItem;
    pdSort.revertItemData = args.revertItemData;
    pdSort.placeholder = args.placeholder;
    pdSort.itemCount = args.itemCount;
    pdSort.emptyItem = args.emptyItem;
    pdSort.emptyItemData = args.emptyItemData;
    pdSort.classList = ['m-3'];

    return pdSort;
};

Sort.args = {
    items: [
        { id: '1', label: 'Name', value: 'name', sort: 'asc', selected: true },
        { id: '2', label: 'Dokumententitel', value: 'documentTitle', sort: 'desc' },
        { id: '3', label: 'Änderungsdatum', value: 'changedAt', sort: 'asc' },
        { id: '4', label: 'Erstellungsdatum', value: 'createdAt', sort: 'asc' },
        { id: '6', label: 'Author/in', value: 'author', sort: 'asc' },
    ],
    disabled: false,
    revertItem: true,
    revertItemData: { label: 'Sort. Umkehren', selected: false },
    label: 'Sortieren nach:',
    placeholder: '',
    itemCount: 7,
    emptyItem: false,
    emptyItemData: { id: '0', label: '-', value: null, sort: null },
};