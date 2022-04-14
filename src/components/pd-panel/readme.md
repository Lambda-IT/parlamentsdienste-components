# pd-panel

## Usage

```html
<pd-panel collapsible>
    <pd-panel-header slot="header">Header</pd-panel-header>
    <pd-panel-content>Content</pd-panel-content>
    <pd-panel-footer slot="footer">Footer</pd-panel-footer>
</pd-panel>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                           | Type      | Default |
| ------------- | ------------- | ------------------------------------- | --------- | ------- |
| `collapsed`   | `collapsed`   | Expands / collapses the panel content | `boolean` | `false` |
| `collapsible` | `collapsible` | Show/hide collapse button             | `boolean` | `false` |
| `subpanel`    | `subpanel`    | Use as a subpanel                     | `boolean` | `false` |


## Events

| Event          | Description                         | Type               |
| -------------- | ----------------------------------- | ------------------ |
| `pd-collapsed` | Emitted when the value has changed. | `CustomEvent<any>` |


## Slots

| Slot       | Description          |
| ---------- | -------------------- |
|            | main content         |
| `"footer"` | panel footer content |
| `"header"` | panel header content |


## CSS Custom Properties

| Name                       | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| `--pd-panel-background`    | Background color of panel                                 |
| `--pd-panel-margin-bottom` | bottom margin of panel. Can be used to separate subpanels |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
