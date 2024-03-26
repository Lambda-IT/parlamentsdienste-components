import type { Meta, StoryObj } from '@storybook/html';

const defaultArgs = {
    date: 'date',
    header: 'header',
    href: 'http://www.lambda-it.ch',
    target: '_blank',
    content: 'Content text',
};

type TimelineDateArgs = typeof defaultArgs;

const defaultArgTypes = {
    target: { control: { type: 'select' }, options: ['_blank', ''] },
};

const meta: Meta<TimelineDateArgs> = {
    title: 'Interactions/Timeline Date',
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
    args: defaultArgs,
    argTypes: defaultArgTypes,
};
