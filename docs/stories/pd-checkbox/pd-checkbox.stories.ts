import type { StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    disabled: false,
    text: 'checkbox',
    readonly: false,
    required: false,
    error: false,
    checked: false,
    isIndeterminate: false,
};

// type CheckboxArgs = typeof defaultArgs;

const meta = {
    title: 'Forms + Inputs/Checkbox',
    args: defaultArgs,
};

export default meta;

const events = ['pd-checked'];
addEventlisteners('pd-checkbox', events, { eventType: 'PointerEvent' });

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
};
