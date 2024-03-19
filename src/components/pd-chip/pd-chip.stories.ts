import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    disabled: false,
    readonly: false,
    checked: false,
};

type chipArgs = typeof defaultArgs;

const meta: Meta<chipArgs> = {
    title: 'Interactions/Chip',
    parameters: {
        actions: {
            handles: ['click', 'removeChip', 'checkChip'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const states = (args: chipArgs) => `
<pd-chip class="mt-3 ml-3" ${args.disabled ? 'disabled' : ''} ${args.readonly ? 'readonly' : ''} ${
    args.checked ? 'checked' : ''
}>Text Chip</pd-chip>
<pd-chip class="mt-3" ${args.disabled ? 'disabled' : ''} ${args.readonly ? 'readonly' : ''} ${
    args.checked ? 'checked' : ''
} type="toggle">Toggle Chip</pd-chip>
<pd-chip class="mt-3" ${args.disabled ? 'disabled' : ''} ${args.readonly ? 'readonly' : ''} ${
    args.checked ? 'checked' : ''
} type="filter">Filter Chip</pd-chip>
`;

export const States: StoryObj = {
    render: states,
    args: defaultArgs,
};

///////////////////////////////////////////////////////////////////////////

const group = args => `
    <pd-button-group class="m-3">
        <pd-chip class="mt-3 ml-3"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        >Chip 1</pd-chip>
        <pd-chip class="mt-3 ml-3"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        >Chip 2</pd-chip>
        <pd-chip class="mt-3 ml-3"
        ${args.disabled ? 'disabled' : ''}
        ${args.readonly ? 'readonly' : ''}
        >Chip 3</pd-chip>
    </pd-button-group>
`;

export const Group: StoryObj = {
    render: group,
    args: defaultArgs,
};
