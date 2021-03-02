import notes from './readme.md';

export default {
    title: 'Interactions/Chip',
    parameters: {
        actions: {
            handles: ['click', 'removeChip', 'checkChip'],
        },
        notes,
    },
    argTypes: {
        disabled: { control: { type: 'boolean' } },
        checked: { control: { type: 'boolean' } },
    },
};

///////////////////////////////////////////////////////////////////////////

const StatesStory = (args) => `
    <pd-chip class="mt-3 ml-3" ${args.disabled ? 'disabled' : ''} ${args.checked ? 'checked' : ''}>Text Chip</pd-chip>
    <pd-chip class="mt-3" ${args.disabled ? 'disabled' : ''} ${
    args.checked ? 'checked' : ''
} type="toggle">Toggle Chip</pd-chip>
    <pd-chip class="mt-3" ${args.disabled ? 'disabled' : ''} ${
    args.checked ? 'checked' : ''
} type="filter">Filter Chip</pd-chip>
`;

export const States = StatesStory.bind({});

States.args = {
    disabled: false,
    checked: false,
};

States.argTypes = {
    disabled: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
};

///////////////////////////////////////////////////////////////////////////

const GroupStory = (args) => `
    <pd-button-group class="m-3">
        <pd-chip class="mt-3 ml-3" ${args.disabled ? 'disabled' : ''} >Chip 1</pd-chip>
        <pd-chip class="mt-3 ml-3" ${args.disabled ? 'disabled' : ''} >Chip 2</pd-chip>
        <pd-chip class="mt-3 ml-3" ${args.disabled ? 'disabled' : ''} >Chip 3</pd-chip>
    </pd-button-group>
`;

export const Group = GroupStory.bind({});

Group.args = {
    ...States.args,
};

Group.argTypes = {
    ...States.argTypes,
};
