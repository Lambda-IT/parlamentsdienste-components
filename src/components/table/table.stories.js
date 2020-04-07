import notes from './readme.md';

export default {
    title: 'Table',
    parameters: {
        notes,
    },
};

export const primary = () => {
    const columns = [
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

    const rows = [
        { no: 1, column1: 'Cell1', column2: 'Cell2', column3: 'Cell3' },
        { no: 2, column1: 'Cell4', column2: 'Cell5', column3: 'Cell6' },
    ];

    function init() {
        const table0 = document.getElementById('pd-table-0');
        const table1 = document.getElementById('pd-table-1');
        const table2 = document.getElementById('pd-table-2');
        table0.columns = columns;
        table0.rows = rows;
        table1.columns = columns;
        table1.rows = rows;
        table2.columns = columns;
        table2.rows = rows;
    }

    document.addEventListener('DOMContentLoaded', init);

    return `
        <h3>Dark</h3>
        <pd-table header-style="dark" id="pd-table-0"></pd-table>
        <h3>Light</h3>
        <pd-table header-style="light" id="pd-table-1"></pd-table>
        <h3>Gray</h3>
        <pd-table header-style="gray" id="pd-table-2"></pd-table>
    `;
};
