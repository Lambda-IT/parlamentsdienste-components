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
    action-target="${args.actionTarget}">
        A text to show on this alert
    </pd-alert>
`;

Basic.args = {
    closable: false,
    action: false,
    actionText: 'this is an action',
    actionHref: false,
    actionTarget: '',
    hideIcon: false,
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
