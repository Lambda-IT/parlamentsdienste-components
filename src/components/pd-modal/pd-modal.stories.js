import notes from './readme.md';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Dialogs|Modal',
    parameters: {
        notes,
        decorators: [withActions('pd-on-closed')],
    },
};

export const basic = () => {
    return `
        <pd-modal></pd-modal>
    `;
};
