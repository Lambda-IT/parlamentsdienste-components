import notes from './readme.md';

export default {
    title: 'Dialogs/Modal',
    parameters: {
        actions: {
            handles: ['pd-closed', 'pd-backdrop', 'pd-escape'],
        },
        notes,
    },
    argTypes: {
        config: { control: { type: 'object' } },
    },
};

export const Modal = (args) => {
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

Modal.args = {
    config: {
        title: 'Modal Title',
        minWidth: '400px',
        maxWidth: 500,
        backdropVisible: true,
    },
};
