# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.0-1] - 2021-09-20

### Added

-   #69 Added paging functionality to pd-table

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

[1.8.0-1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.8.0-1
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
