import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';

const defaultArgs = {
    value: '0.25',
    striped: false,
    label: false,
    decimals: 2,
};

type ProgressBarArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    value: {
        control: {
            type: 'select',
        },
        options: ['0', '0.25', '0.33333', '0.5', '0.75', '1'],
    },
};

const meta: Meta<ProgressBarArgs> = {
    title: 'Interactions/Progress Bar',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

///////////////////////////////////////////////////////////////////////////////

const progressBar = (args: ProgressBarArgs) => `
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

export const Outline: StoryObj<ProgressBarArgs> = {
    render: progressBar,
};
