import notes from './readme.md';

export default {
    title: 'Checkbox',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-checkbox text="checkbox"></pd-checkbox>
    `;
};
