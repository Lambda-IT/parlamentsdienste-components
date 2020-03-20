/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  InputChangeEventDetail,
  TextFieldTypes,
} from './interface';
import {
  RadioGroupChangeEventDetail,
} from './components/radio-group/radio-group.interface';

export namespace Components {
  interface PdBackdrop {
    /**
    * Invisible backdrop when set to false
    */
    'visible': boolean;
  }
  interface PdButton {
    /**
    * Sets button to disbaled state
    */
    'disabled': boolean;
    /**
    * Set href to create a link button
    */
    'href': string;
    /**
    * Sets target for link button e.g. '_blank'
    */
    'target': string;
    /**
    * Sets button type |text|submit|reset|
    */
    'type': 'button' | 'text' | 'submit';
  }
  interface PdCard {}
  interface PdCheckbox {
    /**
    * Sets check state of the checkbox true/false
    */
    'checked': boolean;
    /**
    * Sets checkbox to disabled state
    */
    'disabled': boolean;
    'name': string;
    /**
    * Checkbox description text
    */
    'text': string;
    'value': string;
  }
  interface PdColumn {}
  interface PdContainer {}
  interface PdDatepicker {}
  interface PdDropdown {}
  interface PdFooter {}
  interface PdInput {
    /**
    * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
    */
    'accept'?: string;
    /**
    * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
    */
    'autocapitalize': string;
    /**
    * Indicates whether the value of the control can be automatically completed by the browser.
    */
    'autocomplete': 'on' | 'off';
    /**
    * Whether auto correction should be enabled when the user is entering/editing the text value.
    */
    'autocorrect': 'on' | 'off';
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus': boolean;
    /**
    * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
    */
    'clearInput': boolean;
    /**
    * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
    */
    'clearOnEdit'?: boolean;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled': boolean;
    /**
    * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
    */
    'inputmode'?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
    * The maximum value, which must not be less than its minimum (min attribute) value.
    */
    'max'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
    */
    'maxlength'?: number;
    /**
    * The minimum value, which must not be greater than its maximum (max attribute) value.
    */
    'min'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
    */
    'minlength'?: number;
    /**
    * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    /**
    * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'pattern'?: string;
    /**
    * Instructional text that shows before the input has a value.
    */
    'placeholder'?: string | null;
    /**
    * If `true`, the user cannot modify the value.
    */
    'readonly': boolean;
    /**
    * If `true`, the user must fill in a value before submitting a form.
    */
    'required': boolean;
    /**
    * Sets focus on the specified `pd-input`. Use this method instead of the global `input.focus()`.
    */
    'setFocus': () => Promise<void>;
    /**
    * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'size'?: number;
    /**
    * If `true`, the element will have its spelling and grammar checked.
    */
    'spellcheck': boolean;
    /**
    * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
    */
    'step'?: string;
    /**
    * The type of control to display. The default type is text.
    */
    'type': TextFieldTypes;
    /**
    * The value of the input.
    */
    'value'?: string | number | null;
  }
  interface PdModal {
    'closeModal': () => Promise<boolean>;
    'component': any;
    'openModal': () => Promise<void>;
  }
  interface PdNavbar {}
  interface PdNotification {}
  interface PdProgressBar {
    'decimals': number;
    'type': 'determinate' | 'indeterminate';
    'value': number;
  }
  interface PdRadio {
    'label'?: string | null;
    'value'?: any | null;
  }
  interface PdRadioGroup {
    /**
    * If `true`, the radios can be deselected.
    */
    'allowEmptySelection': boolean;
    /**
    * the value of the radio group.
    */
    'value'?: any | null;
  }
  interface PdSlider {
    'disabled': any;
    'max': number;
    'min': number;
    'name': string;
    'step': number;
    'value'?: number | null;
  }
  interface PdTable {}
  interface PdTag {}
  interface PdTimeline {}
}

declare global {


  interface HTMLPdBackdropElement extends Components.PdBackdrop, HTMLStencilElement {}
  var HTMLPdBackdropElement: {
    prototype: HTMLPdBackdropElement;
    new (): HTMLPdBackdropElement;
  };

  interface HTMLPdButtonElement extends Components.PdButton, HTMLStencilElement {}
  var HTMLPdButtonElement: {
    prototype: HTMLPdButtonElement;
    new (): HTMLPdButtonElement;
  };

  interface HTMLPdCardElement extends Components.PdCard, HTMLStencilElement {}
  var HTMLPdCardElement: {
    prototype: HTMLPdCardElement;
    new (): HTMLPdCardElement;
  };

  interface HTMLPdCheckboxElement extends Components.PdCheckbox, HTMLStencilElement {}
  var HTMLPdCheckboxElement: {
    prototype: HTMLPdCheckboxElement;
    new (): HTMLPdCheckboxElement;
  };

  interface HTMLPdColumnElement extends Components.PdColumn, HTMLStencilElement {}
  var HTMLPdColumnElement: {
    prototype: HTMLPdColumnElement;
    new (): HTMLPdColumnElement;
  };

  interface HTMLPdContainerElement extends Components.PdContainer, HTMLStencilElement {}
  var HTMLPdContainerElement: {
    prototype: HTMLPdContainerElement;
    new (): HTMLPdContainerElement;
  };

  interface HTMLPdDatepickerElement extends Components.PdDatepicker, HTMLStencilElement {}
  var HTMLPdDatepickerElement: {
    prototype: HTMLPdDatepickerElement;
    new (): HTMLPdDatepickerElement;
  };

  interface HTMLPdDropdownElement extends Components.PdDropdown, HTMLStencilElement {}
  var HTMLPdDropdownElement: {
    prototype: HTMLPdDropdownElement;
    new (): HTMLPdDropdownElement;
  };

  interface HTMLPdFooterElement extends Components.PdFooter, HTMLStencilElement {}
  var HTMLPdFooterElement: {
    prototype: HTMLPdFooterElement;
    new (): HTMLPdFooterElement;
  };

  interface HTMLPdInputElement extends Components.PdInput, HTMLStencilElement {}
  var HTMLPdInputElement: {
    prototype: HTMLPdInputElement;
    new (): HTMLPdInputElement;
  };

  interface HTMLPdModalElement extends Components.PdModal, HTMLStencilElement {}
  var HTMLPdModalElement: {
    prototype: HTMLPdModalElement;
    new (): HTMLPdModalElement;
  };

  interface HTMLPdNavbarElement extends Components.PdNavbar, HTMLStencilElement {}
  var HTMLPdNavbarElement: {
    prototype: HTMLPdNavbarElement;
    new (): HTMLPdNavbarElement;
  };

  interface HTMLPdNotificationElement extends Components.PdNotification, HTMLStencilElement {}
  var HTMLPdNotificationElement: {
    prototype: HTMLPdNotificationElement;
    new (): HTMLPdNotificationElement;
  };

  interface HTMLPdProgressBarElement extends Components.PdProgressBar, HTMLStencilElement {}
  var HTMLPdProgressBarElement: {
    prototype: HTMLPdProgressBarElement;
    new (): HTMLPdProgressBarElement;
  };

  interface HTMLPdRadioElement extends Components.PdRadio, HTMLStencilElement {}
  var HTMLPdRadioElement: {
    prototype: HTMLPdRadioElement;
    new (): HTMLPdRadioElement;
  };

  interface HTMLPdRadioGroupElement extends Components.PdRadioGroup, HTMLStencilElement {}
  var HTMLPdRadioGroupElement: {
    prototype: HTMLPdRadioGroupElement;
    new (): HTMLPdRadioGroupElement;
  };

  interface HTMLPdSliderElement extends Components.PdSlider, HTMLStencilElement {}
  var HTMLPdSliderElement: {
    prototype: HTMLPdSliderElement;
    new (): HTMLPdSliderElement;
  };

  interface HTMLPdTableElement extends Components.PdTable, HTMLStencilElement {}
  var HTMLPdTableElement: {
    prototype: HTMLPdTableElement;
    new (): HTMLPdTableElement;
  };

  interface HTMLPdTagElement extends Components.PdTag, HTMLStencilElement {}
  var HTMLPdTagElement: {
    prototype: HTMLPdTagElement;
    new (): HTMLPdTagElement;
  };

  interface HTMLPdTimelineElement extends Components.PdTimeline, HTMLStencilElement {}
  var HTMLPdTimelineElement: {
    prototype: HTMLPdTimelineElement;
    new (): HTMLPdTimelineElement;
  };
  interface HTMLElementTagNameMap {
    'pd-backdrop': HTMLPdBackdropElement;
    'pd-button': HTMLPdButtonElement;
    'pd-card': HTMLPdCardElement;
    'pd-checkbox': HTMLPdCheckboxElement;
    'pd-column': HTMLPdColumnElement;
    'pd-container': HTMLPdContainerElement;
    'pd-datepicker': HTMLPdDatepickerElement;
    'pd-dropdown': HTMLPdDropdownElement;
    'pd-footer': HTMLPdFooterElement;
    'pd-input': HTMLPdInputElement;
    'pd-modal': HTMLPdModalElement;
    'pd-navbar': HTMLPdNavbarElement;
    'pd-notification': HTMLPdNotificationElement;
    'pd-progress-bar': HTMLPdProgressBarElement;
    'pd-radio': HTMLPdRadioElement;
    'pd-radio-group': HTMLPdRadioGroupElement;
    'pd-slider': HTMLPdSliderElement;
    'pd-table': HTMLPdTableElement;
    'pd-tag': HTMLPdTagElement;
    'pd-timeline': HTMLPdTimelineElement;
  }
}

declare namespace LocalJSX {
  interface PdBackdrop {
    'onPdOnTap'?: (event: CustomEvent<void>) => void;
    /**
    * Invisible backdrop when set to false
    */
    'visible'?: boolean;
  }
  interface PdButton {
    /**
    * Sets button to disbaled state
    */
    'disabled'?: boolean;
    /**
    * Set href to create a link button
    */
    'href'?: string;
    /**
    * Sets target for link button e.g. '_blank'
    */
    'target'?: string;
    /**
    * Sets button type |text|submit|reset|
    */
    'type'?: 'button' | 'text' | 'submit';
  }
  interface PdCard {}
  interface PdCheckbox {
    /**
    * Sets check state of the checkbox true/false
    */
    'checked'?: boolean;
    /**
    * Sets checkbox to disabled state
    */
    'disabled'?: boolean;
    'name'?: string;
    'onPdChanged'?: (event: CustomEvent<any>) => void;
    /**
    * Checkbox description text
    */
    'text'?: string;
    'value'?: string;
  }
  interface PdColumn {}
  interface PdContainer {}
  interface PdDatepicker {}
  interface PdDropdown {}
  interface PdFooter {}
  interface PdInput {
    /**
    * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
    */
    'accept'?: string;
    /**
    * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
    */
    'autocapitalize'?: string;
    /**
    * Indicates whether the value of the control can be automatically completed by the browser.
    */
    'autocomplete'?: 'on' | 'off';
    /**
    * Whether auto correction should be enabled when the user is entering/editing the text value.
    */
    'autocorrect'?: 'on' | 'off';
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus'?: boolean;
    /**
    * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
    */
    'clearInput'?: boolean;
    /**
    * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
    */
    'clearOnEdit'?: boolean;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled'?: boolean;
    /**
    * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
    */
    'inputmode'?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
    * The maximum value, which must not be less than its minimum (min attribute) value.
    */
    'max'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
    */
    'maxlength'?: number;
    /**
    * The minimum value, which must not be greater than its maximum (max attribute) value.
    */
    'min'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
    */
    'minlength'?: number;
    /**
    * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    /**
    * Emitted when a keyboard input occurred.
    */
    'onPdInput'?: (event: CustomEvent<KeyboardEvent>) => void;
    /**
    * Emitted when the input loses focus.
    */
    'onPdOnBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the value has changed.
    */
    'onPdOnChange'?: (event: CustomEvent<InputChangeEventDetail>) => void;
    /**
    * Emitted when the input has focus.
    */
    'onPdOnFocus'?: (event: CustomEvent<void>) => void;
    /**
    * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'pattern'?: string;
    /**
    * Instructional text that shows before the input has a value.
    */
    'placeholder'?: string | null;
    /**
    * If `true`, the user cannot modify the value.
    */
    'readonly'?: boolean;
    /**
    * If `true`, the user must fill in a value before submitting a form.
    */
    'required'?: boolean;
    /**
    * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'size'?: number;
    /**
    * If `true`, the element will have its spelling and grammar checked.
    */
    'spellcheck'?: boolean;
    /**
    * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
    */
    'step'?: string;
    /**
    * The type of control to display. The default type is text.
    */
    'type'?: TextFieldTypes;
    /**
    * The value of the input.
    */
    'value'?: string | number | null;
  }
  interface PdModal {
    'component'?: any;
  }
  interface PdNavbar {}
  interface PdNotification {}
  interface PdProgressBar {
    'decimals'?: number;
    'type'?: 'determinate' | 'indeterminate';
    'value'?: number;
  }
  interface PdRadio {
    'label'?: string | null;
    'value'?: any | null;
  }
  interface PdRadioGroup {
    /**
    * If `true`, the radios can be deselected.
    */
    'allowEmptySelection'?: boolean;
    /**
    * Emitted when the value has changed.
    */
    'onPdChange'?: (event: CustomEvent<RadioGroupChangeEventDetail>) => void;
    /**
    * the value of the radio group.
    */
    'value'?: any | null;
  }
  interface PdSlider {
    'disabled'?: any;
    'max'?: number;
    'min'?: number;
    'name'?: string;
    /**
    * Emitted when slider has been released.
    */
    'onPdOnChange'?: (event: CustomEvent<InputChangeEventDetail>) => void;
    /**
    * Emitted when the value has changed.
    */
    'onPdOnInput'?: (event: CustomEvent<InputChangeEventDetail>) => void;
    'step'?: number;
    'value'?: number | null;
  }
  interface PdTable {}
  interface PdTag {}
  interface PdTimeline {}

  interface IntrinsicElements {
    'pd-backdrop': PdBackdrop;
    'pd-button': PdButton;
    'pd-card': PdCard;
    'pd-checkbox': PdCheckbox;
    'pd-column': PdColumn;
    'pd-container': PdContainer;
    'pd-datepicker': PdDatepicker;
    'pd-dropdown': PdDropdown;
    'pd-footer': PdFooter;
    'pd-input': PdInput;
    'pd-modal': PdModal;
    'pd-navbar': PdNavbar;
    'pd-notification': PdNotification;
    'pd-progress-bar': PdProgressBar;
    'pd-radio': PdRadio;
    'pd-radio-group': PdRadioGroup;
    'pd-slider': PdSlider;
    'pd-table': PdTable;
    'pd-tag': PdTag;
    'pd-timeline': PdTimeline;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pd-backdrop': LocalJSX.PdBackdrop & JSXBase.HTMLAttributes<HTMLPdBackdropElement>;
      'pd-button': LocalJSX.PdButton & JSXBase.HTMLAttributes<HTMLPdButtonElement>;
      'pd-card': LocalJSX.PdCard & JSXBase.HTMLAttributes<HTMLPdCardElement>;
      'pd-checkbox': LocalJSX.PdCheckbox & JSXBase.HTMLAttributes<HTMLPdCheckboxElement>;
      'pd-column': LocalJSX.PdColumn & JSXBase.HTMLAttributes<HTMLPdColumnElement>;
      'pd-container': LocalJSX.PdContainer & JSXBase.HTMLAttributes<HTMLPdContainerElement>;
      'pd-datepicker': LocalJSX.PdDatepicker & JSXBase.HTMLAttributes<HTMLPdDatepickerElement>;
      'pd-dropdown': LocalJSX.PdDropdown & JSXBase.HTMLAttributes<HTMLPdDropdownElement>;
      'pd-footer': LocalJSX.PdFooter & JSXBase.HTMLAttributes<HTMLPdFooterElement>;
      'pd-input': LocalJSX.PdInput & JSXBase.HTMLAttributes<HTMLPdInputElement>;
      'pd-modal': LocalJSX.PdModal & JSXBase.HTMLAttributes<HTMLPdModalElement>;
      'pd-navbar': LocalJSX.PdNavbar & JSXBase.HTMLAttributes<HTMLPdNavbarElement>;
      'pd-notification': LocalJSX.PdNotification & JSXBase.HTMLAttributes<HTMLPdNotificationElement>;
      'pd-progress-bar': LocalJSX.PdProgressBar & JSXBase.HTMLAttributes<HTMLPdProgressBarElement>;
      'pd-radio': LocalJSX.PdRadio & JSXBase.HTMLAttributes<HTMLPdRadioElement>;
      'pd-radio-group': LocalJSX.PdRadioGroup & JSXBase.HTMLAttributes<HTMLPdRadioGroupElement>;
      'pd-slider': LocalJSX.PdSlider & JSXBase.HTMLAttributes<HTMLPdSliderElement>;
      'pd-table': LocalJSX.PdTable & JSXBase.HTMLAttributes<HTMLPdTableElement>;
      'pd-tag': LocalJSX.PdTag & JSXBase.HTMLAttributes<HTMLPdTagElement>;
      'pd-timeline': LocalJSX.PdTimeline & JSXBase.HTMLAttributes<HTMLPdTimelineElement>;
    }
  }
}


