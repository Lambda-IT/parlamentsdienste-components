# pd-panel-header

<!-- Auto Generated Below -->


## Events

| Event      | Description                   | Type                   |
| ---------- | ----------------------------- | ---------------------- |
| `pd-hover` | Used for panel hover stylings | `CustomEvent<boolean>` |


## Methods

### `setCollapsed(collapsed: boolean) => Promise<void>`



#### Parameters

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| `collapsed` | `boolean` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot         | Description                     |
| ------------ | ------------------------------- |
|              | Header content                  |
| `"icons"`    | Additional icons left of carret |
| `"subtitle"` | panel header subtitle content   |


## Dependencies

### Depends on

- [pd-icon](../pd-icon)

### Graph
```mermaid
graph TD;
  pd-panel-header --> pd-icon
  style pd-panel-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
