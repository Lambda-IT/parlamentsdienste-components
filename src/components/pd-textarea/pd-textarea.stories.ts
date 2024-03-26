import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    label: 'Label',
    value: 'Text',
    helperText: 'Helper Text',
    placeholder: 'Placehoder',
    disabled: false,
    readonly: false,
    viewonly: false,
    required: false,
    autoGrow: true,
    error: false,
};

type TextareaArgs = typeof defaultArgs;

const meta: Meta<TextareaArgs> = {
    title: 'Forms + Inputs/Textarea',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change', 'pd-blur', 'pd-focus'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const textarea = args => {
    return `
        <pd-textarea class="m-3"
        label="${args.label}"
        placeholder="${args.placeholder}"
        helper-text="${args.helperText}"
        value="${args.value}"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        ${args.viewonly ? 'view-only' : ''}
        ${args.required ? 'required' : ''}
        ${args.autoGrow ? 'auto-grow' : ''}
        ${args.error ? 'error' : ''}></pd-textarea>
    `;
};

export const Textarea: StoryObj = {
    render: textarea,
    args: defaultArgs,
};
