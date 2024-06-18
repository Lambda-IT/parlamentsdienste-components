import type { Meta, StoryObj } from '@storybook/html';

const defaultArgs = {
    height: '32px',
    width: '100%',
};

type SkeletonArgs = typeof defaultArgs;

// const defaultArgTypes = {
//     name: { options: ['404', 'access-denied', 'error', 'under-construction'], control: { type: 'select' } },
// };

const meta: Meta<SkeletonArgs> = {
    title: 'Layout/Skeleton',
    parameters: {
        layout: 'centered',
    },
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const skeleton = args => {
    return `
        <div style="width: 100%; max-width: 28rem; width: 20rem">
            <pd-skeleton width="${args.width}" height="${args.height}"></pd-animation>
        </div>
    `;
};

export const Skeleton: StoryObj = {
    render: skeleton,
    args: defaultArgs,
    // argTypes: defaultArgTypes,
};
