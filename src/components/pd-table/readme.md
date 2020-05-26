# pd-table

## Usage

#### Table

```html
<pd-table columns="..." rows="..." header-style="dark"> </pd-table>
```

Columns and Rows are defined using the following data structure. _Be aware that these cannot be defined directly in html._

```javascript
const columns = [
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
        ...
];
```

## Interfaces

```javascript
interface PdColumn {
    columnName: string;
    label: string;
    width: number;
    minWidth: number;
    bold?: boolean;
    sortDir?: 'desc' | 'asc';
    sortable?: boolean;
    fixed?: boolean;
    textAlign?: 'left' | 'right' | 'center';
    sortFunc?: (a: any, b: any, dir: string) => number;
    displayFunc?: (value: any) => any;
}
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                 | Type                          | Default  |
| -------------- | --------------- | ------------------------------------------- | ----------------------------- | -------- |
| `columns`      | --              | A definition for each column of the table   | `PdColumn[]`                  | `[]`     |
| `headerHeight` | `header-height` | Height of header cells                      | `string`                      | `'48'`   |
| `headerStyle`  | `header-style`  | The table style                             | `"dark" \| "gray" \| "light"` | `'dark'` |
| `minWidth`     | `min-width`     | The minimum width the table should take     | `string`                      | `'300'`  |
| `rowHeight`    | `row-height`    | Height of rows                              | `string`                      | `'48'`   |
| `rows`         | `rows`          | The data definition for each row to display | `any`                         | `[]`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
