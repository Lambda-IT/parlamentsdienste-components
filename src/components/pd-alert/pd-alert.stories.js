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
    return `<pd-alert ${action} ${closeable} action-text="${actionText}" action-href="${actionHref}">A text to show on this alert</pd-alert>`;
};

export const color = () => {
    return `
    <p>
        <pd-alert color="primary">A simple primary alert</pd-alert>
    </p><p>
        <pd-alert color="success">A simple success alert</pd-alert>
    </p><p>
        <pd-alert color="warning">A simple warning alert</pd-alert>
    </p><p>
        <pd-alert color="alert">A simple alert</pd-alert>
    </p><p>
        <pd-alert color="info">A simple info alert</pd-alert>
    </p><p>
        <pd-alert color="dark">A simple dark alert</pd-alert>
    </p><p>
        <pd-alert color="light">A simple light alert</pd-alert>
    </p>
    `;
};

export const action = () => {
    return `
    <p>
        <pd-alert action action-text="a button action">A simple alert with a button action</pd-alert>
    </p><p>
        <pd-alert action action-text="a link action" action-href="http://www.google.ch">A simple alert with a link action</pd-alert>
    </p>
    `;
};
