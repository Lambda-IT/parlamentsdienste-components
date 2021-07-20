# pd-menu

## Usage

```html
<pd-menu>
    <pd-menu-item></pd-menu-item>
</pd-menu>
```

<br><br>

### vuejs Sample

```html
<pd-menu>
    <pd-menu-item text="Print" @click="printIt()">
        <pd-icon size="2" name="print"></pd-icon>
    </pd-menu-item>
</pd-menu>
```

_To pass arrays or objects to webcomponents you need to append the attribute name with the `.prop` modifier._
More info on [prop modifier](https://vuejs.org/v2/api/#v-bind)

## Styles

| Style                              | Default                      | Description                                        |
| ---------------------------------- | ---------------------------- | -------------------------------------------------- |
| `--pd-menu-max-width`              | `undefined`                  | Max width for                                      |
| `--pd-dropdown-vertical-padding`   | `0.625em`                    | Possibility to change inner height of the dropdown |
| `--pd-dropdown-horizontal-padding` | `0.75em`                     | Possibility to change inner width of the dropdown  |
| `--pd-menu-label-color`            | `setcolor(primary, enabled)` | Possibility to change color of label and icon      |
| `--pd-menu-label-weight`           | `400`                        | Possibility to change the label font-weight        |

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                             | Type                                                                                                                                                                                                         | Default          |
| ------------- | -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `invertColor` | `invert-color` | Switch dark colors to bright font color | `boolean`                                                                                                                                                                                                    | `false`          |
| `items`       | --             | Items to display and select in dropdown | `any[]`                                                                                                                                                                                                      | `[]`             |
| `label`       | `label`        | Label nearby to the dot menu icon       | `string`                                                                                                                                                                                                     | `''`             |
| `placement`   | `placement`    | Prefered placement of menu dropdown     | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'` |


## Methods

### `close() => Promise<void>`

Close menu

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Open menu

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [pd-list-item-expandable](../pd-list-item-expandable)
 - [pd-table](../pd-table)

### Depends on

- [pd-icon](../pd-icon)

### Graph
```mermaid
graph TD;
  pd-menu --> pd-icon
  pd-list-item-expandable --> pd-menu
  pd-table --> pd-menu
  style pd-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
