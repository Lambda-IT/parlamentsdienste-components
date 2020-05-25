import notes from './readme.md';

export default {
    title: 'Forms + Inputs|Datepicker',
    parameters: {
        notes,
    },
};

export const basic = () => {
    return `
        <pd-datepicker class="m-3"></pd-datepicker>
    `;
};
