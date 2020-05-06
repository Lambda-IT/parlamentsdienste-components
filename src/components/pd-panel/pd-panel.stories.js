import notes from './readme.md';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Panel',
    parameters: {
        notes,
        decorators: [withActions('pd-on-collapsed')],
    },
};

export const primary = () => {
    return `
        <pd-panel class="m-3" collapsible>
            <pd-panel-header slot="header">Header</pd-panel-header>
            <pd-panel-content>Content</pd-panel-content>
            <pd-panel-footer slot="footer">asdf</pd-panel-footer>
        </pd-panel>
    `;
};
