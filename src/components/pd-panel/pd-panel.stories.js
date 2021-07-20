import notes from './readme.md';
import notesPanelHeader from '../pd-panel-header/readme.md';
import notesPanelContent from '../pd-panel-content/readme.md';
import notesFooter from '../pd-panel-footer/readme.md';

export default {
    title: 'Layout/Panel',
    parameters: {
        actions: {
            handles: ['pd-collapsed'],
        },
        notes: {
            'Panel': notes,
            'Panel Header': notesPanelHeader,
            'Panel Content': notesPanelContent,
            'Panel Footer': notesFooter,
        },
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
