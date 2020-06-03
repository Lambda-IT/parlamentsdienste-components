import notes from './readme.md';

export default {
    title: 'Interactions|Timeline Date',
    parameters: {
        notes,
    },
};

export const timeline = () => {
    return `
        <pd-timeline-date></pd-timeline-date>
    `;
};
