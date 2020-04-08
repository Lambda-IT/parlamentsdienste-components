import notes from './readme.md';
import { withKnobs, object, array, radios } from '@storybook/addon-knobs';

export default {
    title: 'Table',
    decorators: [withKnobs()],
    parameters: {
        notes,
    },
};

export const primary = () => {
    const columnsData = [
        {
            columnName: 'no',
            label: '#',
            width: 50,
            bold: true,
        },
        {
            columnName: 'column1',
            label: 'Col1',
            width: 300,
        },
        {
            columnName: 'column2',
            label: 'Col2',
            width: 200,
        },
        {
            columnName: 'column3',
            label: 'Col3',
            width: 0, // auto
            sort: 'desc', // optional
        },
    ];

    const rowsData = [
        { no: 1, column1: 'Cell1', column2: 'Cell2', column3: 'Cell3' },
        { no: 2, column1: 'Cell4', column2: 'Cell5', column3: 'Cell6' },
    ];

    const rows = object('rows', rowsData);
    const columns = object('columns', columnsData);
    const size = radios('size', { large: ['large'], normal: ['normal'], small: ['small'] }, 'normal');

    const headerDark = document.createElement('h3');
    headerDark.innerHTML = 'Dark';
    const table0 = document.createElement('pd-table');
    table0.rows = rows;
    table0.columns = columns;
    table0.setAttribute('header-style', 'dark');

    const headerLight = document.createElement('h3');
    headerLight.innerHTML = 'Light';
    const table1 = document.createElement('pd-table');
    table1.rows = rows;
    table1.columns = columns;
    table1.setAttribute('header-style', 'light');

    const headerGray = document.createElement('h3');
    headerGray.innerHTML = 'Gray';
    const table2 = document.createElement('pd-table');
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

    /*return `
        <h3>Dark</h3>
        <pd-table header-style="dark" id="pd-table-1"></pd-table>
        <h3>Light</h3>
        <pd-table header-style="light" id="pd-table-1"></pd-table>
        <h3>Gray</h3>
        <pd-table header-style="gray" id="pd-table-2"></pd-table>
    `;*/
};
