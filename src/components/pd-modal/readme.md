# pd-modal



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type  | Default     |
| ----------- | ----------- | ----------- | ----- | ----------- |
| `component` | `component` |             | `any` | `undefined` |


## Methods

### `closeModal() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `openModal() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [pd-backdrop](../pd-backdrop)
- [pd-button](../pd-button)

### Graph
```mermaid
graph TD;
  pd-modal --> pd-backdrop
  pd-modal --> pd-button
  style pd-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*