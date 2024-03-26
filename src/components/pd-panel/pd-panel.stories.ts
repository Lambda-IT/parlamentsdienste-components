import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    collapsible: true,
    collapsed: false,
    subpanel: false,
};

type PanelArgs = typeof defaultArgs;

const meta: Meta<PanelArgs> = {
    title: 'Layout/Panel',
    parameters: {
        actions: {
            handles: ['pd-collapsed'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const panel = args => {
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

export const Panel: StoryObj = {
    render: panel,
    args: defaultArgs,
};

///////////////////////////////////////////////////////////////////////////$
const subpanelArgs = {
    collapsible: true,
    collapsed: false,
};

const subpanel = args => {
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

export const Subpanel: StoryObj = {
    render: subpanel,
    args: subpanelArgs,
};
