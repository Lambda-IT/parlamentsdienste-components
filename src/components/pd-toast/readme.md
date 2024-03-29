# pd-toast

## Usage

#### Toast

```html
<pd-toast header="Toast Title" info="11 minutes ago">
    Toast body text goes here
</pd-toast>
```

<br><br>
### vuejs Sample

```html
<pd-toast :header="toast.header" info="toast.info" >{{toast.message}}</pd-toast>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                        | Type                 | Default     |
| -------- | --------- | -------------------------------------------------- | -------------------- | ----------- |
| `header` | `header`  | The Toast title                                    | `string`             | `undefined` |
| `info`   | `info`    | Additional toast information (e.g. 11 minutes ago) | `string`             | `undefined` |
| `size`   | `size`    | Changes max-with of the toast                      | `"large" \| "small"` | `'large'`   |


## Events

| Event       | Description                                 | Type               |
| ----------- | ------------------------------------------- | ------------------ |
| `pd-closed` | When closing the toast using the close icon | `CustomEvent<any>` |


## Slots

| Slot | Description   |
| ---- | ------------- |
|      | toast content |


## Dependencies

### Depends on

- [pd-icon](../pd-icon)

### Graph
```mermaid
graph TD;
  pd-toast --> pd-icon
  style pd-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
