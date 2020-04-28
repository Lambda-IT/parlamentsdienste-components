# pd-icon

## Usage

#### With Source File

```html
<pd-icon src="/assets/icons/mail.svg"></pd-icon>
```

#### With Name

```html
<pd-icon name="mail"></pd-icon>
```

## Available Icon Names

| []()        |           |           |            |                  |                  |               |               |
| ----------- | --------- | --------- | ---------- | ---------------- | ---------------- | ------------- | ------------- |
| parlament   | checkmark | cancel    | minus      | checkbox-default | checkbox-checked | radio-default | radio-checked |
| cancel-ring | calendar  | profile   | dictionary | contacts         | search           | caret         | expand        |
| explorer    | folder    | folder-in | link       | grid             | configuration    | list          | menu          |
| mail        | money     | press     | print      | support          |

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                    | Type                 | Default     |
| ------------- | -------------- | ---------------------------------------------- | -------------------- | ----------- |
| `flip`        | `flip`         | Flip in X/Y direction                          | `"x" \| "xy" \| "y"` | `undefined` |
| `name`        | `name`         | Name of an icon from the provided gallery      | `string`             | `undefined` |
| `rotate`      | `rotate`       | Rotation in 'deg'                              | `number`             | `0`         |
| `size`        | `size`         | Size of the icon in 'em'                       | `number`             | `undefined` |
| `spin`        | `spin`         | Spin animation in ms per rotation              | `number`             | `undefined` |
| `spinReverse` | `spin-reverse` | change animation direction                     | `boolean`            | `false`     |
| `src`         | `src`          | Specifies the `src` url of an SVG file to use. | `string`             | `undefined` |


## Dependencies

### Used by

 - [pd-alert](../pd-alert)
 - [pd-breadcrumbs](../pd-breadcrumbs)
 - [pd-list-item](../pd-list-item)
 - [pd-navbar](../pd-navbar)
 - [pd-panel-header](../pd-panel-header)
 - [pd-search](../pd-search)
 - [pd-sidebar-item](../pd-sidebar-item)
 - [pd-toast](../pd-toast)

### Graph
```mermaid
graph TD;
  pd-alert --> pd-icon
  pd-breadcrumbs --> pd-icon
  pd-list-item --> pd-icon
  pd-navbar --> pd-icon
  pd-panel-header --> pd-icon
  pd-search --> pd-icon
  pd-sidebar-item --> pd-icon
  pd-toast --> pd-icon
  style pd-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
