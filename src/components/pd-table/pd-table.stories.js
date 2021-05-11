import notes from './readme.md';

export default {
    title: 'Interactions/Table',
    parameters: {
        notes,
        actions: {
            handles: ['pd-selected', 'pd-edit', 'pd-view', 'pd-delete'],
        },
    },
    argTypes: {
        rows: { control: { type: 'object' } },
        columns: { control: { type: 'object' } },
        iconConfig: { control: { type: 'object' } },
        showActionColumn: { control: { type: 'boolean' } },
        selectable: { control: { type: 'boolean' } },
        menuLabel: { control: { type: 'string' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Table = (args) => {
    const headerDark = document.createElement('h3');
    headerDark.classList = ['m-3'];
    headerDark.innerHTML = 'Dark';
    const table0 = document.createElement('pd-table');
    table0.classList = ['m-3'];
    table0.rows = args.rows;
    table0.columns = args.columns;
    table0.iconConfig = args.iconConfig;
    table0.showActionColumn = args.showActionColumn;
    table0.setAttribute('header-style', 'dark');
    table0.selectable = args.selectable;
    table0.menuLabel = args.menuLabel;
    generateTableMenu(args).forEach((m) => table0.appendChild(m));

    const headerLight = document.createElement('h3');
    headerLight.classList = ['m-3'];
    headerLight.innerHTML = 'Light';
    const table1 = document.createElement('pd-table');
    table1.classList = ['m-3'];
    table1.rows = args.rows;
    table1.columns = args.columns;
    table1.iconConfig = args.iconConfig;
    table1.showActionColumn = args.showActionColumn;
    table1.setAttribute('header-style', 'light');
    table1.selectable = args.selectable;
    generateTableMenu(args).forEach((m) => table1.appendChild(m));

    const headerGray = document.createElement('h3');
    headerGray.classList = ['m-3'];
    headerGray.innerHTML = 'Gray';
    const table2 = document.createElement('pd-table');
    table2.classList = ['m-3'];
    table2.rows = args.rows;
    table2.columns = args.columns;
    table2.iconConfig = args.iconConfig;
    table2.showActionColumn = args.showActionColumn;
    table2.setAttribute('header-style', 'gray');
    table2.selectable = args.selectable;
    generateTableMenu(args).forEach((m) => table2.appendChild(m));

    const wrapper = document.createElement('div');
    wrapper.append(headerDark);
    wrapper.append(table0);
    wrapper.append(headerLight);
    wrapper.append(table1);
    wrapper.append(headerGray);
    wrapper.append(table2);

    return wrapper;
};

Table.args = {
    rows: [
        { no: 1, column1: 'SiK/CPS-19-01', column2: 'Mitteilungen', iconConfig: { view: true } },
        { no: 2, column1: 'SiK/CPS-19-34', column2: 'Aktuelles as dem VBS, Information und Diskussion' },
        { no: 3, column1: 'SiK/CPS-19-12', column2: 'NKF, Evaluationsverfahren, Information und Diskussion' },
        { no: 4, column1: 'SiK/CPS-19-65', column2: 'Gesamtkonzeption Boden, Präsentation und Diskussion' },
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
        { no: 8, column1: '19.040', column2: 'Controlling, Präsentation, Diskussion und Beschluss' },
    ],
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
    ],
    menu: [
        { text: 'Drucken', icon: 'print' },
        { text: 'Contact', icon: 'contact' },
    ],
    showActionColumn: true,
    iconConfig: { edit: true, select: false, delete: true },
    selectable: true,
    menuLabel: 'Aktionen',
};

function generateTableMenu(args) {
    let menuItems = [];

    args.menu.forEach((m) => {
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
