import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    config: {
        title: 'Modal Title',
        backdropVisible: true,
    },
};

type ModalArgs = typeof defaultArgs;

const meta: Meta = {
    title: 'Dialogs/Modal',
    parameters: {
        actions: {
            handles: ['pd-closed', 'pd-backdrop', 'pd-escape'],
        },
    },
    decorators: [withActions],
};

export default meta;

const modal = (args: ModalArgs) => {
    const modal = document.createElement('pd-modal');
    modal.config = args.config;
    modal.innerHTML = `
    <p>Modal Content</p>
    <div slot="footer">
        <pd-button outline>Cancel</pd-button>
        <pd-button>Save</pd-button>
    </div>`;

    return modal;
};

export const Modal: StoryObj = {
    render: modal,
    args: defaultArgs,
    argTypes: {
        config: { control: { type: 'object' } },
    },
};
