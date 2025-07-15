# To add in the docs

## new prop `selected` for `pd-dropdown` and `pd-combobox`

Added for the valueaccessor. can be an dropdown item object (but only needs an id prop)`{ id: '1', ... }` or a string id `asdf` or a number `1` to select an item.

## BREAKING: changed output event

`pd-input`, `pd-textarea`, `pd-search` and `pd-slider` are now emitting the value directly with the `pd-change` (also `pd-input`, `pd-search` in `pd-search`) event. Before the value was wrapped in an object with a `value` property. This is now consistent with the other components like `pd-dropdown`, `pd-combobox`, etc.This was necessary to make the angular valueaccessor work correctly.

# Todos:

-   `pd-combobox` bug in react when selected prop gets a useState value.
-   `pd-input`: `pd-change` fires 2 times when entering something in the input

# Maybe Todos?

-   pd-table: type for `rows`property is `PdTableRow[]` but thats not really what the input needs to be.
-   Maybe check the other properties as well.

# Follow-up's?

-   card component (only css) doenst look good
-   inline styles aren't good documented
-   make a real component out of `tooltip` so you dont need to import tippy.js from a cdn
