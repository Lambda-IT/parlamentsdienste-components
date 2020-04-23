import notes from './readme.md';

export default {
    title: 'Datepicker',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-datepicker></pd-datepicker>
    `;
};
