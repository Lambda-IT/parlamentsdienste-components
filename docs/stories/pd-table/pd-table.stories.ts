import {
    PdColumn,
    PdPagingLocation,
    PdTableIconConfiguration,
    PdTableRow,
    PdTableSelectedStatus,
} from '@parlamentsdienste-components/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    rows: [
        {
            no: 1,
            column1: 'SiK/CPS-19-01',
            column2: 'Mitteilungen',
            pdIconConfig: { view: true, delete: true },
            pdStatus: 'danger',
        },
        {
            no: 2,
            column1: 'SiK/CPS-19-34',
            column2: 'Aktuelles as dem VBS, Information und Diskussion',
            pdStatus: 'success',
        },
        {
            no: 3,
            column1: 'SiK/CPS-19-12',
            column2: 'NKF, Evaluationsverfahren, Information und Diskussion',
            pdStatus: 'success',
        },
        {
            no: 4,
            column1: 'SiK/CPS-19-65',
            column2: 'Gesamtkonzeption Boden, Präsentation und Diskussion',
            pdIconConfig: { edit: false, delete: true },
            pdStatus: 'success',
        },
        {
            no: 5,
            column1: 'SiK/CPS-19-101',
            column2: 'Politisches Controlling, Präsentation, Diskussion und Beschluss',
        },
        { no: 6, column1: '18.445', column2: 'Pa.lv. Semadenbi. Fakultatives' },
        {
            no: 7,
            column1: 'WBK/CSEC-19-02',
            column2: 'Referendum für die Unterstützung Olympischer Spiele durch den Bund',
        },
        {
            no: 8,
            column1: '19.040',
            column2: 'Controlling, Präsentation, Diskussion und Beschluss',
            pdStatus: 'warning',
        },
    ] as unknown as PdTableRow[],
    columns: [
        {
            columnName: 'no',
            label: '#',
            width: 50,
            bold: true,
            fixed: true,
            sortable: true,
        },
        {
            columnName: 'column1',
            label: 'Referenz',
            width: 150,
            textAlign: 'right',
        },
        {
            columnName: 'column2',
            label: 'Thema',
            width: 0,
            minWidth: 500,
            sortable: true,
            sortDir: 'asc',
            textAlign: 'left',
            filter: true,
        },
    ] as PdColumn[],
    menu: [
        { text: 'Drucken', icon: 'print' },
        { text: 'Contact', icon: 'contact' },
    ],
    showActionColumn: true,
    iconConfig: { edit: true, view: false, delete: true } as PdTableIconConfiguration,
    selectable: true,
    showStatus: true,
    headerStyle: 'dark',
    menuLabel: 'Aktionen',
    externalRowHandling: false,
    selectedStatus: 'none' as PdTableSelectedStatus,
    paging: true,
    pagingLocation: 'right' as PdPagingLocation,
    pageSizes: [
        { id: '1', value: 1, label: '1' },
        { id: '2', value: 5, label: '5', selected: true },
        { id: '3', value: 10, label: '10' },
    ],
    disabled: false,
    readonly: false,
};

type TableArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    rows: { control: { type: 'object' } },
    columns: { control: { type: 'object' } },
    iconConfig: { control: { type: 'object' } },
    headerStyle: { control: { type: 'select' }, options: ['light', 'dark', 'gray'] },
    selectedStatus: { control: { type: 'select' }, options: ['all', 'none', 'indeterminate'] },
    pagingLocation: { control: { type: 'select' }, options: ['left', 'right'] },
    pageSizes: { control: { type: 'object' } },
};

const meta: Meta<TableArgs> = {
    title: 'Interactions/Table',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

const events = [
    'pd-selected',
    'pd-edit',
    'pd-view',
    'pd-delete',
    'pd-clicked-row',
    'pd-sort',
    'pd-filter-change',
    'pd-filter-input',
];
addEventlisteners('pd-table', events);

///////////////////////////////////////////////////////////////////////////

function generateTableMenu(args: TableArgs) {
    const menuItems: HTMLPdMenuItemElement[] = [];

    args.menu.forEach(m => {
        const menu = document.createElement('pd-menu-item');
        const icon = document.createElement('pd-icon');
        menu.text = m.text;
        icon.size = 2;
        icon.name = m.icon;
        menu.appendChild(icon);
        menuItems.push(menu);
    });

    return menuItems;
}

const table = (args: TableArgs) => {
    const table0 = document.createElement('pd-table');
    table0.classList.add('m-3');
    table0.rows = args.rows;
    table0.columns = args.columns;
    table0.iconConfig = args.iconConfig;
    table0.showActionColumn = args.showActionColumn;
    table0.setAttribute('header-style', args.headerStyle);
    table0.selectable = args.selectable;
    table0.showStatus = args.showStatus;
    table0.menuLabel = args.menuLabel;
    table0.externalRowHandling = args.externalRowHandling;
    table0.selectedStatus = args.selectedStatus;
    table0.paging = args.paging;
    table0.pagingLocation = args.pagingLocation;
    table0.pageSizes = args.pageSizes;
    table0.disabled = args.disabled;
    table0.readonly = args.readonly;
    generateTableMenu(args).forEach(m => table0.appendChild(m));

    const wrapper = document.createElement('div');
    wrapper.append(table0);

    return wrapper;
};

export const Table: StoryObj = {
    render: table,
};
