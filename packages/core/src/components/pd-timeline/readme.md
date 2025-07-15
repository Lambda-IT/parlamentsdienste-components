# pd-timeline

## Usage

```html
<pd-timeline start="true" end="false">
    <pd-timeline-date date="13.03.2019" header="Ständerat">
        Annahme
    </pd-timeline-date>
    <pd-timeline-date date="28.04.2019" header="SiK-NR" href="http://www.google.ch">
        Beginn der Beratung<br />
        <a href="#">Unterlagen (PDF)</a>
    </pd-timeline-date>
    <pd-timeline-date date="19.09.2019" header="Nationalrat">
        Ablehnung
    </pd-timeline-date>
</pd-timeline>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                  | Type      | Default |
| -------- | --------- | ---------------------------------------------------------------------------- | --------- | ------- |
| `end`    | `end`     | Adds rounded bottom of the date line to indicate that the timeline ends here | `boolean` | `false` |
| `start`  | `start`   | Adds rounded top of the date line to indicate that the timeline starts here  | `boolean` | `false` |


## Slots

| Slot | Description    |
| ---- | -------------- |
|      | timeline items |


## CSS Custom Properties

| Name                  | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `--pd-timeline-width` | Width of timeline. This includes the date line and content |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
