import notes from './readme.md';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Checkbox',
    parameters: {
        notes,
        decorators: [withActions('pdChanged')],
    },
};

export const primary = () => {
    return `
        <pd-checkbox text="checkbox"></pd-checkbox>
    `;
};
