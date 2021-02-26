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
        highlight: { control: { type: 'boolean' } },
        items: { control: { type: 'array' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const combobox = (args) => {
    const combobox = document.createElement('pd-combobox');
    combobox.classList = ['m-3'];
    combobox.items = args.items;
    combobox.disabled = args.disabled;
    combobox.label = args.label;
    combobox.placeholder = args.placeholder;
    combobox.highlight = args.highlight;

    return combobox;
};

combobox.args = {
    label: 'Label Text',
    placeholder: 'Type for examples...',
    disabled: false,
    highlight: false,
    items: ['Sample Result 1', 'Sample Result 2', 'Sample Result 3', 'Sample Result 4', 'Sample Result 5'],
};
