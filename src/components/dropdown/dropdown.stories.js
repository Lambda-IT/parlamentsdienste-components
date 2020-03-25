import notes from './readme.md';

export default {
    title: 'Dropdown',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-dropdown></pd-dropdown>
    `;
};
