# pd-alert

## Usage

#### Alert

```html
<pd-alert color="primary">A simple primary alert</pd-alert>
```

#### Alert with action

```html
<pd-alert action action-text="a button action">
    A simple alert with a button action
</pd-alert>
<pd-alert action action-text="a link action" action-href="...">
    A simple alert with a link action
</pd-alert>
```
<br><br>
### vuejs Sample

```html
<pd-alert :color="alert.status" closable="true" @pd-on-closed="removeAlert" >{{alert.message}}</pd-alert>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                     | Type                                                                             | Default     |
| -------------- | --------------- | ----------------------------------------------- | -------------------------------------------------------------------------------- | ----------- |
| `action`       | `action`        | Show action                                     | `boolean`                                                                        | `false`     |
| `actionHref`   | `action-href`   | A link displayed to the right side of the alert | `string`                                                                         | `undefined` |
| `actionTarget` | `action-target` | Target for action href (eg. _blank)             | `string`                                                                         | `'_blank'`  |
| `actionText`   | `action-text`   | Text to show on action                          | `string`                                                                         | `undefined` |
| `closable`     | `closable`      | Display an option to close the alert            | `boolean`                                                                        | `false`     |
| `color`        | `color`         | Color schema used for the alert                 | `"danger" \| "dark" \| "info" \| "light" \| "primary" \| "success" \| "warning"` | `'primary'` |


## Events

| Event       | Description                                    | Type                      |
| ----------- | ---------------------------------------------- | ------------------------- |
| `pd-closed` | Emitted when action closed button was pressed. | `CustomEvent<MouseEvent>` |


## Dependencies

### Depends on

- [pd-icon](../pd-icon)

### Graph
```mermaid
graph TD;
  pd-alert --> pd-icon
  style pd-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
