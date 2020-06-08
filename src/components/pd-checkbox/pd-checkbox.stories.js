import notes from './readme.md';
import { withActions } from '@storybook/addon-actions';
import { withKnobs, radios } from '@storybook/addon-knobs';

export default {
    title: 'Forms + Inputs|Checkbox',
    parameters: {
        notes,
        decorators: [withKnobs(), withActions('pd-checked')],
    },
};

export const checkbox = () => {
    const checked = radios('checked', { yes: 'checked', no: '' }, '');
    const disabled = radios('disabled', { yes: 'disabled', no: '' }, '');

    return `
        <pd-checkbox class="m-3" ${disabled} ${checked} text="checkbox"></pd-checkbox>
    `;
};
