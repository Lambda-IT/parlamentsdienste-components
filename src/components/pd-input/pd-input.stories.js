import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Input',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change', 'pd-blur', 'pd-focus'],
        },
        notes,
    },
    argTypes: {
        label: { control: { type: 'text' } },
        value: { control: { type: 'text' } },
        helperText: { control: { type: 'text' } },
        placeholder: { control: { type: 'text' } },
        disabled: { control: { type: 'boolean' } },
        readonly: { control: { type: 'boolean' } },
        viewonly: { control: { type: 'boolean' } },
        required: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Input = (args) => {
    return `
        <pd-input class="m-3"
        label="${args.label}"
        placeholder="${args.placeholder}"
        helper-text="${args.helperText}"
        value="${args.value}"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        ${args.viewonly ? 'view-only' : ''}
        ${args.required ? 'required' : ''}
        ${args.error ? 'error' : ''}></pd-input>
    `;
};

Input.args = {
    label: 'Label',
    value: 'Text',
    helperText: 'Helper Text',
    placeholder: 'Placehoder',
    disabled: false,
    readonly: false,
    viewonly: false,
    required: false,
    error: false,
};
