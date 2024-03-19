import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    header: 'Toast Title',
    info: '11 minutes ago',
    body: 'Toast body text goes here',
    size: 'large',
};

type ToastArgs = typeof defaultArgs;

const meta: Meta = {
    title: 'Dialogs/Toast',
    parameters: {
        actions: {
            handles: ['pd-closed'],
        },
    },
    decorators: [withActions],
};

export default meta;

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
