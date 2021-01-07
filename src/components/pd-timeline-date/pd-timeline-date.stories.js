import notes from './readme.md';

export default {
    title: 'Interactions/Timeline Date',
    parameters: {
        notes,
    },
    argTypes: {
        date: { control: { type: 'text' } },
        header: { control: { type: 'text' } },
        href: { control: { type: 'text' } },
        target: { control: { type: 'select', options: ['_blank', ''] } },
        content: { control: { type: 'text' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Timeline = (args) => `
    <pd-timeline-date class="m-3" date="${args.date}" header="${args.header}" href="${args.href}" target="${args.target}">
        <span>${args.content}<span>
    </pd-timeline-date>
`;

Timeline.args = {
    date: 'date',
    header: 'header',
    href: 'http://www.lambda-it.ch',
    target: '_blank',
    content: 'Content text',
};
