import type { Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    label: 'Label',
    value: 'Text',
    helperText: 'Helper Text',
    placeholder: 'Placehoder',
    showCharacterCount: false,
    characterCountText: 'Max 10 characters',
    maxLength: 0,
    disabled: false,
    readonly: false,
    viewonly: false,
    required: false,
    error: false,
};

type InputArgs = typeof defaultArgs;

const meta: Meta<InputArgs> = {
    title: 'Forms + Inputs/Input',
    args: defaultArgs,
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
        ${args.showCharacterCount ? 'show-character-count' : ''}
        ${args.characterCountText ? `character-count-text="${args.characterCountText}"` : ''}
        ${args.maxLength ? `maxlength="${args.maxLength}"` : ''}
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        ${args.viewonly ? 'view-only' : ''}
        ${args.required ? 'required' : ''}
        ${args.error ? 'error' : ''}></pd-input>
        `;
};

const events = ['pd-input', 'pd-change', 'pd-blur', 'pd-focus'];
addEventlisteners('pd-input', events);

export const Input: StoryObj = {
    render: input,
};
