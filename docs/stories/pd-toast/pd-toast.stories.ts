import type { Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    header: 'Toast Title',
    info: '11 minutes ago',
    body: 'Toast body text goes here',
    size: 'large',
};

type ToastArgs = typeof defaultArgs;

const meta: Meta = {
    title: 'Dialogs/Toast',
};

export default meta;

const events = ['pd-closed'];
addEventlisteners('pd-toast', events);

const modal = (args: ToastArgs) => `
<pd-toast class="m-3" header="${args.header}" info="${args.info}" size="${args.size}">${args.body}</pd-toast>
`;

export const Toast: StoryObj = {
    render: modal,
    args: defaultArgs,
    argTypes: {
        size: { control: { type: 'select' }, options: ['large', 'small'] },
    },
};
