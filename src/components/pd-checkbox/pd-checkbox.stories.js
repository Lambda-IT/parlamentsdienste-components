import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Checkbox',
    parameters: {
        actions: {
            handles: ['pd-checked'],
        },
        notes,
    },
    argTypes: {
        checked: { control: { type: 'boolean' } },
        text: { control: { type: 'text' } },
        disabled: { control: { type: 'boolean' } },
        readonly: { control: { type: 'boolean' } },
        required: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
        isIndeterminate: { control: { type: 'boolean' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Checkbox = (args) => `
        <pd-checkbox class="m-3"
        ${args.checked ? 'checked' : ''}
        text="${args.text}"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        ${args.required ? 'required' : ''}
        ${args.error ? 'error' : ''}
        ${args.isIndeterminate ? 'is-indeterminate' : ''}
        ></pd-checkbox>
`;

Checkbox.args = {
    disabled: false,
    text: 'checkbox',
    readonly: false,
    required: false,
    error: false,
    checked: false,
    isIndeterminate: false,
};
