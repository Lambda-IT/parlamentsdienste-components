import type { Meta, StoryObj } from '@storybook/html-vite';

const defaultArgs = {
    color: '#12B886',
    text: 'This is a label',
};

type LabelArgs = typeof defaultArgs;

const meta: Meta<LabelArgs> = {
    title: 'Interactions/Label',
    args: defaultArgs,
    argTypes: {
        color: { control: { type: 'color' } },
    },
};

export default meta;

const states = (args: LabelArgs) => `
<pd-label class="mb-2" color="${args.color}">${args.text}</pd-label>
<pd-label>${args.text}</pd-label>
<pd-label has-dot color="${args.color}">${args.text}</pd-label>
`;

export const States: StoryObj<LabelArgs> = {
    render: states,
};
