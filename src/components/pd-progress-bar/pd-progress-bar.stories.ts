import type { Meta, StoryObj } from '@storybook/html';

const defaultArgs = {
    value: '0.25',
    striped: false,
    label: false,
    decimals: 2,
};

type ProgressBarArgs = typeof defaultArgs;

const defaultArgTypes = {
    value: {
        control: {
            type: 'select',
        },
        options: { '0%': '0', '25%': '0.25', '33.33333%': '0.33333', '50%': '0.5', '75%': '0.75', '100%': '1' },
    },
};

const meta: Meta<ProgressBarArgs> = {
    title: 'Interactions/Progress Bar',
};

export default meta;

///////////////////////////////////////////////////////////////////////////////

const progressBar = args => `
    <pd-progress-bar class="m-3" ${args.striped ? 'striped' : ''} ${args.label ? 'label' : ''} decimals="${
    args.decimals
}" color="primary" value=${args.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" ${args.striped ? 'striped' : ''} ${args.label ? 'label' : ''} decimals="${
    args.decimals
}" color="success" value=${args.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" ${args.striped ? 'striped' : ''} ${args.label ? 'label' : ''} decimals="${
    args.decimals
}" color="danger" value=${args.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" ${args.striped ? 'striped' : ''} ${args.label ? 'label' : ''} decimals="${
    args.decimals
}" color="warning" value=${args.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" ${args.striped ? 'striped' : ''} ${args.label ? 'label' : ''} decimals="${
    args.decimals
}" color="info" value=${args.value}></pd-progress-bar>
`;

export const Outline: StoryObj = {
    render: progressBar,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};
