import notes from './readme.md';

export default {
    title: 'Layout|Footer',
    parameters: {
        notes,
    },
};

export const footer = () => {
    return `
        <pd-footer></pd-footer>
    `;
};
