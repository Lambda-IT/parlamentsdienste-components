import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';
// import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    closable: false,
    actionText: 'this is an action',
    actionHref: 'http://www.google.ch',
    actionTarget: '_blank',
    hideIcon: false,
    color: 'primary',
};

type alertArgs = typeof defaultArgs;

const argTypes: ArgTypes = {
    actionTarget: { control: { type: 'select', labels: { '': '-' } }, options: ['', '_blank'] },
    color: {
        control: { type: 'select' },
        options: ['primary', 'success', 'warning', 'danger', 'info', 'dark', 'light'],
    },
};

const meta: Meta<alertArgs> = {
    title: 'Dialogs/Alert',
    args: defaultArgs,
    argTypes,
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const basic = (args: alertArgs) => `
    <pd-alert class="m-3"
        color="${args.color}"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText} (button)">
        A text to show on this alert
    </pd-alert>
    <pd-alert class="m-3"
        color="${args.color}"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText} (link)"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        color="primary">
        <p>Line 1: A simple primary alert—check it out!</p>
        <p style="font-weight: 400">Line 2: A simple primary alert—check it out!</p>
    </pd-alert>
`;

export const Basic: StoryObj<alertArgs> = {
    render: basic,
};
