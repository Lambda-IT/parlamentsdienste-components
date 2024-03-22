# pd-button

## Usage

#### Simple button

```html
<pd-button>Button</pd-button>
```

#### Button Group

```html
<pd-button-group>
    <pd-button>Button 1</pd-button>
    <pd-button>Button 2</pd-button>
    <pd-button>Button 3</pd-button>
</pd-button-group>
```

#### Link

```html
<pd-button href="http://www.google.ch">Link</pd-button>
```

### vuejs Sample

#### Simple Button

```html
<pd-button @click="successAction" type="button" color="success">{{caption}}</pd-button>
```

#### Icon Button

```html
<pd-button type="button" icon-location="right" @click="openModal('Umfrage')"
    >Zur Umfrage<pd-icon slot="icon" size="2" style="fill: var(--white);" name="message"></pd-icon
></pd-button>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                | Type                                                                             | Default     |
| -------------- | --------------- | ------------------------------------------ | -------------------------------------------------------------------------------- | ----------- |
| `color`        | `color`         | Color schema used for the button           | `"danger" \| "dark" \| "info" \| "light" \| "primary" \| "success" \| "warning"` | `'primary'` |
| `disabled`     | `disabled`      | Sets button to disbaled state              | `boolean`                                                                        | `false`     |
| `fullWidth`    | `full-width`    | Sets button to 100% width                  | `boolean`                                                                        | `false`     |
| `href`         | `href`          | Set href to create a link button           | `string`                                                                         | `undefined` |
| `iconLocation` | `icon-location` | Sets the position of the icon              | `"center" \| "left" \| "none" \| "right"`                                        | `'none'`    |
| `outline`      | `outline`       | Use outline schema                         | `boolean`                                                                        | `false`     |
| `showAsLink`   | `show-as-link`  | Set href to create a link button           | `boolean`                                                                        | `false`     |
| `size`         | `size`          | Button size                                | `"large" \| "normal" \| "small"`                                                 | `'normal'`  |
| `target`       | `target`        | Sets target for link button e.g. '_blank'  | `string`                                                                         | `'_blank'`  |
| `type`         | `type`          | Sets button type \|button\|submit\|reset\| | `"button" \| "reset" \| "submit"`                                                | `'button'`  |


## Slots

| Slot     | Description    |
| -------- | -------------- |
|          | button content |
| `"icon"` | slot for icons |


## CSS Custom Properties

| Name                             | Description                                    |
| -------------------------------- | ---------------------------------------------- |
| `--pd-button-left-radius`        | Border radius for the left side of the button  |
| `--pd-button-padding-horizontal` | Horizontal padding for 'normal' sized buttons  |
| `--pd-button-padding-vertical`   | Vertical padding for 'normal' sized buttons    |
| `--pd-button-right-radius`       | Border radius for the right side of the button |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
