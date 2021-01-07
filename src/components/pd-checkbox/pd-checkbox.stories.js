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
        checked: { control: { type: 'boolean' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Checkbox = (args) => `
        <pd-checkbox class="m-3" ${args.disabled ? 'disabled' : ''} 
        ${args.checked ? 'checked' : ''} text="checkbox"></pd-checkbox>
`;

Checkbox.args = {
    disabled: false,
    checked: false,
};
