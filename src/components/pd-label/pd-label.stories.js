import notes from './readme.md';

export default {
    title: 'Interactions/Label',
    parameters: {
        actions: {
            handles: [],
        },
        notes,
    },
    argTypes: {
        color: { control: { type: 'color' } },
        text: { control: { type: 'text' } },
    },
};

///////////////////////////////////////////////////////////////////////////

const StatesStory = (args) => `
    <pd-label class="mb-2" color="${args.color}">${args.text}</pd-label>
    <pd-label has-dot color="${args.color}">${args.text}</pd-label>
`;

export const States = StatesStory.bind({});

States.args = {
    color: '#12B886',
    text: 'This is a label',
};
