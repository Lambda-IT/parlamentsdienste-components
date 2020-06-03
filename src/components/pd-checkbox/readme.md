# pd-checkbox

## Usage

#### Checkbox

```html
<pd-checkbox checked text="checkbox"></pd-checkbox>
```
<br><br>
### vuejs Sample

```html
<pd-checkbox class="form-group" text="button disabled" v-model-pd="checked"></pd-checkbox>
```
Webcomponents don't work with v-model out of the box therefore we provide a custom directive which allows the same behaviour.
For more info on the v-model-pd directive check here [v-model-pd](/story/vuejs-directives--model-directive)

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                 | Type      | Default |
| ---------- | ---------- | ------------------------------------------- | --------- | ------- |
| `checked`  | `checked`  | Sets check state of the checkbox true/false | `boolean` | `false` |
| `disabled` | `disabled` | Sets checkbox to disabled state             | `boolean` | `false` |
| `name`     | `name`     |                                             | `string`  | `''`    |
| `text`     | `text`     | Checkbox description text                   | `string`  | `''`    |
| `value`    | `value`    |                                             | `boolean` | `false` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `pd-on-checked` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
