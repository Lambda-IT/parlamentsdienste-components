// import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Combobox',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change', 'pd-combobox', 'pd-focus', 'pd-blur'],
        },
        // notes,
    },
    argTypes: {
        label: { control: { type: 'text' } },
        placeholder: { control: { type: 'text' } },
        disabled: { control: { type: 'boolean' } },
        viewonly: { control: { type: 'boolean' } },
        readonly: { control: { type: 'boolean' } },
        selectable: { control: { type: 'boolean' } },
        mulitselect: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
        required: { control: { type: 'boolean' } },
        highlight: { control: { type: 'boolean' } },
        items: { control: { type: 'object' } },
        value: { control: { type: 'text' } },
        emptyItem: { control: { type: 'boolean' } },
        emptyItemData: { control: { type: 'object' } },
        disableFilter: { control: { type: 'boolean' } },
        itemCount: { control: { type: 'number' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const combobox = args => {
    const elements = document.createElement('div');
    const c1 = document.createElement('pd-combobox');
    c1.classList.add('m-3');
    c1.items = args.items;
    c1.disabled = args.disabled;
    c1.readonly = args.readonly;
    c1.viewOnly = args.viewonly;
    c1.selectable = args.selectable;
    c1.error = args.error;
    c1.required = args.required;
    c1.label = args.label;
    c1.placeholder = args.placeholder;
    c1.highlight = args.highlight;
    c1.value = args.value;
    c1.emptyItem = args.emptyItem;
    c1.emptyItemData = args.emptyItemData;
    c1.disableFilter = args.disableFilter;
    c1.itemCount = args.itemCount;

    elements.append(c1);

    const c2 = document.createElement('pd-combobox');
    c2.classList.add('m-3');
    c2.items = args.items;
    c2.disabled = args.disabled;
    c2.readonly = args.readonly;
    c2.viewOnly = args.viewonly;
    c2.selectable = true;
    c2.multiselect = false;
    c2.error = args.error;
    c2.required = args.required;
    c2.label = args.label + ' (selectable)';
    c2.placeholder = args.placeholder;
    c2.highlight = args.highlight;
    c2.value = args.value;
    c2.emptyItem = args.emptyItem;
    c2.emptyItemData = args.emptyItemData;
    c2.disableFilter = args.disableFilter;
    c2.itemCount = args.itemCount;

    elements.append(c2);

    const c3 = document.createElement('pd-combobox');
    c3.classList.add('m-3');
    c3.items = args.items;
    c3.disabled = args.disabled;
    c3.readonly = args.readonly;
    c3.viewOnly = args.viewonly;
    c3.selectable = false;
    c3.multiselect = true;
    c3.error = args.error;
    c3.required = args.required;
    c3.label = args.label + ' (mulitselect)';
    c3.placeholder = args.placeholder;
    c3.highlight = args.highlight;
    c3.value = args.value;
    c3.emptyItem = args.emptyItem;
    c3.emptyItemData = args.emptyItemData;
    c3.disableFilter = args.disableFilter;
    c3.itemCount = args.itemCount;

    elements.append(c3);

    return elements;
};

combobox.args = {
    label: 'Label Text',
    placeholder: 'Type for examples...',
    disabled: false,
    readonly: false,
    viewonly: false,
    selectable: false,
    error: false,
    required: false,
    highlight: false,
    value: '',
    emptyItem: false,
    emptyItemData: {
        id: '0',
        label: '-',
        value: null,
    },
    disableFilter: false,
    itemCount: 5,
    items: [
        { id: '1', label: 'Mitteilungen und Verschiedenes', value: 'a1' },
        { id: '2', label: 'Pa.Iv. Semadeni. Fakultatives', value: 'a2' },
        {
            id: '3',
            label: 'Referendum für die Unterstützung Olympischer Spiele durch den Bund',
            value: 'a3',
            iconName: 'group',
        },
        { id: '4', label: 'Gesamtkonzeption, Präsentation und Diskussion', value: 'a4' },
        { id: '5', label: 'Controlling, Präsentation, Diskussion und Beschluss', value: 'a5', iconName: 'profile' },
        { id: '6', label: 'Mitteilungen', value: 'a6', selected: true, iconName: 'message' },
        { id: '7', label: 'Aktuelles aus dem VBS, Information und Diskussion', value: 'a7' },
        { id: '8', label: 'NKF. Evaluationsverfahren, Information und Diskussion', value: 'a8' },
        { id: '9', label: 'Politisches Controlling, Präsentation, Diskussion und Beschluss', value: 'a9' },
    ],
};
