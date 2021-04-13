import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Textarea',
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
        required: { control: { type: 'boolean' } },
        autoGrow: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Textarea = (args) => {
    return `
        <pd-textarea class="m-3"
        label="${args.label}"
        placeholder="${args.placeholder}"
        helper-text="${args.helperText}"
        value="${args.value}"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        ${args.required ? 'required' : ''}
        ${args.autoGrow ? 'auto-grow' : ''}
        ${args.error ? 'error' : ''}></pd-textarea>
    `;
};

Textarea.args = {
    label: 'Label',
    value: 'Text',
    helperText: 'Helper Text',
    placeholder: 'Placehoder',
    disabled: false,
    readonly: false,
    required: false,
    autoGrow: true,
    error: false,
};
