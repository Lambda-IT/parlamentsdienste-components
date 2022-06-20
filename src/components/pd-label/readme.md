# pd-label

## Usage

#### Without color

```html
<pd-label>Label Name</pd-label>
```

#### Background color label

```html
<pd-label color="#12B886">Label Name</pd-label>
```

#### Dot color label

```html
<pd-label has-dot color="#12B886">Label Name</pd-label>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                  | Type      | Default     |
| -------- | --------- | -------------------------------------------- | --------- | ----------- |
| `color`  | `color`   | Background or dot color depending on hasDot  | `string`  | `undefined` |
| `hasDot` | `has-dot` | Switch between background and dot color mode | `boolean` | `false`     |


## Slots

| Slot | Description   |
| ---- | ------------- |
|      | Label content |


## CSS Custom Properties

| Name                    | Description          |
| ----------------------- | -------------------- |
| `--pd-label-text-color` | Text color for label |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
