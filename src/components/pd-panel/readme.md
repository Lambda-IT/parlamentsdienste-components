# pd-panel

## Usage

```html
<pd-panel collapsible>
    <pd-panel-header slot="header">
        Header
        <span slot="subtitle">Header Subtitle</span>
    </pd-panel-header>
    <pd-panel-content>
        <pd-panel collapsible subpanel style="--pd-panel-margin-bottom: 1.25rem">
            <pd-panel-header slot="header">
                Subpanel Header
                <span slot="subtitle">Subpanel Header Subtitle</span>
            </pd-panel-header>
            <pd-panel-content>Subpanel Content</pd-panel-content>
        </pd-panel>
        <pd-panel collapsible subpanel>
            <pd-panel-header slot="header">
                Subpanel Header
                <span slot="subtitle">Subpanel Header Subtitle</span>
            </pd-panel-header>
            <pd-panel-content>Subpanel Content</pd-panel-content>
        </pd-panel>
    </pd-panel-content>
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

| Name                         | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `--pd-panel-background`      | Background color of panel                                        |
| `--pd-panel-subpanel-margin` | margin of subpanel. Can be used to separate and indent subpanels |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
