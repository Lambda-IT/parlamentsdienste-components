import notes from './readme.md';

export default {
    title: 'Dialogs/Alert',
    parameters: {
        actions: {
            handles: ['pd-closed'],
        },
        notes,
    },
    argTypes: {
        closable: { control: { type: 'boolean' } },
        action: { control: { type: 'boolean' } },
        actionText: { control: { type: 'text' } },
        actionHref: { control: { type: 'text' } },
        actionTarget: { control: { type: 'select', options: ['', '_blank'] } },
        hideIcon: { control: { type: 'boolean' } },
        headline: { control: { type: 'text' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Basic = (args) => `
    <pd-alert class="m-3"
    ${args.action ? 'action' : ''}
    ${args.closable ? 'closable' : ''}
    ${args.showIcon ? 'hide-icon' : ''}
    action-text="${args.actionText}"
    action-href="${args.actionHref}"
    headline="${args.headline}"
    action-target="${args.actionTarget}">
        A text to show on this alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.action ? 'action' : ''}
        ${args.closable ? 'closable' : ''}
        ${!args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-href="${args.actionHref}"
        headline="My Title (not headline)"
        action-target="${args.actionTarget}"
        color="primary">
        <p>Line 1: A simple primary alert—check it out!</p>
        <p>Line 2: A simple primary alert—check it out!</p>
    </pd-alert>
`;

Basic.args = {
    closable: false,
    action: false,
    actionText: 'this is an action',
    actionHref: false,
    actionTarget: '',
    hideIcon: false,
    headline: '',
};

///////////////////////////////////////////////////////////////////////////

export const Color = (args) => `
    <pd-alert class="m-3"
        ${args.action ? 'action' : ''}
        ${args.closable ? 'closable' : ''}
        ${!args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        headline="${args.headline}"
        color="primary">
        A simple primary alert
    </pd-alert>
    <pd-alert class="m-3"
    ${args.action ? 'action' : ''}
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        headline="${args.headline}"
        color="success">
        A simple success alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.action ? 'action' : ''}
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        headline="${args.headline}"
        color="warning">
        A simple warning alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.action ? 'action' : ''}
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        headline="${args.headline}"
        color="danger">
        A simple alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.action ? 'action' : ''}
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        headline="${args.headline}"
        color="info">
        A simple info alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.action ? 'action' : ''}
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        headline="${args.headline}"
        color="dark">
        A simple dark alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.action ? 'action' : ''}
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        headline="${args.headline}"
        color="light">
        A simple light alert
    </pd-alert>
`;

Color.args = {
    ...Basic.args,
};

///////////////////////////////////////////////////////////////////////////

export const Action = () => `
    <pd-alert class="m-3" action action-text="a button action">A simple alert with a button action</pd-alert>
    <pd-alert class="m-3" action action-text="a link action" action-href="http://www.google.ch">A simple alert with a link action</pd-alert>
`;
