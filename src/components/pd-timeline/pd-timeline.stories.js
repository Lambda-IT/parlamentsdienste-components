import notes from './readme.md';

export default {
    title: 'Timeline',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-timeline></pd-timeline>
    `;
};
