import type { Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    label: 'Label',
    value: 'Text',
    helperText: 'Helper Text',
    placeholder: 'Placehoder',
    showCharacterCount: false,
    characterCountText: 'Max 100 characters',
    maxLength: 0,
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
    args: defaultArgs,
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const events = ['pd-change', 'pd-input', 'pd-focus', 'pd-blur'];
addEventlisteners('pd-textarea', events);

const textarea = (args: TextareaArgs) => {
    return `
        <pd-textarea class="m-3"
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
        ${args.autoGrow ? 'auto-grow' : ''}
        ${args.error ? 'error' : ''}></pd-textarea>
    `;
};

export const Textarea: StoryObj<TextareaArgs> = {
    render: textarea,
};
