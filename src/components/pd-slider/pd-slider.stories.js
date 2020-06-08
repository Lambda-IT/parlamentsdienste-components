import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Forms + Inputs|Slider',
    decorators: [withActions('pd-input', 'pd-change'), withKnobs()],
    parameters: {
        notes,
    },
};

export const slider = () => {
    return `
        <pd-slider class="m-3"></pd-slider>
    `;
};
