import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';

const defaultArgs = {
    date: 'date',
    header: 'header',
    href: 'http://www.lambda-it.ch',
    target: '_blank',
    content: 'Content text',
};

type TimelineDateArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    target: { control: { type: 'select' }, options: ['_blank', ''] },
};

const meta: Meta<TimelineDateArgs> = {
    title: 'Interactions/Timeline Date',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const timeline = args => `
    <pd-timeline-date class="m-3" date="${args.date}" header="${args.header}" href="${args.href}" target="${args.target}">
        <span>${args.content}<span>
    </pd-timeline-date>
`;

export const Timeline: StoryObj = {
    render: timeline,
};
