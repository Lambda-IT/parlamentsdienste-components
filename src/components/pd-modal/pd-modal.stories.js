import notes from './readme.md';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Modal',
    parameters: {
        notes,
        decorators: [withActions('pd-on-closed')],
    },
};

export const primary = () => {
    return `
        <pd-modal></pd-modal>
    `;
};
