# pd-table-filter



<!-- Auto Generated Below -->


## Events

| Event         | Description                         | Type                  |
| ------------- | ----------------------------------- | --------------------- |
| `pdOnClear`   | Emitted when the input was cleared. | `CustomEvent<void>`   |
| `pdOnConfirm` | Emitted when filter is confirmed.   | `CustomEvent<string>` |
| `pdOnSearch`  | Emitted when filter changes.        | `CustomEvent<void>`   |


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
