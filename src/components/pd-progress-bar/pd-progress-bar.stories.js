import notes from './readme.md';

export default {
    title: 'Interactions/Progress Bar',
    parameters: {
        notes,
    },
    argTypes: {
        value: {
            control: {
                type: 'select',
                options: { '0%': '0', '25%': '0.25', '33.33333%': '0.33333', '50%': '0.5', '75%': '0.75', '100%': '1' },
            },
        },
        striped: { control: { type: 'boolean' } },
        label: { control: { type: 'boolean' } },
        decimals: { control: { type: 'number' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const ProgressBar = (args) => `
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

ProgressBar.args = {
    value: '0.25',
    striped: false,
    label: false,
    decimals: 2,
};
