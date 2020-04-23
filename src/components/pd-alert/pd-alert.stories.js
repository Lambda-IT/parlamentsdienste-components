import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Alert',
    decorators: [withActions('pd-alert-closed'), withKnobs()],
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `<pd-alert closable>A text to show on this alert</pd-alert>`;
};
