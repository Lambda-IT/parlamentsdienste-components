import notes from './readme.md';

export default {
    title: 'Card',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-card></pd-card>
    `;
};
