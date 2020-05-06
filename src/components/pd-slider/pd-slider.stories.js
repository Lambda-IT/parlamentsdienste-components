import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Slider',
    decorators: [withActions('pdOnInput', 'pdOnChange'), withKnobs()],
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-slider class="m-3"></pd-slider>
    `;
};
