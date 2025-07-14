# pd-list

## Usage

#### Simple list

```html
<pd-list>
    <pd-list-item>Text</pd-list-item>
    <pd-list-item>Text</pd-list-item>
    <pd-list-item>Text</pd-list-item>
</pd-list>
```

#### Status list

```html
<pd-list>
    <pd-list-item status="unset">Text</pd-list-item>
    <pd-list-item status="success">Text</pd-list-item>
    <pd-list-item status="danger">Text</pd-list-item>
</pd-list>
```

<br><br>

### vuejs Sample

```html
<pd-list>
    <pd-list-item v-for="geschaeft in geschaeftsListe" :key="geschaeft.id" :status="geschaeft.status">
        <p class="mb-1">{{geschaeft.id}}</p>
        <h5 class="mb-1">{{geschaeft.title}}</h5>
        <p class="mb-1">{{geschaeft.description}}</p>
    </pd-list-item>
</pd-list>
```

<!-- Auto Generated Below -->


## Slots

| Slot | Description  |
| ---- | ------------ |
|      | List content |


## CSS Custom Properties

| Name                        | Description                        |
| --------------------------- | ---------------------------------- |
| `--pd-list-border-color`    | Bottom border color of a list item |
| `--pd-list-content-padding` | Padding around list items          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
