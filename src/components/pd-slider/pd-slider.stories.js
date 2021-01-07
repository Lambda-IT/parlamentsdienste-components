import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Forms + Inputs/Slider',
    decorators: [withKnobs()],
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change'],
        },
        notes,
    },
};

export const slider = () => {
    return `
        <pd-slider class="m-3"></pd-slider>
    `;
};
