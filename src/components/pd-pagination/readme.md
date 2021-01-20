# pd-pagination

## Usage

```html
<pd-pagination total-pages="10" current-page="3" visible-pages="5"></pd-pagination>
```

`<pd-pagination>` fires an event `pd-change` when a page number is clicked on the pagination component. The event notifies the parent component which page number was clicked. You will need to implement an event handler in the parent component that listens for the event fired by `<pd-pagination>`. The parent component can use that page number to fetch the corresponding page data and set the new `current-page` property of `<pd-pagination>`

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                         | Type      | Default |
| ----------------- | ------------------- | ------------------------------------------------------------------- | --------- | ------- |
| `currentPage`     | `current-page`      | Current page number                                                 | `number`  | `1`     |
| `separator`       | `separator`         | separator string in simple mode                                     | `string`  | `'von'` |
| `showPageButtons` | `show-page-buttons` | switch between pagination mode (simple with separator/page buttons) | `boolean` | `false` |
| `totalPages`      | `total-pages`       | Number of pages                                                     | `number`  | `5`     |
| `visiblePages`    | `visible-pages`     | visible pages in 'shopPageButtons' mode                             | `number`  | `5`     |


## Events

| Event       | Description                              | Type                  |
| ----------- | ---------------------------------------- | --------------------- |
| `pd-change` | Page change event. Returns selected page | `CustomEvent<number>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
