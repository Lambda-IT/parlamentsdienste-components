import notes from './readme.md';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Alert',
    decorators: [withActions('pd-on-closed'), withKnobs()],
    parameters: {
        notes,
    },
};

export const primary = () => {
    const closeable = radios('closable', { yes: 'closable', no: '' }, '');
    const action = radios('action', { yes: 'action', no: '' }, '');
    const actionText = text('action text', 'this is an action');
    const actionHref = text('action href', '');
    const actionTarget = text('action target', '_blank');
    return `<pd-alert class="m-3" ${action} ${closeable} action-text="${actionText}" action-href="${actionHref}">A text to show on this alert</pd-alert>`;
};

export const color = () => {
    return `
        <pd-alert class="m-3" color="primary">A simple primary alert</pd-alert>
        <pd-alert class="m-3" color="success">A simple success alert</pd-alert>
        <pd-alert class="m-3" color="warning">A simple warning alert</pd-alert>
        <pd-alert class="m-3" color="alert">A simple alert</pd-alert>
        <pd-alert class="m-3" color="info">A simple info alert</pd-alert>
        <pd-alert class="m-3" color="dark">A simple dark alert</pd-alert>
        <pd-alert class="m-3" color="light">A simple light alert</pd-alert>
    `;
};

export const action = () => {
    return `
        <pd-alert class="m-3" action action-text="a button action">A simple alert with a button action</pd-alert>
        <pd-alert class="m-3" action action-text="a link action" action-href="http://www.google.ch">A simple alert with a link action</pd-alert>
    `;
};
