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


## Events

| Event             | Description                         | Type               |
| ----------------- | ----------------------------------- | ------------------ |
| `pd-on-collapsed` | Emitted when the value has changed. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
