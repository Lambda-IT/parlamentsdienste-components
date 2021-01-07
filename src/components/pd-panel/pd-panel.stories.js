import notes from './readme.md';

export default {
    title: 'Layout/Panel',
    parameters: {
        actions: {
            handles: ['pd-collapsed'],
        },
        notes,
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
