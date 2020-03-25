import notes from './readme.md';

export default {
    title: 'Tag',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-tag></pd-tag>
    `;
};
