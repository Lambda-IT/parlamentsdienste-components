# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.6] - 2024-04-02

### Changed

-   Margin fix for the checkbox of pd-list-item-expandable, when there is no status icon.

## [3.0.5] - 2024-03-26

### Changed

-   Added a disabled look to the pd-button component with a show-as-link property.
-   Updated all storybook stories to have the actions back after the update of stencil and storybook.
-   Added different icon-button-states to storybook.

### Changed

-   #278 Added a css variable `--pd-list-item-padding` to pd-list-item-expandable and pd-list-item.
-   #277 Added a new property `show-as-link` to the pd-button component. If set, the button will be displayed as a link but in a <button>-tag.
-   Improved the styling of the pd-button component: If the button contains an icon, the icon now hovers correctly in the colorscheme of the button.

## [3.0.3] - 2024-02-23

### Changed

-   #229 Added a multiselect property to pd-combobox. If set, the combobox can select multiple items. The pd-combobox event then emits an array of selected items.
-   #273 Added a disabled property to pd-menu-item. If set, the menu item gets disabled.
-   #275 Added lazy=false to the icon of pd-menu.

## [3.0.2] - 2024-01-03

### Changed

-   #266 Added onAuxClick to pdTable-rows and added the original pointerevent to the emitted details.
-   #267 Added a min-width to the pdRadio and the text of the pd-radio now has an overflow hidden and an ellipsis. The overflow and ellipsis only works if the parent of the pdRadio has a width. (Same as pdCheckbox)
-   #268 pdInput and pdTextarea arent focusable anymore when readonly
-   #269 The icon of pdSort is not lazy loaded anymore
-   #270 Added a size property to pdMenu (small, medium, large). It has the same heights as pdButton
-   #271 removed fill from newer icons
-   #272 removed padding-left from breadcrumbs

## [3.0.1] - 2023-12-05

### Changed

-   Added base64 data for breadcrumbs svg icon because of a bug with the bootstrap icon after updating stencil to 4.7.2

## [3.0.0] - 2023-11-23

### Changed

-   Updated Stencil to 4.7.2
-   Updated Storybook to 7.5.3

## [2.7.0] - 2023-10-26

### Added

-   new pd-sort component in final version

### Changed

-   #260 Refactored pdAlert to flexbox for better responsiveness
-   #264 Added a min-width to the pd-checkbox checkbox and the text of the pd-checkbox now has an overflow hidden and an ellipsis. The overflow and ellipsis only works if the parent of the pd-checkbox has a width.

## [2.6.17] - 2023-10-24

### Changed

-   #263 pd-sort: typo fix (it is pd-reverse NOT pd-revert event)
    -   the pd-change event emits the selected item (which has a sort property (asc | desc) --> sort the list that way )
    -   the pd-reverse event emits the selected item too (which has a sort property (asc | desc) --> sort the list THE OTHER WAY way than its saved in the sort property ❗)
    -   storybook readme updated
    -   alignment of the dropdown to right and hover effect of the button

## [2.6.16] - 2023-10-24

### Changed

-   #263 pd-sort:
    -   the pd-change event emits the selected item (which has a sort property (asc | desc) --> sort the list that way )
    -   the pd-revert event emits the selected item too (which has a sort property (asc | desc) --> sort the list THE OTHER WAY way than its saved in the sort property)

## [2.6.15] - 2023-10-20

### Changed

-   #260 The text of the action in pdAlert now wraps
-   #257 changed the default margin of subpanels to 0

### Added

-   #263 New pd-sort component. See the storybook for more information.

## [2.6.14] - 2023-09-15

### Changed

-   #259 icon_drag_drop.svg renamed capital I of Icon to lowercase i. Replaced the path of the svg with the original path from the design system.
-   #257 pd-panel: (1) removed --pdd-panel-margin-bottom css property because it affecte the margin of the subpanels and the main panel as well.
    (2) removed the hover-effect of the border bottom of the subpanel when it is opened
    (3) added --pd-panel-subpanel-margin. Only effectiv if panel is a subpanel. Can be used to separate and indent subpanels. If nothing else is set, it has a default value of 0 0 1rem 1rem to indent the subpanels slightly.
-   #258 pd-timeline: changed--pd-timeline-width to auto to prevent overflows.

## [2.6.13] - 2023-09-01

### Changed

-   #253 Changed the curser of pd-combobox to default when the combobox is disabled
-   #257 pd-panel: Removed the border-bottom of the subpanel when it is opened
    Added 5 new icons to pd-icon: file_exel, file_image, file_powerpoint, file_word, link_connection

## [2.6.12] - 2023-06-22

### Changed

-   #251 Changed the padding-left of the pd-panel-content and pd-panel-footer to 1rem

## [2.6.11] - 2023-06-20

### Changed

-   #248 Fixed the drag&drop icon typo error again.
-   #251 Changed the padding-left of the pd-panel to 1rem

## [2.6.10] - 2023-06-07

### Changed

-   #249 Moved the initialization of the PdCombobox store into the constructor to prevent errors when new items are passed while the component is rendering.
-   #248 Fixed the drag&drop icon typo error.
-   #134 Changed two state variables to normal variables to have prevent a lazy loading bug and see how this affects the #134 issue.

## [2.6.9] - 2023-04-28

### Changed

-   #242 Fixed the bug, that the selected state wasnt't correct after unselecting rows.
-   #134 Set the default lazyloading of the pd-icon to false.

## [2.6.8] - 2023-04-19

### Changed

-   #242 Fixed the bug, that the filtered rows of pd-table were not right after deleting a filter.

-   Fixed: selectable columns and state columns are now displayed correctly.

## [2.6.7] - 2023-03-30

### Changed

-   #240 The pd-combobox event only gets emitted when the user selects a new item or empties the combobox manually.
-   #240 If new items are set from outside, the pd-combobox event does not emit. Not even if an item was previously selected. We assume that the backend already knows which item is selected when new items are passed to the combobox.
-   #240 The setSelectedIndex method (accessible from the outside) does not emit the pd-combobox event anymore.
-   #240 Additional: Its highly recommended to set the disable-filter property when using backend searches.

-   Pd-Combobox: The first escape-key will just close the dropdown. A second escape-key will clear the input field and emit the pd-combobox event with null as value.
-   Pd-Combobox: The min-width css property is removed.

-   Pd-Button: Heights are now flexible. 2 or more rows of text are possible.

## [2.6.6] - 2023-03-22

### Added

-   #235 Added the external-row-handling property to pd-table which deactivates internal sorting, filtering and pagination.
-   #235 Added events pd-sort (emitted when sorting a column), pd-filter-change (emits all the set filters when a new one is set or one is modified or deleted) and pd-filter-input (emits the filter value when the user types in the filter input field)
-   #235 Added the selected-status property to pd-table which can be used to set the selected status of all rows on the top left of the table. The property can be set to 'all', 'none' or 'indeterminate'. It is only available when the external-row-handling property is set.
-   #235 Added a slot for an external pd-pagination component. The slot is only available when the external-row-handling property is set. The slot needs to be named with slot="external-pagination"

-   #163 Added missing storybook controls for pd-slider, pd-radio, pd-checkbox, pd-button

### Changed

-   Adjusted colors of pd-chip according to the design system

## [2.6.5] - 2023-03-16

### Added

-   #231 pd-combobox can now display icons. To add an icon use the iconName (for the supported icon-gallery) or the iconSrc property (to embed an external svg ressource) of the item object who is passed as an array of items to the combobox

## [2.6.4] - 2023-03-14

### Changed

-   fixed build error

## [2.6.3] - 2023-03-09

### Added

-   #222 added disable-filter property on pd-combobox

### Changed

-   #222 and #232 pd-combobox (event) now only gets emitted when actively selecting an item. Just navigating over the items does not emit the event anymore. As a consequence selecting by blur is no longer possible.
-   #222 Improved behaviour when changing the items from outside
-   #222 Improved search behaviour when the combobox has the selectable property. One item can be selected while navigating over the others with arrow keys is possible
-   #222 When the combobox has the selectable property the pd-combobox event now also gets emitted when the value is cleared with ESC or with a click on the delete icon
-   adjusted styling according to the design system

-   #228 Flatpicker instance gets destroyed in the disconnect-lifecycle hook of the component

## [2.6.2] - 2023-02-16

### Changed

-   #224 fixed pd-change event is now emitted when the input field is emptied manually
-   #225 fixed all headings are now according to the design system

## [2.6.1] - 2022-12-15

### Added

-   #201 added emptyitem property to pd-combobox
-   #201 added method setOpen(true or false) to open or close the dropdown of pd-combobox from outside
-   #201 added reset icon and functionality to pd-combobox

## [2.6.0] - 2022-11-24

### Added

-   #179 added/improved view-only mode for pd-input/pd-textarea/pd-dropdown/pd-combobox

## [2.5.1] - 2022-11-22

### Added

-   #206 added content padding css variable for pd-list
-   #209 added new icons

### Changed

-   #205 fixed border radius on list-item-expandable
-   #207 emit pd-search on reset
-   #208 all input fields now use max-width: 100% and overflow elipsis
-   #210 adjusted h6 styling

## [2.5.0] - 2022-10-04

### Added

-   #168 added disabled and readonly state for pd-table selectable
-   #179 added viewonly mode for pd-input & pd-textarea
-   #181 increased pd-sidebar width and font-size

### Changed

-   #182 fixed table filter no updating filtered rows
-   #183 fixed pd-list-item-expandable hover & select background
-   #186 fixed list-item-expandable getting selected with child checkbox

## [2.4.2] - 2022-09-26

### Changed

-   #171 fixed issue with pd-panel-header not updating to correct state
-   #171 fixed issue with pd-panel animation transition not collapsing correctly

## [2.4.1] - 2022-08-31

### Changed

-   #134 Added the vue-output-target

## [2.4.0] - 2022-08-30

### Changed

-   #134 reverted inline svg icons from 2.4.0-beta.0
-   #174 chevron now rotating when combobox open
-   #170 updated flatpicker to fix issue with time selection
-   #173 'x' icon removed when pd-chip is in readonly mode

## [2.4.0-beta.0] - 2022-07-11

### Changed

-   #134 inlined svg icons as separate components `BREAKING CHANGE!!!` `src`, `lazy`, `iconTitle`, `iconDescription` were removed from pdIcon

## [2.3.2] - 2022-06-20

### Added

-   #158 Added secondary pd-label style (no color)

### Changed

-   #159 fixed font-style for readonly pd-checkbox/pd-radio
-   #151 fixed background hover color for pd-list-item-expandable

## [2.3.1] - 2022-04-27

### Added

-   #151 Added selected style for pd-list-item-expandable

## [2.3.0] - 2022-04-14

### Added

-   #150 #137 Added subpanels and hover states for pd-panel
-   #135 Improved alert expand style

### Changed

-   #82 Fixed an issue with icons not rerendering correctly
-   #141 Fixed an issue with pd-dropdown opening when disabled

## [2.2.1] - 2022-04-05

### Changed

-   #121 pd-textarea auto-grow now has the same initial height as pd-input. Removed default resize functionality

## [2.2.0] - 2022-02-28

### Added

-   #125 Added `content-click` event with configurable hover style.

### Changed

-   #123 pd-datepicker now emits flatpickr on-change event instead of pd-input event
-   fixed pd-datepicker styling for focus states

## [2.1.0] - 2022-01-20

### Added

-   #99 Added data-test attributes to components
-   #72 Documented asset meta tag in icon story
-   #87 #69 pd-table now updates selectAll, paging, sort and filter on data change. Added new refresh method to manually refresh the pd-table

### Changed

-   `BREAKING CHANGE!!!` Changed Dropdown to not break text by default to better align with `<select>`. Added property to enable text-wrap

## [2.0.1] - 2022-01-10

### Added

-   #115 Added light mode for pd-tabs
-   Added es5 build target

### Changed

-   Changed focus-visible styles for icon buttons and links

## [2.0.0] - 2022-01-05

### Added

-   #115 Added pd-tabs as a new component
-   #101 Added icon slot to pd-panel header

### Changed

-   Changed styling of multiple components to comply with new, improved accessible styles. `BREAKING CHANGE!!!` Check your application's locally defined colors with these new styles.
-   Now using `:focus-visible` instead of `focus` for focus styles
-   Improved/changes styles on multiple components
-   Added error states to additional input components
-   #98 removed pd-datepicker mobile display
-   #103 pd-input, pd-search, pd-dropdown and pd-combobox now use a default size `<input>` of 1. A new prop 'size' was added when missing
-   #112 changed eye icon for chevron in pd-list-item-expandable

## [1.8.2] - 2021-12-23

### Added

-   #102 Added additional icons. `BREAKING CHANGE!!!` Renamed icon 'expand' to 'caret'. Added new 'expand' icon.
-   #104 Added pd-button fullwidth attr.

## [1.8.1] - 2021-12-02

### Added

-   #110 pd-label: Added a new pd-label component

### Changed

-   #105 pd-radio: fixed issue with radio not rendering when verticalAdjust not set
-   #106 pd-textarea: fixed issue with eventnames
-   #100 pd-dropdown: added logs for debugging

## [1.8.0] - 2021-11-19

### Added

-   #93 form elements: add vertical alignment possibility for inline forms

### Changed

-   #101 pd-panel: Fixed panel collapse mode for disabled state
-   #94 pd-button: Fixed click events
-   #91 pd-datepicker: Fixed visualized error border
-   #90 pd-datepicker: Fixed input padding
-   #89 pd-list-expandable: Fixed expandable grid config
-   #88 form components: Fixed blur event for disabled elements
-   #88 form components: Fixed cursor css for readonly and disabled state

## [1.8.0-1] - 2021-09-20

### Added

-   #69 Added paging functionality to pd-table

## [1.7.5] - 2021-09-30

### Changed

-   #85 Fixed issue with click outside behavior for dropdown/menu/table-filter

## [1.7.4] - 2021-09-21

### Changed

-   #83 pd-Combobox: 🐛 fixed when the items list is empty

## [1.7.3] - 2021-09-16

### Added

-   #77 Implemented lazy flags for icon loading process

### Changed

-   #76 Fix behavior for preselected values
-   #78 Chips, set correct event names
-   #80 Fix styling for expandable list items without status

## [1.7.2] - 2021-08-26

### Added

-   #71 Added error and placeholder property to datepicker

### Changed

-   #71 Fixed fontsize for datepicker label
-   #72 Fixed icon filename
-   #74 pd-row-clicked event on table now only executed on cells with values

## [1.7.1] - 2021-07-22

### Added

-   #67 Button: Added 'center' position button icon (no text)

## [1.7.0] - 2021-07-20

### Added

-   #62 ListItemExpandable: 🎉 Added expandable list item
-   #63 Alert: new configuration and slot for expandable details. `BREAKING CHANGE!!!` removed properties 'headline' and 'action'

### Changed

-   #61 Panel: Full Panel header is now clickable
-   Storybook: Improved stories with seperate readme for subcomponents
-   A11y: Improved components for accessablility

## [1.6.2] - 2021-07-06

### Changed

-   #59 Combobox: 🎨 Fixed combobox open on new items
-   Combox: Fixed z-index for menu

## [1.6.1] - 2021-06-14

### Changed

-   #57 Combobox: 🎨 Fixed readonly/disabled styles
-   README: Edited Readme

## [1.6.0] - 2021-06-11

### Added

-   #55 Icon: 🎉 Add blue state icon
-   #56 Menu: 🎉 Allow to set preferred menu position
-   #57 Combobox: 🎉 Improved combobox with selected state
-   #58 Table: 🎉 Manage selected row status outside of the table

### Changed

-   #53 Datepicker: 🐛 Fixed readonly mode
-   Libraries: 🎨 Updated libs

## [1.5.2] - 2021-05-12

### Added

-   #42 Checkbox: 🎉 Support indeterminate checkboxes
-   #46 Menu: 🎉 Add menu placeholder text
-   #47 Table: 🎉 State icons in datatable

### Changed

-   #39 Chips: 🎨 Fixed styling chips
-   #44 Button: 🎨 Fixed buttons sizes

## [1.5.1] - 2021-04-28

### Changed

-   🐛 Fixed Version in package.json

## [1.5.0] - 2021-04-28

### Added

-   #34 Table: 🎉 Added click events for rows and allowed single row configuration for icons

### Changed

-   #32 Chip: 🐛 Multiple fixes for pd-chip
-   #38 Table: 🐛 Fixed alert colors defined by DesignSensor

## [1.4.0] - 2021-04-13

### Added

-   #27 Tooltip / Popover: 🎉 Added Themes and examples on how to create Tooltip/Popover
-   #28 Table: 🎉 Added possibility to make rows selectable. `BREAKING CHANGE!!!` The event `pd-selected` is now used for selected rows. Previous event from the button group was renamed to `pd-view`.
-   #22 Textarea: 🎉 Added Textarea component with auto-grow feature.

## [1.3.1] - 2021-04-12

### Changed

-   #33 Dropdown: 🐛 Fixed issue with Dropdown not closing on selection

## [1.3.0] - 2021-03-30

### Added

-   #25 Dropdown: 🎉 Added readonly, error and required attribute
-   #26 Alert: 🎉 Added title attribute
-   #29: 🎉 Readonly etc, Checkbox, Dropdown, Datepicker, Combobox

### Changed

-   #24 Icon: 🐛 Rendering had timing issue for initial render cycle
-   #23 Combobox: 🐛⚡ Multiple refactorings and bugfixing, care `BREAKING CHANGE!!!` because of new items list. Old way with a string[], new with as ComboBoxItem[].
-   Checkbox: 🐛 Styling Improvement

## [1.2.2] - 2021-03-19

### Changed

-   #15 Dropdown: 🐛 label styling
-   Combobox: 🐛 label styling

## [1.2.1] - 2021-03-17

### Added

-   #15 Dropdown: disabled property
-   #15 Dropdown: label property

## [1.2.0] - 2021-03-15

### Added

-   Menu Component

### Changed

-   #14 Fix Datepicker Bugs
-   #15 Fix Dropdown Bugs
-   Table Component, add possibility to have a context menu and action buttons

## [1.1.0] - 2021-03-01

### Added

-   Chips Component
-   Combobox Component

### Changed

-   Icon alignment for prefixed icons in chips, buttons etc.

## [1.0.1] - 2021-02-15

### Changed

-   A meta-tag can now be used to set a custom assetpath
-   Extracted font-faces to a separate css to allow custom font paths

## [1.0.0] - 2021-02-03

### Added

-   Initial Changelog.md file
-   Pagination Control

### Changed

-   Simplified pd-modal. Removed open/close logic but added events for backdrop, close, ESC-button click.
-   pd-panel now has bottom border radius when closed
-   pd-navbar now shows hamburger menu on width trigger. pd-menu Event added for hamburger click.
-   pd-alert now uses icons depending on the alert status
-   pd-input now uses a different design for the readonly mode
-   pd-input label font decreased

[3.0.6]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v3.0.6
[3.0.5]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v3.0.5
[3.0.4]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v3.0.4
[3.0.3]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v3.0.3
[3.0.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v3.0.2
[3.0.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v3.0.1
[3.0.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v3.0.0
[2.7.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.7.0
[2.6.17]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.17
[2.6.16]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.16
[2.6.15]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.15
[2.6.14]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.14
[2.6.13]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.13
[2.6.12]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.12
[2.6.11]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.11
[2.6.10]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.10
[2.6.9]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.9
[2.6.8]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.8
[2.6.7]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.7
[2.6.6]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.6
[2.6.5]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.5
[2.6.4]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.4
[2.6.3]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.3
[2.6.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.2
[2.6.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.1
[2.6.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.6.0
[2.5.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.5.1
[2.5.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.5.0
[2.4.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.4.2
[2.4.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.4.1
[2.4.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.4.0
[2.4.0-beta.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.4.0-beta.0
[2.3.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.3.2
[2.3.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.3.1
[2.3.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.3.0
[2.2.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.2.1
[2.2.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.2.0
[2.1.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.1.0
[2.0.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.0.1
[2.0.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v2.0.0
[1.8.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.8.2
[1.8.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.8.1
[1.8.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.8.0
[1.8.0-1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.8.0-1
[1.7.5]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.7.5
[1.7.4]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.7.4
[1.7.3]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.7.3
[1.7.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.7.2
[1.7.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.7.1
[1.7.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.7.0
[1.6.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.6.2
[1.6.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.6.1
[1.6.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.6.0
[1.5.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.5.2
[1.5.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.5.1
[1.5.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.5.0
[1.4.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.4.0
[1.3.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.3.1
[1.3.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.3.0
[1.2.3]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.2.3
[1.2.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.2.2
[1.2.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.2.1
[1.2.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.2.0
[1.1.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.1.0
[1.0.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.0.1
[1.0.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.0.0
