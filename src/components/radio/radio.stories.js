import notes from './readme.md';

export default {
    title: 'Radio',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-radio>Radio Button</pd-radio>
    `;
};
