# pd-dropdown

## Usage

```html
<pd-dropdown items="..."></pd-dropdown>
```

Dropdown items are defined using the following data structure. _Be aware that these cannot be defined directly in html._

```javascript
const items = [
  { id: '1', label: 'Mitteilungen und Verschiedenes', value: 'a1' },
  { id: '2', label: 'Pa.Iv. Semadeni. Fakultatives', value: 'a2' },
  { id: '3', label: 'Referendum für die Unterstützung Olympischer Spiele durch den Bund', value: 'a3' },
  ...
];
```

## Interfaces

```javascript
interface DropdownItem {
    id: string;
    label: string;
    value: string;
    selected?: boolean;
}
```

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute     | Description                             | Type             | Default                                                             |
| --------------- | ------------- | --------------------------------------- | ---------------- | ------------------------------------------------------------------- |
| `emptyItem`     | `empty-item`  | Enable selection of an empty item       | `boolean`        | `false`                                                             |
| `emptyItemData` | --            | Data used for the empty item            | `DropdownItem`   | `{         id: '0',         label: '-',         value: null,     }` |
| `itemCount`     | `item-count`  | Items visible in dropdown               | `number`         | `5`                                                                 |
| `items`         | --            | Items to display and select in dropdown | `DropdownItem[]` | `[]`                                                                |
| `placeholder`   | `placeholder` | Placeholder when no item is selected    | `string`         | `'Placeholder'`                                                     |


## Events

| Event          | Description | Type                        |
| -------------- | ----------- | --------------------------- |
| `pd-on-change` |             | `CustomEvent<DropdownItem>` |


## Dependencies

### Depends on

- [pd-dropdown-item](../pd-dropdown-item)

### Graph
```mermaid
graph TD;
  pd-dropdown --> pd-dropdown-item
  style pd-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
