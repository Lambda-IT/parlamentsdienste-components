# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2020-03-30

### Added

-   #25 Dropdown: 🎉 Added readonly, error and required attribute
-   #26 Alert: 🎉 Added title attribute
-   #29: 🎉 Readonly etc, Checkbox, Dropdown, Datepicker, Combobox

### Changed

-   #24 Icon: 🐛 Rendering had timing issue for initial render cycle
-   #23 Combobox: 🐛⚡ Multiple refactorings and bugfixing, care `breaking change` because of new items list. Old way with a string[], new with as ComboBoxItem[].
-   Checkbox: 🐛 Styling Improvement

## [1.2.2] - 2020-03-19

### Changed

-   #15 Dropdown: 🐛 label styling
-   Combobox: 🐛 label styling

## [1.2.1] - 2020-03-17

### Added

-   #15 Dropdown: disabled property
-   #15 Dropdown: label property

## [1.2.0] - 2020-03-15

### Added

-   Menu Component

### Changed

-   #14 Fix Datepicker Bugs
-   #15 Fix Dropdown Bugs
-   Table Component, add possibility to have a context menu and action buttons

## [1.1.0] - 2020-03-01

### Added

-   Chips Component
-   Combobox Component

### Changed

-   Icon alignment for prefixed icons in chips, buttons etc.

## [1.0.1] - 2020-02-15

### Changed

-   A meta-tag can now be used to set a custom assetpath
-   Extracted font-faces to a separate css to allow custom font paths

## [1.0.0] - 2020-02-03

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

[1.2.3]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.2.3
[1.2.2]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.2.2
[1.2.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.2.1
[1.2.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.2.0
[1.1.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.1.0
[1.0.1]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.0.1
[1.0.0]: https://github.com/Lambda-IT/parlamentsdienste-components/releases/tag/v1.0.0
