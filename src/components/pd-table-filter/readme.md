# pd-table-filter



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description  | Type     | Default |
| -------- | --------- | ------------ | -------- | ------- |
| `value`  | `value`   | filter value | `string` | `''`    |


## Events

| Event             | Description                              | Type                  |
| ----------------- | ---------------------------------------- | --------------------- |
| `pd-close`        | Emitted when filter is confirmed.        | `CustomEvent<void>`   |
| `pd-confirm`      | Emitted when filter is confirmed.        | `CustomEvent<string>` |
| `pd-filter-input` | Emitted when filter input value changed. | `CustomEvent<string>` |


## Methods

### `focusInput() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `reset() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setValue(value: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [pd-table](../pd-table)

### Depends on

- [pd-icon](../pd-icon)

### Graph
```mermaid
graph TD;
  pd-table-filter --> pd-icon
  pd-table --> pd-table-filter
  style pd-table-filter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
