import notes from './readme.md';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Interactions|Timeline Date',
    decorators: [withKnobs()],
    parameters: {
        notes,
    },
};

export const timeline = () => {
    const date = text('date', 'date');
    const header = text('header', 'header');
    const href = text('href', 'http://www.lambda-it.ch');
    const target = text('href', '_blank');
    const content = text('content', 'Content text');
    return `
        <pd-timeline-date class="m-3" date="${date}" header="${header}" href="${href}" target="${target}">
            <span>${content}<span>
        </pd-timeline-date>
    `;
};
