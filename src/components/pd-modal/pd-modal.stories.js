import notes from './readme.md';

export default {
    title: 'Dialogs/Modal',
    parameters: {
        actions: {
            handles: ['pd-closed'],
        },
        notes,
    },
};

export const modal = () => {
    const config = {
        title: 'Modal Title',
        minWidth: '400px',
        maxWidth: 500,
        backdropVisible: true,
    };

    const openButton = document.createElement('pd-button');
    openButton.classList = 'm-3';
    openButton.innerHTML = 'open Modal';
    openButton.outline = true;

    const modal = document.createElement('pd-modal');
    modal.config = config;
    modal.open = true;
    modal.innerHTML = `
        <p>Modal Content</p>
        <div slot="footer">
            Modal Footer
        </div>
    `;

    openButton.addEventListener('click', () => {
        modal.open = true;
        document.body.append(modal);
    });

    return openButton;
};
