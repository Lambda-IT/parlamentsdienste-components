import notes from './readme.md';
import { radios, withKnobs, number } from '@storybook/addon-knobs';

export default {
    title: 'Progress-bar',
    decorators: [withKnobs()],
    parameters: {
        notes,
    },
};

export const primary = () => {
    const value = radios(
        'value',
        { '0%': '0', '25%': '0.25', '33.33333%': '0.33333', '50%': '0.5', '75%': '0.75', '100%': '1' },
        0.25,
    );

    const striped = radios('striped', { yes: 'striped', no: '' }, '');

    const label = radios('label', { yes: 'label', no: '' }, '');

    const decimals = number('decimals', 2);

    return `
        <pd-progress-bar class="m-3" ${striped} ${label} decimals="${decimals}" color="primary" value=${value}></pd-progress-bar>
        <pd-progress-bar class="m-3" ${striped} ${label} decimals="${decimals}" color="success" value=${value}></pd-progress-bar>
        <pd-progress-bar class="m-3" ${striped} ${label} decimals="${decimals}" color="danger" value=${value}></pd-progress-bar>
        <pd-progress-bar class="m-3" ${striped} ${label} decimals="${decimals}" color="warning" value=${value}></pd-progress-bar>
        <pd-progress-bar class="m-3" ${striped} ${label} decimals="${decimals}" color="info" value=${value}></pd-progress-bar>
    `;
};
