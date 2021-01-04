import notes from './readme.md';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Layout/Panel',
    parameters: {
        notes,
        decorators: [withActions('pd-collapsed')],
    },
};

export const panel = () => {
    return `
        <pd-panel class="m-3" collapsible>
            <pd-panel-header slot="header">Header</pd-panel-header>
            <pd-panel-content>Content</pd-panel-content>
            <pd-panel-footer slot="footer">Footer</pd-panel-footer>
        </pd-panel>
    `;
};
