# To add in the docs

## new prop `selected` for `pd-dropdown` and `pd-combobox`

Added for the valueaccessor. can be an dropdown item object (but only needs an id prop)`{ id: '1', ... }` or a string id `asdf` or a number `1` to select an item.

## BREAKING: changed output event for `pd-input` and `pd-textarea` and `pd-slider`

`pd-input`, `pd-textarea`, `pd-search` and `pd-slider` are now emitting the value directly with the `pd-change` (also `pd-input`, `pd-search` in `pd-search`) event. Before the value was wrapped in an object with a `value` property. This is now consistent with the other components like `pd-dropdown`, `pd-combobox`, etc.This was necessary to make the angular valueaccessor work correctly.
