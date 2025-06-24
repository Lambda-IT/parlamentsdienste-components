import type { Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    disabled: false,
    readonly: false,
    checked: false,
};

type ChipArgs = typeof defaultArgs;

const meta: Meta = {
    title: 'Interactions/Chip',
    args: defaultArgs,
};

export default meta;

const events = ['click', 'removeChip', 'checkChip'];
addEventlisteners('pd-chip', events, { eventType: 'PointerEvent' });

///////////////////////////////////////////////////////////////////////////

const states = (args: ChipArgs) => `
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

export const States: StoryObj<ChipArgs> = {
    render: states,
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
};
