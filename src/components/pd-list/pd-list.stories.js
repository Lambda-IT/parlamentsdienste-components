import notes from './readme.md';
import notesListItem from '../pd-list-item/readme.md';
import notesListItemExpandable from '../pd-list-item-expandable/readme.md';

export default {
    title: 'Interactions/List',
    parameters: {
        notes: {
            List: notes,
            'List Item': notesListItem,
            'List Item Expandable': notesListItemExpandable,
        },
        actions: {
            handles: ['pd-expand', 'pd-edit', 'pd-checked', 'pd-collapsed'],
        },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Basic = () => `
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

///////////////////////////////////////////////////////////////////////////

export const StatusList = () => `
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

///////////////////////////////////////////////////////////////////////////

export const ExpandableList = (args) => `
    <pd-list class="m-3">
        <pd-list-item-expandable 
            ${args.checkbox ? 'checkbox' : ''} 
            ${args.checked ? 'checked' : ''} 
            ${args.edit ? 'edit' : ''} 
            ${args.expand ? 'expand' : ''} 
            ${args.expandable ? 'expandable' : ''} 
            ${args.menu ? 'menu' : ''} 
            status="${args.status}" 
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

ExpandableList.args = {
    checkbox: false,
    checked: false,
    edit: true,
    expand: false,
    expandable: true,
    menu: true,
    expandableContent: 'Expandable Content',
    status: 'success',
};

ExpandableList.argTypes = {
    checkbox: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
    edit: { control: { type: 'boolean' } },
    expand: { control: { type: 'boolean' } },
    expandable: { control: { type: 'boolean' } },
    menu: { control: { type: 'boolean' } },
    expandableContent: { control: { type: 'text' } },
    status: { control: { type: 'select', options: ['success', 'danger', 'warning', 'info', 'unset'] } },
};
