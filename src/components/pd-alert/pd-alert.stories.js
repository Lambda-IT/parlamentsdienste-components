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
    },
};

///////////////////////////////////////////////////////////////////////////

export const Basic = (args) => `
    <pd-alert class="m-3" 
    ${args.action ? 'action' : ''} 
    ${args.closable ? 'closable' : ''} 
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
};

///////////////////////////////////////////////////////////////////////////

export const color = () => `
    <pd-alert class="m-3" color="primary">A simple primary alert</pd-alert>
    <pd-alert class="m-3" color="success">A simple success alert</pd-alert>
    <pd-alert class="m-3" color="warning">A simple warning alert</pd-alert>
    <pd-alert class="m-3" color="alert">A simple alert</pd-alert>
    <pd-alert class="m-3" color="info">A simple info alert</pd-alert>
    <pd-alert class="m-3" color="dark">A simple dark alert</pd-alert>
    <pd-alert class="m-3" color="light">A simple light alert</pd-alert>
`;

///////////////////////////////////////////////////////////////////////////

export const action = () => `
    <pd-alert class="m-3" action action-text="a button action">A simple alert with a button action</pd-alert>
    <pd-alert class="m-3" action action-text="a link action" action-href="http://www.google.ch">A simple alert with a link action</pd-alert>
`;
