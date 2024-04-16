import type { Meta, StoryObj } from '@storybook/html';

const defaultArgs = {
    name: 'error',
};

type AnimationArgs = typeof defaultArgs;

const defaultArgTypes = {
    name: { options: ['404', 'access-denied', 'error', 'under-construction'], control: { type: 'select' } },
};

const meta: Meta<AnimationArgs> = {
    title: 'Layout/Animation',
    parameters: {
        layout: 'centered',
    },
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const emtpyStates = args => {
    return `
    <div class="mt-3 ml-3 card" style="width: 100%; max-width: 28rem;">
        <pd-animation name="${args.name}"></pd-animation>
        </div>
    `;
};

export const EmptyStates: StoryObj = {
    render: emtpyStates,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};
