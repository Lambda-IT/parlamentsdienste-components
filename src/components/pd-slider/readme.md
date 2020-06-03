# pd-slider

## Usage

```html
<pd-slider min="10" max="100" value="30"></pd-slider>
```

<br><br>
### vuejs Sample

```html
<pd-slider @pd-on-input="valueChanged" :value="sliderValue" :min="config.min" :max="config.max" :step="config.step" ></pd-slider>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `disabled` | `disabled` |             | `any`    | `undefined` |
| `max`      | `max`      |             | `number` | `100`       |
| `min`      | `min`      |             | `number` | `0`         |
| `name`     | `name`     |             | `string` | `''`        |
| `step`     | `step`     |             | `number` | `1`         |
| `value`    | `value`    |             | `number` | `null`      |


## Events

| Event          | Description                            | Type                                  |
| -------------- | -------------------------------------- | ------------------------------------- |
| `pd-on-change` | Emitted when slider has been released. | `CustomEvent<InputChangeEventDetail>` |
| `pd-on-input`  | Emitted when the value has changed.    | `CustomEvent<InputChangeEventDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
