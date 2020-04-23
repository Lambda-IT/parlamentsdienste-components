import notes from './readme.md';
import { text, radios, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Input',
    decorators: [withActions('pdInput', 'pdOnChange', 'pdOnBlur', 'pdOnFocus'), withKnobs()],
    parameters: {
        notes,
    },
};

export const primary = () => {
    const label = text('label', 'Label');
    const value = text('value', 'Text');
    const helperText = text('helper-text', 'Helper Text');
    const placeholder = text('placeholder', 'placeholder');
    const disabled = radios('disabled', { yes: 'disabled', no: '' }, '');
    const error = radios('error', { yes: 'error', no: '' }, '');
    return `
        <pd-input label="${label}" placeholder="${placeholder}" helper-text="${helperText}" value=${value} ${disabled} ${error}></pd-input>
    `;
};
