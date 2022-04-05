# pd-textarea

## Usage

```html
<pd-textarea label="label" placeholder="placeholder" helper-text="helper text" value="value" auto-grow></pd-textarea>
```
<br><br>
### vuejs Sample

```html
<pd-textarea class="form-group" v-model-pd="lastname" inputmode="text" label="Name" ></pd-textarea>
```
Webcomponents don't work with v-model out of the box therefore we provide a custom directive which allows the same behaviour.
For more info on the v-model-pd directive check here [v-model-pd](/story/vuejs-directives--model-directive)

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                                                                                                                      | Type                                                                                  | Default     |
| ---------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| `autoGrow`       | `auto-grow`      | If `true`, the element height will increase based on the value.                                                                                                                  | `boolean`                                                                             | `false`     |
| `autocapitalize` | `autocapitalize` | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.                                                                | `string`                                                                              | `'none'`    |
| `autofocus`      | `autofocus`      | This Boolean attribute lets you specify that a form control should have input focus when the page loads.                                                                         | `boolean`                                                                             | `false`     |
| `cols`           | `cols`           | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.                                                           | `number`                                                                              | `undefined` |
| `disabled`       | `disabled`       | If `true`, the user cannot interact with the textarea.                                                                                                                           | `boolean`                                                                             | `false`     |
| `enterkeyhint`   | `enterkeyhint`   | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.                            | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send"`             | `undefined` |
| `error`          | `error`          | Shows error state                                                                                                                                                                | `boolean`                                                                             | `false`     |
| `inputmode`      | `inputmode`      | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.                 | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `undefined` |
| `label`          | `label`          | Label text                                                                                                                                                                       | `string`                                                                              | `undefined` |
| `maxlength`      | `maxlength`      | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter. | `number`                                                                              | `undefined` |
| `minlength`      | `minlength`      | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter. | `number`                                                                              | `undefined` |
| `placeholder`    | `placeholder`    | Instructional text that shows before the input has a value.                                                                                                                      | `string`                                                                              | `undefined` |
| `readonly`       | `readonly`       | If `true`, the user cannot modify the value.                                                                                                                                     | `boolean`                                                                             | `false`     |
| `required`       | `required`       | If `true`, the user must fill in a value before submitting a form.                                                                                                               | `boolean`                                                                             | `false`     |
| `rows`           | `rows`           | The number of visible text lines for the control.                                                                                                                                | `number`                                                                              | `undefined` |
| `spellcheck`     | `spellcheck`     | If `true`, the element will have its spelling and grammar checked.                                                                                                               | `boolean`                                                                             | `false`     |
| `value`          | `value`          | The value of the textarea.                                                                                                                                                       | `string`                                                                              | `''`        |
| `wrap`           | `wrap`           | Indicates how the control wraps text.                                                                                                                                            | `"hard" \| "off" \| "soft"`                                                           | `undefined` |


## Events

| Event       | Description                               | Type                         |
| ----------- | ----------------------------------------- | ---------------------------- |
| `pd-blur`   | Emitted when the input loses focus.       | `CustomEvent<FocusEvent>`    |
| `pd-change` | Emitted when the input value has changed. | `CustomEvent<any>`           |
| `pd-focus`  | Emitted when the input has focus.         | `CustomEvent<FocusEvent>`    |
| `pd-input`  | Emitted when a keyboard input occurred.   | `CustomEvent<KeyboardEvent>` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `textarea` in `pd-textarea`. Use this method instead of the global
`textarea.focus()`.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                         | Description            |
| ---------------------------- | ---------------------- |
| `--pd-input-vertical-adjust` | top margin of textarea |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
