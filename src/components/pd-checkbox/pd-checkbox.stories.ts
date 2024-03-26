import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    disabled: false,
    text: 'checkbox',
    readonly: false,
    required: false,
    error: false,
    checked: false,
    isIndeterminate: false,
};

type ButtonArgs = typeof defaultArgs;

const meta: Meta<ButtonArgs> = {
    title: 'Forms + Inputs/Checkbox',
    parameters: {
        actions: {
            handles: ['pd-checked'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const checkbox = args => `
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

export const Checkbox: StoryObj = {
    render: checkbox,
    args: defaultArgs,
};
