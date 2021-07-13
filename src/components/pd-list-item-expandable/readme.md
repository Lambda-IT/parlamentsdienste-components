# pd-list-item-expandable

## Usage

#### Expandable List

```html
<pd-list class="m-3">
    <pd-list-item-expandable edit expandable expand menu status="success" style="--pd-list-background: #fff">
        <div>16.3112</div>
        <a>WBK-NR: Antrag auf Ablehnung </a>
        <div slot="expandable">Expandable Content</div>
        <pd-menu-item text="Drucken" slot="menu">
            <pd-icon size="2" name="print"></pd-icon>
        </pd-menu-item>
        <pd-menu-item text="Support" slot="menu">
            <pd-icon size="2" name="support"></pd-icon>
        </pd-menu-item>
    </pd-list-item-expandable>
</pd-list>
```

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                         | Type                                                      | Default     |
| ------------ | ------------ | ------------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| `collapsed`  | `collapsed`  | Expands / collapses the inner content of the list item              | `boolean`                                                 | `true`      |
| `edit`       | `edit`       | Shows edit button                                                   | `boolean`                                                 | `false`     |
| `expand`     | `expand`     | Shows expand button with simple event (no expandable inner content) | `boolean`                                                 | `false`     |
| `expandable` | `expandable` | Shows expand (toggle) button for expandable inner content           | `boolean`                                                 | `false`     |
| `menu`       | `menu`       | Shows menu button                                                   | `boolean`                                                 | `false`     |
| `status`     | `status`     | Status icon for list item                                           | `"danger" \| "info" \| "success" \| "unset" \| "warning"` | `undefined` |


## Events

| Event       | Description               | Type                |
| ----------- | ------------------------- | ------------------- |
| `pd-edit`   | Edit button click event   | `CustomEvent<void>` |
| `pd-expand` | Expand button click event | `CustomEvent<void>` |


## Dependencies

### Depends on

- [pd-icon](../pd-icon)
- [pd-menu](../pd-menu)

### Graph
```mermaid
graph TD;
  pd-list-item-expandable --> pd-icon
  pd-list-item-expandable --> pd-menu
  pd-menu --> pd-icon
  style pd-list-item-expandable fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
