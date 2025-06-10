# pd-alert



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                     | Type                                                                             | Default     |
| -------------------- | ---------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------- | ----------- |
| `actionHref`         | `action-href`          | A link displayed to the right side of the alert | `string`                                                                         | `undefined` |
| `actionTarget`       | `action-target`        | Target for action href (eg. _blank)             | `string`                                                                         | `'_blank'`  |
| `actionText`         | `action-text`          | Text to show on action                          | `string`                                                                         | `undefined` |
| `actionTextExpanded` | `action-text-expanded` | Text to show on expanded action                 | `string`                                                                         | `undefined` |
| `closable`           | `closable`             | Display an option to close the alert            | `boolean`                                                                        | `false`     |
| `color`              | `color`                | Color schema used for the alert                 | `"danger" \| "dark" \| "info" \| "light" \| "primary" \| "success" \| "warning"` | `'primary'` |
| `expandable`         | `expandable`           | Enable expandable content                       | `boolean`                                                                        | `false`     |
| `expanded`           | `expanded`             | Expands / collapses the panel content           | `boolean`                                                                        | `false`     |
| `hideIcon`           | `hide-icon`            | Hide alert icon                                 | `boolean`                                                                        | `false`     |


## Events

| Event          | Description                                       | Type                      |
| -------------- | ------------------------------------------------- | ------------------------- |
| `pd-action`    | Emitted when action button was pressed.           | `CustomEvent<void>`       |
| `pd-closed`    | Emitted when close button was pressed.            | `CustomEvent<MouseEvent>` |
| `pd-collapsed` | Emitted when inner content is expanded/collapsed. | `CustomEvent<boolean>`    |


## Slots

| Slot           | Description        |
| -------------- | ------------------ |
|                | alert title        |
| `"expandable"` | expandable content |


## CSS Custom Properties

| Name                                     | Description                          |
| ---------------------------------------- | ------------------------------------ |
| `--pd-alert-expandable-background-color` | background color of expanded content |
| `--pd-alert-expandable-color`            | text color of expanded content       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
