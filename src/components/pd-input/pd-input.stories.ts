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
    error: false,
};

type InputArgs = typeof defaultArgs;

const meta: Meta<InputArgs> = {
    title: 'Forms + Inputs/Input',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change', 'pd-blur', 'pd-focus'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const input = args => {
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

export const Input: StoryObj = {
    render: input,
    args: defaultArgs,
};
