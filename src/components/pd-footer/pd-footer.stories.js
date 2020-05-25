import notes from './readme.md';

export default {
    title: 'Layout|Footer',
    parameters: {
        notes,
    },
};

export const basic = () => {
    return `
        <pd-footer></pd-footer>
    `;
};
