import type { Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    config: {
        title: 'Modal Title',
        backdropVisible: true,
        zIndex: '10000',
    },
};

type ModalArgs = typeof defaultArgs;

const meta: Meta<ModalArgs> = {
    title: 'Dialogs/Modal',
    args: defaultArgs,
    argTypes: {
        config: { control: { type: 'object' } },
    },
};

export default meta;

const events = ['pd-closed', 'pd-backdrop', 'pd-escape'];
addEventlisteners('pd-modal', events);

///////////////////////////////////////////////////////////////////////////

const modal = (args: ModalArgs) => {
    const modal = document.createElement('pd-modal') as HTMLPdModalElement;
    modal.config = args.config;
    modal.innerHTML = `
    <p>Modal Content</p>
    <div slot="footer">
        <pd-button outline>Cancel</pd-button>
        <pd-button>Save</pd-button>
    </div>`;

    return modal;
};

export const Modal: StoryObj<ModalArgs> = {
    render: modal,
};
