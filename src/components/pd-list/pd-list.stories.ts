import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const meta: Meta = {
    title: 'Interactions/List',
    parameters: {
        actions: {
            handles: ['pd-expand', 'pd-edit', 'pd-selected', 'pd-collapsed', 'pd-content-click'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const basic = () => `
    <pd-list class="m-3">
        <pd-list-item>
            <span>List Item 1</span>
        </pd-list-item>
        <pd-list-item>
            <span>List Item 2</span>
        </pd-list-item>
        <pd-list-item>
            <span>List Item 3</span>
        </pd-list-item>
    </pd-list>
`;

export const Basic: StoryObj = {
    render: basic,
};

///////////////////////////////////////////////////////////////////////////

const statusList = () => `
    <pd-list class="m-3">
        <pd-list-item status="unset">
            <div>16.3112</div>
            <a>WBK-NR: Antrag auf Ablehnung </a>
        </pd-list-item>
        <pd-list-item status="success">
            <div>18.3708</div>
            <a>SiK-NR: Antrag auf Annahme</a>
        </pd-list-item>
        <pd-list-item status="warning">
            <div>16.845</div>
            <a>Änderung Kategorie IVIb</a>
        </pd-list-item>
        <pd-list-item status="danger">
            <div>18.426</div>
            <a>Änderung Kategorie IIIb</a>
        </pd-list-item>
    </pd-list>
`;

export const StatusList: StoryObj = {
    render: statusList,
};

///////////////////////////////////////////////////////////////////////////

const expandableList = args => `
    <pd-list class="m-3">
        <pd-list-item-expandable 
            ${args.checkbox ? 'checkbox' : ''} 
            ${args.checked ? 'checked' : ''} 
            ${args.edit ? 'edit' : ''} 
            ${args.expand ? 'expand' : ''} 
            ${args.expandable ? 'expandable' : ''} 
            ${args.menu ? 'menu' : ''} 
            ${args.contentClick ? 'content-click' : ''} 
            ${args.status === '-none-' ? '' : `status="${args.status}"`}
            style="--pd-list-item-background: #fff"
        >
            <div>16.3112</div>
            <a>WBK-NR: Antrag auf Ablehnung </a>
            <div slot="expandable">${args.expandableContent}</div>
            <pd-menu-item text="Drucken" slot="menu">
                <pd-icon size="2" name="print"></pd-icon>
            </pd-menu-item>
            <pd-menu-item text="Support" slot="menu">
                <pd-icon size="2" name="support"></pd-icon>
            </pd-menu-item>
        </pd-list-item-expandable>
    </pd-list>
`;

const expandableArgs = {
    checkbox: false,
    checked: false,
    edit: true,
    expand: false,
    expandable: true,
    menu: true,
    contentClick: false,
    expandableContent: 'Expandable Content',
    status: 'success',
};

const expandableArgTypes = {
    status: { control: { type: 'select' }, options: ['-none-', 'success', 'danger', 'warning', 'info', 'unset'] },
};

export const ExpandableList: StoryObj = {
    render: expandableList,
    args: expandableArgs,
    argTypes: expandableArgTypes,
};
