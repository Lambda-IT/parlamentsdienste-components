# Tooltip / Popover

For Tooltips / Popovers you need to add `tippy.js` and it's dependency `popper.js` to your project.
Check https://atomiks.github.io/tippyjs/ for additional documentation. They do not use webcomponents, but there are tippy themes provided in `parlamentsdienstecore.css`.

To Include popperjs and tippyjs into your project, you could use a CDN for example.

```html
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
```

# Tooltips

## Usage

With a pd-button element on the document like this:

```html
<pd-button id="myButton">My Button</pd-button>
```

You can initialize it like so:

```js
tippy('#myButton', {
    content: "I'm a tooltip!",
    placement: 'bottom',
});
```

# Popover

For a popover there are two themes available in the `parlamentsdienstecore.css`. Use the following setup and set the theme to either `pd-popover` or `pd-popover-header`, depending if the h3 header is available or not. Use the classes below to make sure the theme works correctly

For a left and right placement with a header, you should use `left-start` or `right start` as the `placement` property to make sure the arrow is not placed inbetween the header and body of the popover.

You can initialize it like this:

```js
tippy('#myButton', {
    content: `<div class="popover" role="tooltip"><h3 class="popover-header">Popover Header</h3><div class="popover-body">The Popover plugin is similar to tooltips. Right?</div></div>`,
    allowHTML: true,
    theme: 'pd-popover-header', // or pd-popover
    placement: 'bottom',
});
```
