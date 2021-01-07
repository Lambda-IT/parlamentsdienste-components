import notes from './readme.md';
import { withKnobs, radios } from '@storybook/addon-knobs';

export default {
    title: 'Forms + Inputs/Checkbox',
    parameters: {
        actions: {
            handles: ['pd-checked'],
        },
        notes,
        decorators: [withKnobs()],
    },
};

export const checkbox = () => {
    const checked = radios('checked', { yes: 'checked', no: '' }, '');
    const disabled = radios('disabled', { yes: 'disabled', no: '' }, '');

    return `
        <pd-checkbox class="m-3" ${disabled} ${checked} text="checkbox"></pd-checkbox>
    `;
};
