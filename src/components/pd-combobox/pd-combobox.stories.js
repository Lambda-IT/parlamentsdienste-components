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
        readonly: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
        required: { control: { type: 'boolean' } },
        highlight: { control: { type: 'boolean' } },
        items: { control: { type: 'object' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const combobox = (args) => {
    const combobox = document.createElement('pd-combobox');
    combobox.classList = ['m-3'];
    combobox.items = args.items;
    combobox.disabled = args.disabled;
    combobox.readonly = args.readonly;
    combobox.error = args.error;
    combobox.required = args.required;
    combobox.label = args.label;
    combobox.placeholder = args.placeholder;
    combobox.highlight = args.highlight;

    return combobox;
};

combobox.args = {
    label: 'Label Text',
    placeholder: 'Type for examples...',
    disabled: false,
    readonly: false,
    error: false,
    required: false,
    highlight: false,
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
