import notes from './readme.md';

export default {
    title: 'Notification',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-notification></pd-notification>
    `;
};
