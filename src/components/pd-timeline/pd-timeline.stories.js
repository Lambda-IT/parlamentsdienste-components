import notes from './readme.md';

export default {
    title: 'Interactions|Timeline',
    parameters: {
        notes,
    },
};

export const timeline = () => {
    return `
        <pd-timeline></pd-timeline>
    `;
};
