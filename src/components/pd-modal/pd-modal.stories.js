import notes from './readme.md';

export default {
    title: 'Modal',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-modal></pd-modal>
    `;
};
