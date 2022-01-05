# pd-tabs

## Usage

```html
<pd-tabs tabs="..."></pd-tabs>
```

Tabs are defined using the following data structure. _Be aware that these cannot be defined directly in html._

```javascript
const tabs = [
    { id: 0, text: 'Tab one' },
    { id: 1, text: 'Tab two' },
    { id: 2, text: 'Tab three', checked: true },
    { id: 3, text: 'Tab four' },
];
```

## Interfaces

```javascript
export interface TabValue {
    id: number;
    text: string;
    checked?: boolean;
}
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description       | Type         | Default |
| -------- | --------- | ----------------- | ------------ | ------- |
| `light`  | `light`   | List of tab texts | `boolean`    | `false` |
| `tabs`   | --        | List of tab texts | `TabValue[]` | `[]`    |


## Events

| Event       | Description                         | Type                    |
| ----------- | ----------------------------------- | ----------------------- |
| `pd-change` | Emitted when the value has changed. | `CustomEvent<TabValue>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
