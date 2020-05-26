import notes from './readme.md';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Dialogs|Toast',
    decorators: [withKnobs(), withActions('pd-on-closed')],
    parameters: {
        notes,
    },
};

export const toast = () => {
    const header = text('header', 'Toast Title');
    const info = text('info', '11 minutes ago');
    const body = text('body', 'Toast body text goes here');
    const size = radios('size', ['large', 'small'], 'large');

    return `
    <pd-toast class="m-3" header="${header}" info="${info}" size="${size}">
        ${body}
    </pd-toast>
    `;
};
