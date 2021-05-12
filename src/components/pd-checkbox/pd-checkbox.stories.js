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
        disabled: { control: { type: 'boolean' } },
        readonly: { control: { type: 'boolean' } },
        required: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
        checked: { control: { type: 'boolean' } },
        isIndeterminate: { control: { type: 'boolean' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Checkbox = (args) => `
        <pd-checkbox class="m-3" ${args.disabled ? 'disabled' : ''} ${args.readonly ? 'readonly' : ''} ${
    args.required ? 'required' : ''
} ${args.error ? 'error' : ''}
        ${args.checked ? 'checked' : ''} ${
    args.isIndeterminate ? 'is-indeterminate' : ''
} text="checkbox"></pd-checkbox>
`;

Checkbox.args = {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    checked: false,
    isIndeterminate: false,
};
