import notes from './readme.md';

export default {
    title: 'Container',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-container></pd-container>
    `;
};
