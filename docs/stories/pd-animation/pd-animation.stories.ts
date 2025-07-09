import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';

const defaultArgs = {
    name: 'error',
};

type AnimationArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    name: { options: ['404', 'access-denied', 'error', 'under-construction'], control: { type: 'select' } },
};

const meta: Meta<AnimationArgs> = {
    title: 'Layout/Animation',
    parameters: {
        layout: 'centered',
    },
    argTypes: defaultArgTypes,
    args: defaultArgs,
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const emptyStates = (args: AnimationArgs) => {
    return `
    <div class="mt-3 ml-3 card" style="width: 100%; max-width: 28rem;">
        <pd-animation name="${args.name}"></pd-animation>
        </div>
    `;
};

export const EmptyStates: StoryObj<AnimationArgs> = {
    render: emptyStates,
};
