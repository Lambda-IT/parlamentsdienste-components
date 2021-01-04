import notes from './readme.md';
import { text, radios, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Forms + Inputs/Input',
    decorators: [withActions('pd-input', 'pd-change', 'pd-blur', 'pd-focus'), withKnobs()],
    parameters: {
        notes,
    },
};

export const input = () => {
    const label = text('label', 'Label');
    const value = text('value', 'Text');
    const helperText = text('helper-text', 'Helper Text');
    const placeholder = text('placeholder', 'placeholder');
    const disabled = radios('disabled', { yes: 'disabled', no: '' }, '');
    const error = radios('error', { yes: 'error', no: '' }, '');
    return `
        <pd-input class="m-3" label="${label}" placeholder="${placeholder}" helper-text="${helperText}" value=${value} ${disabled} ${error}></pd-input>
    `;
};
