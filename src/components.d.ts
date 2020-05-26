/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DropdownItem, } from "./components/pd-dropdown/pd-dropdown";
import { InputChangeEventDetail, PdColumn, PdModalConfig, TextFieldTypes, } from "./interface";
export namespace Components {
    interface PdAlert {
        /**
          * Show action
         */
        "action": boolean;
        /**
          * A link displayed to the right side of the alert
         */
        "actionHref": string;
        /**
          * Target for action href (eg. _blank)
         */
        "actionTarget": string;
        /**
          * Text to show on action
         */
        "actionText": string;
        /**
          * Display an option to close the alert
         */
        "closable": boolean;
        /**
          * Color schema used for the alert
         */
        "color": "primary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    }
    interface PdBackdrop {
        /**
          * Invisible backdrop when set to false
         */
        "visible": boolean;
    }
    interface PdButton {
        /**
          * Color schema used for the button
         */
        "color": "primary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
        /**
          * Sets button to disbaled state
         */
        "disabled": boolean;
        /**
          * Set href to create a link button
         */
        "href": string;
        "iconLocation": "left" | "right" | "none";
        /**
          * Use outline schema
         */
        "outline": boolean;
        /**
          * Button size
         */
        "size": "normal" | "small" | "large";
        /**
          * Sets target for link button e.g. '_blank'
         */
        "target": string;
        /**
          * Sets button type |text|submit|reset|
         */
        "type": "button" | "text" | "submit";
    }
    interface PdButtonGroup {
    }
    interface PdCheckbox {
        /**
          * Sets check state of the checkbox true/false
         */
        "checked": boolean;
        /**
          * Sets checkbox to disabled state
         */
        "disabled": boolean;
        "name": string;
        /**
          * Checkbox description text
         */
        "text": string;
        "value": boolean;
    }
    interface PdDatepicker {
    }
    interface PdDropdown {
        /**
          * Enable selection of an empty item
         */
        "emptyItem": boolean;
        /**
          * Data used for the empty item
         */
        "emptyItemData": DropdownItem;
        /**
          * Items visible in dropdown
         */
        "itemCount": number;
        /**
          * Items to display and select in dropdown
         */
        "items": DropdownItem[];
        /**
          * Placeholder when no item is selected
         */
        "placeholder": string;
    }
    interface PdDropdownItem {
        /**
          * Find an highlight this text in value
         */
        "highlight"?: string | number;
        /**
          * Sets this item to selected
         */
        "selected": boolean;
        /**
          * Value for this item
         */
        "value": string;
    }
    interface PdIcon {
        /**
          * Flip in X/Y direction
         */
        "flip": "x" | "y" | "xy";
        /**
          * Name of an icon from the provided gallery
         */
        "name"?: string;
        /**
          * Rotation in 'deg'
         */
        "rotate": number;
        /**
          * Size of the icon in 'em'
         */
        "size"?: number;
        /**
          * Spin animation in ms per rotation
         */
        "spin": number;
        /**
          * change animation direction
         */
        "spinReverse": boolean;
        /**
          * Specifies the `src` url of an SVG file to use.
         */
        "src"?: string;
    }
    interface PdInput {
        /**
          * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
         */
        "accept"?: string;
        /**
          * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        "autocapitalize": string;
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete": "on" | "off";
        /**
          * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        "autocorrect": "on" | "off";
        /**
          * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus": boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        "clearOnEdit"?: boolean;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        "error": boolean;
        "helperText"?: string;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
        "label"?: string;
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
         */
        "multiple"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "pattern"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * Sets focus on the specified `pd-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "size"?: number;
        /**
          * If `true`, the element will have its spelling and grammar checked.
         */
        "spellcheck": boolean;
        /**
          * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
         */
        "step"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type": TextFieldTypes;
        /**
          * The value of the input.
         */
        "value"?: string | number | null;
    }
    interface PdList {
    }
    interface PdListItem {
        "status": "success" | "danger" | "warning" | "unset";
    }
    interface PdModal {
        /**
          * This triggers the modal to visually close Alternatively the open property can be set to 'false' to trigger this returnData: will be added to 'pdModalWhenClosed' Event or 'whenClosed' method
         */
        "closeModal": (returnData?: any) => Promise<void>;
        /**
          * Configuration properties
         */
        "config": PdModalConfig;
        "data": any;
        /**
          * This triggers the modal to visually open / close Alternatively the openModal() method can be called to trigger this
         */
        "open": boolean;
        /**
          * This triggers the modal to visually open Alternatively the open property can be set to 'true' to trigger this
         */
        "openModal": () => Promise<void>;
        /**
          * Returns a promise that will be resolved with modal 'returnData' when the modal is closed
         */
        "whenClosed": () => Promise<any>;
    }
    interface PdNavbar {
    }
    interface PdNavbarItem {
        "enabled": boolean;
        /**
          * Set href to create a link button
         */
        "href": string;
        /**
          * Sets target for link button e.g. '_blank'
         */
        "target": string;
        "text": string;
    }
    interface PdPanel {
        /**
          * Expands / collapses the panel content
         */
        "collapsed": boolean;
        /**
          * Show/hide collapse button
         */
        "collapsible": boolean;
    }
    interface PdPanelContent {
    }
    interface PdPanelFooter {
    }
    interface PdPanelHeader {
    }
    interface PdProgressBar {
        "color": "primary" | "success" | "danger" | "warning" | "info";
        "decimals": number;
        "label": boolean;
        "striped": boolean;
        "value": number;
    }
    interface PdRadio {
        "checked": boolean;
        /**
          * Sets radio to disabled state
         */
        "disabled": boolean;
        "label"?: string | null;
        "name": string;
        "value"?: any | null;
    }
    interface PdSearch {
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        /**
          * Show matching parts in resuls as highlighted
         */
        "highlight"?: boolean;
        "label"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        "results": string[];
        /**
          * Sets focus on the specified `pd-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The value of the input.
         */
        "value"?: string | number | null;
    }
    interface PdSidebar {
    }
    interface PdSidebarItem {
        "enabled": boolean;
        /**
          * Set href to create a link button
         */
        "href": string;
        "icon": string;
        "size": string;
        /**
          * Sets target for link button e.g. '_blank'
         */
        "target": string;
        "text": string;
    }
    interface PdSlider {
        "disabled": any;
        "max": number;
        "min": number;
        "name": string;
        "step": number;
        "value"?: number | null;
    }
    interface PdTable {
        /**
          * A definition for each column of the table
         */
        "columns": PdColumn[];
        /**
          * Height of header cells
         */
        "headerHeight": string;
        /**
          * The table style
         */
        "headerStyle": "light" | "dark" | "gray";
        /**
          * The minimum width the table should take
         */
        "minWidth": string;
        /**
          * Height of rows
         */
        "rowHeight": string;
        /**
          * The data definition for each row to display
         */
        "rows": any;
    }
    interface PdTimeline {
    }
    interface PdToast {
        /**
          * The Toast title
         */
        "header": string;
        /**
          * Additional toast information (e.g. 11 minutes ago)
         */
        "info": string;
        /**
          * Changes max-with of the toast
         */
        "size": "small" | "large";
    }
}
declare global {
    interface HTMLPdAlertElement extends Components.PdAlert, HTMLStencilElement {
    }
    var HTMLPdAlertElement: {
        prototype: HTMLPdAlertElement;
        new (): HTMLPdAlertElement;
    };
    interface HTMLPdBackdropElement extends Components.PdBackdrop, HTMLStencilElement {
    }
    var HTMLPdBackdropElement: {
        prototype: HTMLPdBackdropElement;
        new (): HTMLPdBackdropElement;
    };
    interface HTMLPdButtonElement extends Components.PdButton, HTMLStencilElement {
    }
    var HTMLPdButtonElement: {
        prototype: HTMLPdButtonElement;
        new (): HTMLPdButtonElement;
    };
    interface HTMLPdButtonGroupElement extends Components.PdButtonGroup, HTMLStencilElement {
    }
    var HTMLPdButtonGroupElement: {
        prototype: HTMLPdButtonGroupElement;
        new (): HTMLPdButtonGroupElement;
    };
    interface HTMLPdCheckboxElement extends Components.PdCheckbox, HTMLStencilElement {
    }
    var HTMLPdCheckboxElement: {
        prototype: HTMLPdCheckboxElement;
        new (): HTMLPdCheckboxElement;
    };
    interface HTMLPdDatepickerElement extends Components.PdDatepicker, HTMLStencilElement {
    }
    var HTMLPdDatepickerElement: {
        prototype: HTMLPdDatepickerElement;
        new (): HTMLPdDatepickerElement;
    };
    interface HTMLPdDropdownElement extends Components.PdDropdown, HTMLStencilElement {
    }
    var HTMLPdDropdownElement: {
        prototype: HTMLPdDropdownElement;
        new (): HTMLPdDropdownElement;
    };
    interface HTMLPdDropdownItemElement extends Components.PdDropdownItem, HTMLStencilElement {
    }
    var HTMLPdDropdownItemElement: {
        prototype: HTMLPdDropdownItemElement;
        new (): HTMLPdDropdownItemElement;
    };
    interface HTMLPdIconElement extends Components.PdIcon, HTMLStencilElement {
    }
    var HTMLPdIconElement: {
        prototype: HTMLPdIconElement;
        new (): HTMLPdIconElement;
    };
    interface HTMLPdInputElement extends Components.PdInput, HTMLStencilElement {
    }
    var HTMLPdInputElement: {
        prototype: HTMLPdInputElement;
        new (): HTMLPdInputElement;
    };
    interface HTMLPdListElement extends Components.PdList, HTMLStencilElement {
    }
    var HTMLPdListElement: {
        prototype: HTMLPdListElement;
        new (): HTMLPdListElement;
    };
    interface HTMLPdListItemElement extends Components.PdListItem, HTMLStencilElement {
    }
    var HTMLPdListItemElement: {
        prototype: HTMLPdListItemElement;
        new (): HTMLPdListItemElement;
    };
    interface HTMLPdModalElement extends Components.PdModal, HTMLStencilElement {
    }
    var HTMLPdModalElement: {
        prototype: HTMLPdModalElement;
        new (): HTMLPdModalElement;
    };
    interface HTMLPdNavbarElement extends Components.PdNavbar, HTMLStencilElement {
    }
    var HTMLPdNavbarElement: {
        prototype: HTMLPdNavbarElement;
        new (): HTMLPdNavbarElement;
    };
    interface HTMLPdNavbarItemElement extends Components.PdNavbarItem, HTMLStencilElement {
    }
    var HTMLPdNavbarItemElement: {
        prototype: HTMLPdNavbarItemElement;
        new (): HTMLPdNavbarItemElement;
    };
    interface HTMLPdPanelElement extends Components.PdPanel, HTMLStencilElement {
    }
    var HTMLPdPanelElement: {
        prototype: HTMLPdPanelElement;
        new (): HTMLPdPanelElement;
    };
    interface HTMLPdPanelContentElement extends Components.PdPanelContent, HTMLStencilElement {
    }
    var HTMLPdPanelContentElement: {
        prototype: HTMLPdPanelContentElement;
        new (): HTMLPdPanelContentElement;
    };
    interface HTMLPdPanelFooterElement extends Components.PdPanelFooter, HTMLStencilElement {
    }
    var HTMLPdPanelFooterElement: {
        prototype: HTMLPdPanelFooterElement;
        new (): HTMLPdPanelFooterElement;
    };
    interface HTMLPdPanelHeaderElement extends Components.PdPanelHeader, HTMLStencilElement {
    }
    var HTMLPdPanelHeaderElement: {
        prototype: HTMLPdPanelHeaderElement;
        new (): HTMLPdPanelHeaderElement;
    };
    interface HTMLPdProgressBarElement extends Components.PdProgressBar, HTMLStencilElement {
    }
    var HTMLPdProgressBarElement: {
        prototype: HTMLPdProgressBarElement;
        new (): HTMLPdProgressBarElement;
    };
    interface HTMLPdRadioElement extends Components.PdRadio, HTMLStencilElement {
    }
    var HTMLPdRadioElement: {
        prototype: HTMLPdRadioElement;
        new (): HTMLPdRadioElement;
    };
    interface HTMLPdSearchElement extends Components.PdSearch, HTMLStencilElement {
    }
    var HTMLPdSearchElement: {
        prototype: HTMLPdSearchElement;
        new (): HTMLPdSearchElement;
    };
    interface HTMLPdSidebarElement extends Components.PdSidebar, HTMLStencilElement {
    }
    var HTMLPdSidebarElement: {
        prototype: HTMLPdSidebarElement;
        new (): HTMLPdSidebarElement;
    };
    interface HTMLPdSidebarItemElement extends Components.PdSidebarItem, HTMLStencilElement {
    }
    var HTMLPdSidebarItemElement: {
        prototype: HTMLPdSidebarItemElement;
        new (): HTMLPdSidebarItemElement;
    };
    interface HTMLPdSliderElement extends Components.PdSlider, HTMLStencilElement {
    }
    var HTMLPdSliderElement: {
        prototype: HTMLPdSliderElement;
        new (): HTMLPdSliderElement;
    };
    interface HTMLPdTableElement extends Components.PdTable, HTMLStencilElement {
    }
    var HTMLPdTableElement: {
        prototype: HTMLPdTableElement;
        new (): HTMLPdTableElement;
    };
    interface HTMLPdTimelineElement extends Components.PdTimeline, HTMLStencilElement {
    }
    var HTMLPdTimelineElement: {
        prototype: HTMLPdTimelineElement;
        new (): HTMLPdTimelineElement;
    };
    interface HTMLPdToastElement extends Components.PdToast, HTMLStencilElement {
    }
    var HTMLPdToastElement: {
        prototype: HTMLPdToastElement;
        new (): HTMLPdToastElement;
    };
    interface HTMLElementTagNameMap {
        "pd-alert": HTMLPdAlertElement;
        "pd-backdrop": HTMLPdBackdropElement;
        "pd-button": HTMLPdButtonElement;
        "pd-button-group": HTMLPdButtonGroupElement;
        "pd-checkbox": HTMLPdCheckboxElement;
        "pd-datepicker": HTMLPdDatepickerElement;
        "pd-dropdown": HTMLPdDropdownElement;
        "pd-dropdown-item": HTMLPdDropdownItemElement;
        "pd-icon": HTMLPdIconElement;
        "pd-input": HTMLPdInputElement;
        "pd-list": HTMLPdListElement;
        "pd-list-item": HTMLPdListItemElement;
        "pd-modal": HTMLPdModalElement;
        "pd-navbar": HTMLPdNavbarElement;
        "pd-navbar-item": HTMLPdNavbarItemElement;
        "pd-panel": HTMLPdPanelElement;
        "pd-panel-content": HTMLPdPanelContentElement;
        "pd-panel-footer": HTMLPdPanelFooterElement;
        "pd-panel-header": HTMLPdPanelHeaderElement;
        "pd-progress-bar": HTMLPdProgressBarElement;
        "pd-radio": HTMLPdRadioElement;
        "pd-search": HTMLPdSearchElement;
        "pd-sidebar": HTMLPdSidebarElement;
        "pd-sidebar-item": HTMLPdSidebarItemElement;
        "pd-slider": HTMLPdSliderElement;
        "pd-table": HTMLPdTableElement;
        "pd-timeline": HTMLPdTimelineElement;
        "pd-toast": HTMLPdToastElement;
    }
}
declare namespace LocalJSX {
    interface PdAlert {
        /**
          * Show action
         */
        "action"?: boolean;
        /**
          * A link displayed to the right side of the alert
         */
        "actionHref"?: string;
        /**
          * Target for action href (eg. _blank)
         */
        "actionTarget"?: string;
        /**
          * Text to show on action
         */
        "actionText"?: string;
        /**
          * Display an option to close the alert
         */
        "closable"?: boolean;
        /**
          * Color schema used for the alert
         */
        "color"?: "primary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
        /**
          * Emitted when action closed button was pressed.
         */
        "onPd-on-closed"?: (event: CustomEvent<MouseEvent>) => void;
    }
    interface PdBackdrop {
        "onPd-on-tap"?: (event: CustomEvent<void>) => void;
        /**
          * Invisible backdrop when set to false
         */
        "visible"?: boolean;
    }
    interface PdButton {
        /**
          * Color schema used for the button
         */
        "color"?: "primary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
        /**
          * Sets button to disbaled state
         */
        "disabled"?: boolean;
        /**
          * Set href to create a link button
         */
        "href"?: string;
        "iconLocation"?: "left" | "right" | "none";
        /**
          * Use outline schema
         */
        "outline"?: boolean;
        /**
          * Button size
         */
        "size"?: "normal" | "small" | "large";
        /**
          * Sets target for link button e.g. '_blank'
         */
        "target"?: string;
        /**
          * Sets button type |text|submit|reset|
         */
        "type"?: "button" | "text" | "submit";
    }
    interface PdButtonGroup {
    }
    interface PdCheckbox {
        /**
          * Sets check state of the checkbox true/false
         */
        "checked"?: boolean;
        /**
          * Sets checkbox to disabled state
         */
        "disabled"?: boolean;
        "name"?: string;
        "onPd-on-checked"?: (event: CustomEvent<any>) => void;
        /**
          * Checkbox description text
         */
        "text"?: string;
        "value"?: boolean;
    }
    interface PdDatepicker {
    }
    interface PdDropdown {
        /**
          * Enable selection of an empty item
         */
        "emptyItem"?: boolean;
        /**
          * Data used for the empty item
         */
        "emptyItemData"?: DropdownItem;
        /**
          * Items visible in dropdown
         */
        "itemCount"?: number;
        /**
          * Items to display and select in dropdown
         */
        "items"?: DropdownItem[];
        "onPd-on-change"?: (event: CustomEvent<DropdownItem>) => void;
        /**
          * Placeholder when no item is selected
         */
        "placeholder"?: string;
    }
    interface PdDropdownItem {
        /**
          * Find an highlight this text in value
         */
        "highlight"?: string | number;
        /**
          * Sets this item to selected
         */
        "selected"?: boolean;
        /**
          * Value for this item
         */
        "value"?: string;
    }
    interface PdIcon {
        /**
          * Flip in X/Y direction
         */
        "flip"?: "x" | "y" | "xy";
        /**
          * Name of an icon from the provided gallery
         */
        "name"?: string;
        /**
          * Rotation in 'deg'
         */
        "rotate"?: number;
        /**
          * Size of the icon in 'em'
         */
        "size"?: number;
        /**
          * Spin animation in ms per rotation
         */
        "spin"?: number;
        /**
          * change animation direction
         */
        "spinReverse"?: boolean;
        /**
          * Specifies the `src` url of an SVG file to use.
         */
        "src"?: string;
    }
    interface PdInput {
        /**
          * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
         */
        "accept"?: string;
        /**
          * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        "autocapitalize"?: string;
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete"?: "on" | "off";
        /**
          * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        "autocorrect"?: "on" | "off";
        /**
          * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus"?: boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        "clearOnEdit"?: boolean;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        "error"?: boolean;
        "helperText"?: string;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
        "label"?: string;
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
         */
        "multiple"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onPd-on-blur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onPd-on-change"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onPd-on-focus"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onPd-on-input"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "pattern"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "size"?: number;
        /**
          * If `true`, the element will have its spelling and grammar checked.
         */
        "spellcheck"?: boolean;
        /**
          * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
         */
        "step"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type"?: TextFieldTypes;
        /**
          * The value of the input.
         */
        "value"?: string | number | null;
    }
    interface PdList {
    }
    interface PdListItem {
        "status"?: "success" | "danger" | "warning" | "unset";
    }
    interface PdModal {
        /**
          * Configuration properties
         */
        "config"?: PdModalConfig;
        "data"?: any;
        /**
          * Event with returnData that will be executed when the modal is closed
         */
        "onPd-on-closed"?: (event: CustomEvent<any>) => void;
        /**
          * This triggers the modal to visually open / close Alternatively the openModal() method can be called to trigger this
         */
        "open"?: boolean;
    }
    interface PdNavbar {
    }
    interface PdNavbarItem {
        "enabled"?: boolean;
        /**
          * Set href to create a link button
         */
        "href"?: string;
        /**
          * Sets target for link button e.g. '_blank'
         */
        "target"?: string;
        "text"?: string;
    }
    interface PdPanel {
        /**
          * Expands / collapses the panel content
         */
        "collapsed"?: boolean;
        /**
          * Show/hide collapse button
         */
        "collapsible"?: boolean;
        /**
          * Emitted when the value has changed.
         */
        "onPd-on-collapsed"?: (event: CustomEvent<any>) => void;
    }
    interface PdPanelContent {
    }
    interface PdPanelFooter {
    }
    interface PdPanelHeader {
    }
    interface PdProgressBar {
        "color"?: "primary" | "success" | "danger" | "warning" | "info";
        "decimals"?: number;
        "label"?: boolean;
        "striped"?: boolean;
        "value"?: number;
    }
    interface PdRadio {
        "checked"?: boolean;
        /**
          * Sets radio to disabled state
         */
        "disabled"?: boolean;
        "label"?: string | null;
        "name"?: string;
        "value"?: any | null;
    }
    interface PdSearch {
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * Show matching parts in resuls as highlighted
         */
        "highlight"?: boolean;
        "label"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onPd-on-blur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onPd-on-change"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onPd-on-focus"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onPd-on-input"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when a search request occurred.
         */
        "onPd-on-search"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        "results"?: string[];
        /**
          * The value of the input.
         */
        "value"?: string | number | null;
    }
    interface PdSidebar {
    }
    interface PdSidebarItem {
        "enabled"?: boolean;
        /**
          * Set href to create a link button
         */
        "href"?: string;
        "icon"?: string;
        "size"?: string;
        /**
          * Sets target for link button e.g. '_blank'
         */
        "target"?: string;
        "text"?: string;
    }
    interface PdSlider {
        "disabled"?: any;
        "max"?: number;
        "min"?: number;
        "name"?: string;
        /**
          * Emitted when slider has been released.
         */
        "onPd-on-change"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onPd-on-input"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        "step"?: number;
        "value"?: number | null;
    }
    interface PdTable {
        /**
          * A definition for each column of the table
         */
        "columns"?: PdColumn[];
        /**
          * Height of header cells
         */
        "headerHeight"?: string;
        /**
          * The table style
         */
        "headerStyle"?: "light" | "dark" | "gray";
        /**
          * The minimum width the table should take
         */
        "minWidth"?: string;
        /**
          * Height of rows
         */
        "rowHeight"?: string;
        /**
          * The data definition for each row to display
         */
        "rows"?: any;
    }
    interface PdTimeline {
    }
    interface PdToast {
        /**
          * The Toast title
         */
        "header"?: string;
        /**
          * Additional toast information (e.g. 11 minutes ago)
         */
        "info"?: string;
        /**
          * When closing the toast using the close icon
         */
        "onPd-on-closed"?: (event: CustomEvent<any>) => void;
        /**
          * Changes max-with of the toast
         */
        "size"?: "small" | "large";
    }
    interface IntrinsicElements {
        "pd-alert": PdAlert;
        "pd-backdrop": PdBackdrop;
        "pd-button": PdButton;
        "pd-button-group": PdButtonGroup;
        "pd-checkbox": PdCheckbox;
        "pd-datepicker": PdDatepicker;
        "pd-dropdown": PdDropdown;
        "pd-dropdown-item": PdDropdownItem;
        "pd-icon": PdIcon;
        "pd-input": PdInput;
        "pd-list": PdList;
        "pd-list-item": PdListItem;
        "pd-modal": PdModal;
        "pd-navbar": PdNavbar;
        "pd-navbar-item": PdNavbarItem;
        "pd-panel": PdPanel;
        "pd-panel-content": PdPanelContent;
        "pd-panel-footer": PdPanelFooter;
        "pd-panel-header": PdPanelHeader;
        "pd-progress-bar": PdProgressBar;
        "pd-radio": PdRadio;
        "pd-search": PdSearch;
        "pd-sidebar": PdSidebar;
        "pd-sidebar-item": PdSidebarItem;
        "pd-slider": PdSlider;
        "pd-table": PdTable;
        "pd-timeline": PdTimeline;
        "pd-toast": PdToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pd-alert": LocalJSX.PdAlert & JSXBase.HTMLAttributes<HTMLPdAlertElement>;
            "pd-backdrop": LocalJSX.PdBackdrop & JSXBase.HTMLAttributes<HTMLPdBackdropElement>;
            "pd-button": LocalJSX.PdButton & JSXBase.HTMLAttributes<HTMLPdButtonElement>;
            "pd-button-group": LocalJSX.PdButtonGroup & JSXBase.HTMLAttributes<HTMLPdButtonGroupElement>;
            "pd-checkbox": LocalJSX.PdCheckbox & JSXBase.HTMLAttributes<HTMLPdCheckboxElement>;
            "pd-datepicker": LocalJSX.PdDatepicker & JSXBase.HTMLAttributes<HTMLPdDatepickerElement>;
            "pd-dropdown": LocalJSX.PdDropdown & JSXBase.HTMLAttributes<HTMLPdDropdownElement>;
            "pd-dropdown-item": LocalJSX.PdDropdownItem & JSXBase.HTMLAttributes<HTMLPdDropdownItemElement>;
            "pd-icon": LocalJSX.PdIcon & JSXBase.HTMLAttributes<HTMLPdIconElement>;
            "pd-input": LocalJSX.PdInput & JSXBase.HTMLAttributes<HTMLPdInputElement>;
            "pd-list": LocalJSX.PdList & JSXBase.HTMLAttributes<HTMLPdListElement>;
            "pd-list-item": LocalJSX.PdListItem & JSXBase.HTMLAttributes<HTMLPdListItemElement>;
            "pd-modal": LocalJSX.PdModal & JSXBase.HTMLAttributes<HTMLPdModalElement>;
            "pd-navbar": LocalJSX.PdNavbar & JSXBase.HTMLAttributes<HTMLPdNavbarElement>;
            "pd-navbar-item": LocalJSX.PdNavbarItem & JSXBase.HTMLAttributes<HTMLPdNavbarItemElement>;
            "pd-panel": LocalJSX.PdPanel & JSXBase.HTMLAttributes<HTMLPdPanelElement>;
            "pd-panel-content": LocalJSX.PdPanelContent & JSXBase.HTMLAttributes<HTMLPdPanelContentElement>;
            "pd-panel-footer": LocalJSX.PdPanelFooter & JSXBase.HTMLAttributes<HTMLPdPanelFooterElement>;
            "pd-panel-header": LocalJSX.PdPanelHeader & JSXBase.HTMLAttributes<HTMLPdPanelHeaderElement>;
            "pd-progress-bar": LocalJSX.PdProgressBar & JSXBase.HTMLAttributes<HTMLPdProgressBarElement>;
            "pd-radio": LocalJSX.PdRadio & JSXBase.HTMLAttributes<HTMLPdRadioElement>;
            "pd-search": LocalJSX.PdSearch & JSXBase.HTMLAttributes<HTMLPdSearchElement>;
            "pd-sidebar": LocalJSX.PdSidebar & JSXBase.HTMLAttributes<HTMLPdSidebarElement>;
            "pd-sidebar-item": LocalJSX.PdSidebarItem & JSXBase.HTMLAttributes<HTMLPdSidebarItemElement>;
            "pd-slider": LocalJSX.PdSlider & JSXBase.HTMLAttributes<HTMLPdSliderElement>;
            "pd-table": LocalJSX.PdTable & JSXBase.HTMLAttributes<HTMLPdTableElement>;
            "pd-timeline": LocalJSX.PdTimeline & JSXBase.HTMLAttributes<HTMLPdTimelineElement>;
            "pd-toast": LocalJSX.PdToast & JSXBase.HTMLAttributes<HTMLPdToastElement>;
        }
    }
}
