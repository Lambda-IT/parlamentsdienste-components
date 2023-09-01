import notesPanelContent from '../pd-panel-content/readme.md';
import notesFooter from '../pd-panel-footer/readme.md';
import notesPanelHeader from '../pd-panel-header/readme.md';
import notes from './readme.md';

export default {
    title: 'Layout/Panel',
    parameters: {
        actions: {
            handles: ['pd-collapsed'],
        },
        notes: {
            Panel: notes,
            'Panel Header': notesPanelHeader,
            'Panel Content': notesPanelContent,
            'Panel Footer': notesFooter,
        },
    },
    argTypes: {
        collapsed: { control: { type: 'boolean' } },
        collapsible: { control: { type: 'boolean' } },
        subpanel: { control: { type: 'boolean' } },
    },
};

export const Panel = (args) => {
    return `
        <pd-panel class="m-3" 
            ${args.collapsed ? 'collapsed' : ''}
            ${args.collapsible ? 'collapsible' : ''}
            ${args.subpanel ? 'subpanel' : ''}
        >
            <pd-panel-header slot="header">Header</pd-panel-header>
            <pd-panel-content>Content</pd-panel-content>
            <pd-panel-footer slot="footer">Footer</pd-panel-footer>
        </pd-panel>
    `;
};

Panel.args = {
    collapsible: true,
    collapsed: false,
    subpanel: false,
};

export const Subpanel = (args) => {
    return `
        <pd-panel class="m-3"
            ${args.collapsed ? 'collapsed' : ''}
            ${args.collapsible ? 'collapsible' : ''}
        >
            <pd-panel-header slot="header">
                Header
                <span slot="subtitle">Header Subtitle</span>
            </pd-panel-header>
            <pd-panel-content>
                <pd-panel
                    ${args.collapsed ? 'collapsed' : ''}
                    ${args.collapsible ? 'collapsible' : ''}
                    subpanel
                    style="--pd-panel-margin-bottom: 0.5rem"
                >
                    <pd-panel-header slot="header">
                        Subpanel Header
                        <span slot="subtitle">Subpanel Header Subtitle</span>
                    </pd-panel-header>
                    <pd-panel-content>
                        Subpanel Content
                    </pd-panel-content>
                </pd-panel>
                <pd-panel
                    ${args.collapsed ? 'collapsed' : ''}
                    ${args.collapsible ? 'collapsible' : ''}
                    subpanel
                >
                    <pd-panel-header slot="header">
                        Subpanel Header
                        <span slot="subtitle">Subpanel Header Subtitle</span>
                    </pd-panel-header>
                    <pd-panel-content>
                        Subpanel Content
                    </pd-panel-content>
                </pd-panel>
            </pd-panel-content>
            <pd-panel-footer slot="footer">Footer</pd-panel-footer>
        </pd-panel>
    `;
};

Subpanel.args = {
    collapsible: true,
    collapsed: false,
};
