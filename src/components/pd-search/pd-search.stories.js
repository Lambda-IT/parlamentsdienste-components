import notes from './readme.md';
import { withKnobs, radios } from '@storybook/addon-knobs';

export default {
    title: 'Search',
    decorators: [withKnobs()],
    parameters: {
        notes,
    },
};

export const primary = () => {
    const open = radios('open', { yes: 'open', no: '' }, '');
    return `
        <pd-search ${open}></pd-search>
    `;
};
