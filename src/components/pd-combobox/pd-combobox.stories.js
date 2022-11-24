import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Combobox',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change', 'pd-combobox', 'pd-focus', 'pd-blur'],
        },
        notes,
    },
    argTypes: {
        label: { control: { type: 'text' } },
        placeholder: { control: { type: 'text' } },
        disabled: { control: { type: 'boolean' } },
        viewonly: { control: { type: 'boolean' } },
        readonly: { control: { type: 'boolean' } },
        selectable: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
        required: { control: { type: 'boolean' } },
        highlight: { control: { type: 'boolean' } },
        items: { control: { type: 'object' } },
        value: { control: { type: 'text' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const combobox = (args) => {
    const elements = document.createElement('div');
    const c1 = document.createElement('pd-combobox');
    c1.classList = ['m-3'];
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

    elements.append(c1);

    const c2 = document.createElement('pd-combobox');
    c2.classList = ['m-3'];
    c2.items = args.items;
    c2.disabled = args.disabled;
    c2.readonly = args.readonly;
    c2.viewOnly = args.viewonly;
    c2.selectable = true;
    c2.error = args.error;
    c2.required = args.required;
    c2.label = args.label + ' (selectable)';
    c2.placeholder = args.placeholder;
    c2.highlight = args.highlight;
    c2.value = args.value;

    elements.append(c1);
    elements.append(c2);

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
    items: [
        { id: '1', label: 'Mitteilungen und Verschiedenes', value: 'a1' },
        { id: '2', label: 'Pa.Iv. Semadeni. Fakultatives', value: 'a2' },
        { id: '3', label: 'Referendum für die Unterstützung Olympischer Spiele durch den Bund', value: 'a3' },
        { id: '4', label: 'Gesamtkonzeption, Präsentation und Diskussion', value: 'a4' },
        { id: '5', label: 'Controlling, Präsentation, Diskussion und Beschluss', value: 'a5' },
        { id: '6', label: 'Mitteilungen', value: 'a6', selected: true },
        { id: '7', label: 'Aktuelles aus dem VBS, Information und Diskussion', value: 'a7' },
        { id: '8', label: 'NKF. Evaluationsverfahren, Information und Diskussion', value: 'a8' },
        { id: '9', label: 'Politisches Controlling, Präsentation, Diskussion und Beschluss', value: 'a9' },
    ],
};
