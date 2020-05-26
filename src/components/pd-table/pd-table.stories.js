import notes from './readme.md';
import { withKnobs, object, array, radios } from '@storybook/addon-knobs';

export default {
    title: 'Interactions|Table',
    decorators: [withKnobs()],
    parameters: {
        notes,
    },
};

export const table = () => {
    const columnsData = [
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
        },
    ];

    const rowsData = [
        { no: 1, column1: 'SiK/CPS-19-01', column2: 'Mitteilungen' },
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
    ];

    const rows = object('rows', rowsData);
    const columns = object('columns', columnsData);

    const headerDark = document.createElement('h3');
    headerDark.classList = ['m-3'];
    headerDark.innerHTML = 'Dark';
    const table0 = document.createElement('pd-table');
    table0.classList = ['m-3'];
    table0.rows = rows;
    table0.columns = columns;
    table0.setAttribute('header-style', 'dark');

    const headerLight = document.createElement('h3');
    headerLight.classList = ['m-3'];
    headerLight.innerHTML = 'Light';
    const table1 = document.createElement('pd-table');
    table1.classList = ['m-3'];
    table1.rows = rows;
    table1.columns = columns;
    table1.setAttribute('header-style', 'light');

    const headerGray = document.createElement('h3');
    headerGray.classList = ['m-3'];
    headerGray.innerHTML = 'Gray';
    const table2 = document.createElement('pd-table');
    table2.classList = ['m-3'];
    table2.rows = rows;
    table2.columns = columns;
    table2.setAttribute('header-style', 'gray');

    const wrapper = document.createElement('div');
    wrapper.append(headerDark);
    wrapper.append(table0);
    wrapper.append(headerLight);
    wrapper.append(table1);
    wrapper.append(headerGray);
    wrapper.append(table2);

    return wrapper;
};
