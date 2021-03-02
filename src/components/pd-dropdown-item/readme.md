# pd-dropdown-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                          | Type               | Default     |
| ----------- | ----------- | ------------------------------------ | ------------------ | ----------- |
| `highlight` | `highlight` | Find an highlight this text in value | `number \| string` | `undefined` |
| `selected`  | `selected`  | Sets this item to selected           | `boolean`          | `false`     |
| `value`     | `value`     | Value for this item                  | `string`           | `''`        |


## Dependencies

### Used by

 - [pd-combobox](../pd-combobox)
 - [pd-dropdown](../pd-dropdown)
 - [pd-search](../pd-search)

### Graph
```mermaid
graph TD;
  pd-combobox --> pd-dropdown-item
  pd-dropdown --> pd-dropdown-item
  pd-search --> pd-dropdown-item
  style pd-dropdown-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
