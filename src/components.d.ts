/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InputChangeEventDetail, PdColumn, TextFieldTypes, } from "./interface";
export namespace Components {
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
    interface PdCard {
        "collapsed": boolean;
    }
    interface PdCardContent {
        "collapsed": boolean;
    }
    interface PdCardFooter {
    }
    interface PdCardHeader {
        "collapsed": boolean;
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
    interface PdColumn {
    }
    interface PdContainer {
    }
    interface PdDatepicker {
    }
    interface PdDropdown {
        "value": string;
    }
    interface PdDropdownItem {
        "selected": boolean;
        "value": string;
    }
    interface PdFooter {
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
    interface PdModal {
        "closeModal": () => Promise<boolean>;
        "component": any;
        "openModal": () => Promise<void>;
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
    interface PdNotification {
    }
    interface PdProgressBar {
        "decimals": number;
        "type": "determinate" | "indeterminate";
        "value": number;
    }
    interface PdRadio {
        "label"?: string | null;
        "name": string;
        "value"?: any | null;
    }
    interface PdSearch {
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        "error": boolean;
        "helperText"?: string;
        "label"?: string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        "open": boolean;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        "searchStrings": string[];
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
        "columns": PdColumn[];
        "headerHeight": string;
        "headerStyle": "light" | "dark" | "gray";
        "minWidth": string;
        "rowHeight": string;
        "rows": any[];
    }
    interface PdTag {
    }
    interface PdTimeline {
    }
}
declare global {
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
    interface HTMLPdCardElement extends Components.PdCard, HTMLStencilElement {
    }
    var HTMLPdCardElement: {
        prototype: HTMLPdCardElement;
        new (): HTMLPdCardElement;
    };
    interface HTMLPdCardContentElement extends Components.PdCardContent, HTMLStencilElement {
    }
    var HTMLPdCardContentElement: {
        prototype: HTMLPdCardContentElement;
        new (): HTMLPdCardContentElement;
    };
    interface HTMLPdCardFooterElement extends Components.PdCardFooter, HTMLStencilElement {
    }
    var HTMLPdCardFooterElement: {
        prototype: HTMLPdCardFooterElement;
        new (): HTMLPdCardFooterElement;
    };
    interface HTMLPdCardHeaderElement extends Components.PdCardHeader, HTMLStencilElement {
    }
    var HTMLPdCardHeaderElement: {
        prototype: HTMLPdCardHeaderElement;
        new (): HTMLPdCardHeaderElement;
    };
    interface HTMLPdCheckboxElement extends Components.PdCheckbox, HTMLStencilElement {
    }
    var HTMLPdCheckboxElement: {
        prototype: HTMLPdCheckboxElement;
        new (): HTMLPdCheckboxElement;
    };
    interface HTMLPdColumnElement extends Components.PdColumn, HTMLStencilElement {
    }
    var HTMLPdColumnElement: {
        prototype: HTMLPdColumnElement;
        new (): HTMLPdColumnElement;
    };
    interface HTMLPdContainerElement extends Components.PdContainer, HTMLStencilElement {
    }
    var HTMLPdContainerElement: {
        prototype: HTMLPdContainerElement;
        new (): HTMLPdContainerElement;
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
    interface HTMLPdFooterElement extends Components.PdFooter, HTMLStencilElement {
    }
    var HTMLPdFooterElement: {
        prototype: HTMLPdFooterElement;
        new (): HTMLPdFooterElement;
    };
    interface HTMLPdInputElement extends Components.PdInput, HTMLStencilElement {
    }
    var HTMLPdInputElement: {
        prototype: HTMLPdInputElement;
        new (): HTMLPdInputElement;
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
    interface HTMLPdNotificationElement extends Components.PdNotification, HTMLStencilElement {
    }
    var HTMLPdNotificationElement: {
        prototype: HTMLPdNotificationElement;
        new (): HTMLPdNotificationElement;
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
    interface HTMLPdTagElement extends Components.PdTag, HTMLStencilElement {
    }
    var HTMLPdTagElement: {
        prototype: HTMLPdTagElement;
        new (): HTMLPdTagElement;
    };
    interface HTMLPdTimelineElement extends Components.PdTimeline, HTMLStencilElement {
    }
    var HTMLPdTimelineElement: {
        prototype: HTMLPdTimelineElement;
        new (): HTMLPdTimelineElement;
    };
    interface HTMLElementTagNameMap {
        "pd-backdrop": HTMLPdBackdropElement;
        "pd-button": HTMLPdButtonElement;
        "pd-button-group": HTMLPdButtonGroupElement;
        "pd-card": HTMLPdCardElement;
        "pd-card-content": HTMLPdCardContentElement;
        "pd-card-footer": HTMLPdCardFooterElement;
        "pd-card-header": HTMLPdCardHeaderElement;
        "pd-checkbox": HTMLPdCheckboxElement;
        "pd-column": HTMLPdColumnElement;
        "pd-container": HTMLPdContainerElement;
        "pd-datepicker": HTMLPdDatepickerElement;
        "pd-dropdown": HTMLPdDropdownElement;
        "pd-dropdown-item": HTMLPdDropdownItemElement;
        "pd-footer": HTMLPdFooterElement;
        "pd-input": HTMLPdInputElement;
        "pd-modal": HTMLPdModalElement;
        "pd-navbar": HTMLPdNavbarElement;
        "pd-navbar-item": HTMLPdNavbarItemElement;
        "pd-notification": HTMLPdNotificationElement;
        "pd-progress-bar": HTMLPdProgressBarElement;
        "pd-radio": HTMLPdRadioElement;
        "pd-search": HTMLPdSearchElement;
        "pd-sidebar": HTMLPdSidebarElement;
        "pd-sidebar-item": HTMLPdSidebarItemElement;
        "pd-slider": HTMLPdSliderElement;
        "pd-table": HTMLPdTableElement;
        "pd-tag": HTMLPdTagElement;
        "pd-timeline": HTMLPdTimelineElement;
    }
}
declare namespace LocalJSX {
    interface PdBackdrop {
        "onPdOnTap"?: (event: CustomEvent<void>) => void;
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
    interface PdCard {
        "collapsed"?: boolean;
        /**
          * Emitted when the value has changed.
         */
        "onPdCollapsed"?: (event: CustomEvent<any>) => void;
    }
    interface PdCardContent {
        "collapsed"?: boolean;
    }
    interface PdCardFooter {
    }
    interface PdCardHeader {
        "collapsed"?: boolean;
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
        "onPd-checked"?: (event: CustomEvent<any>) => void;
        /**
          * Checkbox description text
         */
        "text"?: string;
        "value"?: boolean;
    }
    interface PdColumn {
    }
    interface PdContainer {
    }
    interface PdDatepicker {
    }
    interface PdDropdown {
        "value"?: string;
    }
    interface PdDropdownItem {
        "selected"?: boolean;
        "value"?: string;
    }
    interface PdFooter {
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
          * Emitted when a keyboard input occurred.
         */
        "onPd-input"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Emitted when the input loses focus.
         */
        "onPdOnBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onPdOnChange"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onPdOnFocus"?: (event: CustomEvent<void>) => void;
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
    interface PdModal {
        "component"?: any;
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
    interface PdNotification {
    }
    interface PdProgressBar {
        "decimals"?: number;
        "type"?: "determinate" | "indeterminate";
        "value"?: number;
    }
    interface PdRadio {
        "label"?: string | null;
        "name"?: string;
        "value"?: any | null;
    }
    interface PdSearch {
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        "error"?: boolean;
        "helperText"?: string;
        "label"?: string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onPdInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Emitted when the input loses focus.
         */
        "onPdOnBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onPdOnChange"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onPdOnFocus"?: (event: CustomEvent<void>) => void;
        "open"?: boolean;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        "searchStrings"?: string[];
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
        "onPdOnChange"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onPdOnInput"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        "step"?: number;
        "value"?: number | null;
    }
    interface PdTable {
        "columns"?: PdColumn[];
        "headerHeight"?: string;
        "headerStyle"?: "light" | "dark" | "gray";
        "minWidth"?: string;
        "rowHeight"?: string;
        "rows"?: any[];
    }
    interface PdTag {
    }
    interface PdTimeline {
    }
    interface IntrinsicElements {
        "pd-backdrop": PdBackdrop;
        "pd-button": PdButton;
        "pd-button-group": PdButtonGroup;
        "pd-card": PdCard;
        "pd-card-content": PdCardContent;
        "pd-card-footer": PdCardFooter;
        "pd-card-header": PdCardHeader;
        "pd-checkbox": PdCheckbox;
        "pd-column": PdColumn;
        "pd-container": PdContainer;
        "pd-datepicker": PdDatepicker;
        "pd-dropdown": PdDropdown;
        "pd-dropdown-item": PdDropdownItem;
        "pd-footer": PdFooter;
        "pd-input": PdInput;
        "pd-modal": PdModal;
        "pd-navbar": PdNavbar;
        "pd-navbar-item": PdNavbarItem;
        "pd-notification": PdNotification;
        "pd-progress-bar": PdProgressBar;
        "pd-radio": PdRadio;
        "pd-search": PdSearch;
        "pd-sidebar": PdSidebar;
        "pd-sidebar-item": PdSidebarItem;
        "pd-slider": PdSlider;
        "pd-table": PdTable;
        "pd-tag": PdTag;
        "pd-timeline": PdTimeline;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pd-backdrop": LocalJSX.PdBackdrop & JSXBase.HTMLAttributes<HTMLPdBackdropElement>;
            "pd-button": LocalJSX.PdButton & JSXBase.HTMLAttributes<HTMLPdButtonElement>;
            "pd-button-group": LocalJSX.PdButtonGroup & JSXBase.HTMLAttributes<HTMLPdButtonGroupElement>;
            "pd-card": LocalJSX.PdCard & JSXBase.HTMLAttributes<HTMLPdCardElement>;
            "pd-card-content": LocalJSX.PdCardContent & JSXBase.HTMLAttributes<HTMLPdCardContentElement>;
            "pd-card-footer": LocalJSX.PdCardFooter & JSXBase.HTMLAttributes<HTMLPdCardFooterElement>;
            "pd-card-header": LocalJSX.PdCardHeader & JSXBase.HTMLAttributes<HTMLPdCardHeaderElement>;
            "pd-checkbox": LocalJSX.PdCheckbox & JSXBase.HTMLAttributes<HTMLPdCheckboxElement>;
            "pd-column": LocalJSX.PdColumn & JSXBase.HTMLAttributes<HTMLPdColumnElement>;
            "pd-container": LocalJSX.PdContainer & JSXBase.HTMLAttributes<HTMLPdContainerElement>;
            "pd-datepicker": LocalJSX.PdDatepicker & JSXBase.HTMLAttributes<HTMLPdDatepickerElement>;
            "pd-dropdown": LocalJSX.PdDropdown & JSXBase.HTMLAttributes<HTMLPdDropdownElement>;
            "pd-dropdown-item": LocalJSX.PdDropdownItem & JSXBase.HTMLAttributes<HTMLPdDropdownItemElement>;
            "pd-footer": LocalJSX.PdFooter & JSXBase.HTMLAttributes<HTMLPdFooterElement>;
            "pd-input": LocalJSX.PdInput & JSXBase.HTMLAttributes<HTMLPdInputElement>;
            "pd-modal": LocalJSX.PdModal & JSXBase.HTMLAttributes<HTMLPdModalElement>;
            "pd-navbar": LocalJSX.PdNavbar & JSXBase.HTMLAttributes<HTMLPdNavbarElement>;
            "pd-navbar-item": LocalJSX.PdNavbarItem & JSXBase.HTMLAttributes<HTMLPdNavbarItemElement>;
            "pd-notification": LocalJSX.PdNotification & JSXBase.HTMLAttributes<HTMLPdNotificationElement>;
            "pd-progress-bar": LocalJSX.PdProgressBar & JSXBase.HTMLAttributes<HTMLPdProgressBarElement>;
            "pd-radio": LocalJSX.PdRadio & JSXBase.HTMLAttributes<HTMLPdRadioElement>;
            "pd-search": LocalJSX.PdSearch & JSXBase.HTMLAttributes<HTMLPdSearchElement>;
            "pd-sidebar": LocalJSX.PdSidebar & JSXBase.HTMLAttributes<HTMLPdSidebarElement>;
            "pd-sidebar-item": LocalJSX.PdSidebarItem & JSXBase.HTMLAttributes<HTMLPdSidebarItemElement>;
            "pd-slider": LocalJSX.PdSlider & JSXBase.HTMLAttributes<HTMLPdSliderElement>;
            "pd-table": LocalJSX.PdTable & JSXBase.HTMLAttributes<HTMLPdTableElement>;
            "pd-tag": LocalJSX.PdTag & JSXBase.HTMLAttributes<HTMLPdTagElement>;
            "pd-timeline": LocalJSX.PdTimeline & JSXBase.HTMLAttributes<HTMLPdTimelineElement>;
        }
    }
}
