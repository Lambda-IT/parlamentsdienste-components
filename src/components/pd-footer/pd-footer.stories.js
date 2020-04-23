import notes from './readme.md';

export default {
    title: 'Footer',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-footer></pd-footer>
    `;
};
