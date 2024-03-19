import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    color: '#12B886',
    text: 'This is a label',
};

type LabelArgs = typeof defaultArgs;

const meta: Meta = {
    title: 'Interactions/Label',
    parameters: {
        actions: {
            handles: [],
        },
    },
    decorators: [withActions],
};

export default meta;

const states = (args: LabelArgs) => `
<pd-label class="mb-2" color="${args.color}">${args.text}</pd-label>
<pd-label>${args.text}</pd-label>
<pd-label has-dot color="${args.color}">${args.text}</pd-label>
`;

export const States: StoryObj = {
    render: states,
    args: defaultArgs,
    argTypes: {
        color: { control: { type: 'color' } },
    },
};
