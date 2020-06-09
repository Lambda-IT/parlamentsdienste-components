# pd-slider

## Usage

```html
<pd-slider min="10" max="100" value="30"></pd-slider>
```

<br><br>

### vuejs Sample

```html
<pd-slider
    @pd-input="valueChanged"
    :value="sliderValue"
    :min="config.min"
    :max="config.max"
    :step="config.step"
></pd-slider>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description  | Type     | Default |
| -------- | --------- | ------------ | -------- | ------- |
| `max`    | `max`     | max value    | `number` | `100`   |
| `min`    | `min`     | min value    | `number` | `0`     |
| `name`   | `name`    | slider name  | `string` | `''`    |
| `step`   | `step`    | value steps  | `number` | `1`     |
| `value`  | `value`   | slider value | `number` | `null`  |


## Events

| Event       | Description                            | Type                                  |
| ----------- | -------------------------------------- | ------------------------------------- |
| `pd-change` | Emitted when slider has been released. | `CustomEvent<InputChangeEventDetail>` |
| `pd-input`  | Emitted when the value has changed.    | `CustomEvent<InputChangeEventDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
