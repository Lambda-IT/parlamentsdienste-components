import notes from './readme.md';
import { radios, withKnobs } from '@storybook/addon-knobs';

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

    return `
        <pd-progress-bar value=${value}></pd-progress-bar>
    `;
};
