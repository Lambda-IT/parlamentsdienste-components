import notes from './readme.md';

export default {
    title: 'Navbar',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-navbar></pd-navbar>
    `;
};
