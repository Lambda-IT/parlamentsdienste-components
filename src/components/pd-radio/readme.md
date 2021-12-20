# pd-radio

## Important!

This component does not use a shadow-dom.
_Styles might be overwritten by global styles!_

## Usage

```html
<pd-radio name="radio-test" value="1" label="radio 1"></pd-radio>
<pd-radio name="radio-test" value="2" label="radio 2"></pd-radio>
<pd-radio name="radio-test" value="3" label="radio 3"></pd-radio>
```

<br><br>
### vuejs Sample

```html
<pd-radio name="happy" value="true" v-model-pd="happy" label="Zufrieden"></pd-radio>
<pd-radio name="happy" value="false" v-model-pd="happy" label="Unzufrieden"></pd-radio>
```
Webcomponents don't work with v-model out of the box therefore we provide a custom directive which allows the same behaviour.
For more info on the v-model-pd directive check here [v-model-pd](/story/vuejs-directives--model-directive)

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                  | Type      | Default     |
| ---------------- | ----------------- | -------------------------------------------- | --------- | ----------- |
| `checked`        | `checked`         | Checks radio                                 | `boolean` | `false`     |
| `disabled`       | `disabled`        | Sets radio to disabled state                 | `boolean` | `false`     |
| `label`          | `label`           | Label used by radio                          | `string`  | `null`      |
| `name`           | `name`            | Name of radio. Used to group radios together | `string`  | `''`        |
| `value`          | `value`           | Value of radio                               | `any`     | `undefined` |
| `verticalAdjust` | `vertical-adjust` | Default vertical adjustment for inline forms | `boolean` | `false`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
