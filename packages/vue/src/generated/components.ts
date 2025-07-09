/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@parlamentsdienste-components/core';

import { defineCustomElement as definePdAlert } from '@parlamentsdienste-components/core/components/pd-alert.js';
import { defineCustomElement as definePdAnimation } from '@parlamentsdienste-components/core/components/pd-animation.js';
import { defineCustomElement as definePdButton } from '@parlamentsdienste-components/core/components/pd-button.js';
import { defineCustomElement as definePdCheckbox } from '@parlamentsdienste-components/core/components/pd-checkbox.js';
import { defineCustomElement as definePdChip } from '@parlamentsdienste-components/core/components/pd-chip.js';
import { defineCustomElement as definePdCombobox } from '@parlamentsdienste-components/core/components/pd-combobox.js';
import { defineCustomElement as definePdDatepicker } from '@parlamentsdienste-components/core/components/pd-datepicker.js';
import { defineCustomElement as definePdDropdown } from '@parlamentsdienste-components/core/components/pd-dropdown.js';
import { defineCustomElement as definePdDropdownItem } from '@parlamentsdienste-components/core/components/pd-dropdown-item.js';
import { defineCustomElement as definePdIcon } from '@parlamentsdienste-components/core/components/pd-icon.js';
import { defineCustomElement as definePdInput } from '@parlamentsdienste-components/core/components/pd-input.js';
import { defineCustomElement as definePdRadio } from '@parlamentsdienste-components/core/components/pd-radio.js';
import { defineCustomElement as definePdRadioGroup } from '@parlamentsdienste-components/core/components/pd-radio-group.js';
import { defineCustomElement as definePdSlider } from '@parlamentsdienste-components/core/components/pd-slider.js';
import { defineCustomElement as definePdTextarea } from '@parlamentsdienste-components/core/components/pd-textarea.js';


export const PdAlert: StencilVueComponent<JSX.PdAlert> = /*@__PURE__*/ defineContainer<JSX.PdAlert>('pd-alert', definePdAlert, [
  'color',
  'closable',
  'actionText',
  'actionTextExpanded',
  'actionHref',
  'actionTarget',
  'hideIcon',
  'expandable',
  'expanded',
  'pd-closed',
  'pd-action',
  'pd-collapsed'
], [
  'pd-closed',
  'pd-action',
  'pd-collapsed'
]);


export const PdAnimation: StencilVueComponent<JSX.PdAnimation> = /*@__PURE__*/ defineContainer<JSX.PdAnimation>('pd-animation', definePdAnimation, [
  'name'
]);


export const PdButton: StencilVueComponent<JSX.PdButton> = /*@__PURE__*/ defineContainer<JSX.PdButton>('pd-button', definePdButton, [
  'disabled',
  'type',
  'color',
  'size',
  'outline',
  'fullWidth',
  'href',
  'showAsLink',
  'target',
  'iconLocation'
]);


export const PdCheckbox: StencilVueComponent<JSX.PdCheckbox> = /*@__PURE__*/ defineContainer<JSX.PdCheckbox>('pd-checkbox', definePdCheckbox, [
  'text',
  'disabled',
  'readonly',
  'required',
  'checked',
  'value',
  'isIndeterminate',
  'name',
  'error',
  'verticalAdjust',
  'pd-checked'
], [
  'pd-checked'
]);


export const PdChip: StencilVueComponent<JSX.PdChip> = /*@__PURE__*/ defineContainer<JSX.PdChip>('pd-chip', definePdChip, [
  'disabled',
  'readonly',
  'checked',
  'type',
  'pd-remove-chip',
  'pd-check-chip'
], [
  'pd-remove-chip',
  'pd-check-chip'
]);


export const PdCombobox: StencilVueComponent<JSX.PdCombobox> = /*@__PURE__*/ defineContainer<JSX.PdCombobox>('pd-combobox', definePdCombobox, [
  'items',
  'selected',
  'emptyItem',
  'emptyItemData',
  'disabled',
  'viewOnly',
  'readonly',
  'required',
  'selectable',
  'multiselect',
  'disableMultiselectCounter',
  'placeholder',
  'value',
  'label',
  'itemCount',
  'highlight',
  'error',
  'size',
  'verticalAdjust',
  'disableFilter',
  'pd-input',
  'pd-change',
  'pd-combobox',
  'pd-blur',
  'pd-focus'
], [
  'pd-input',
  'pd-change',
  'pd-combobox',
  'pd-blur',
  'pd-focus'
]);


export const PdDatepicker: StencilVueComponent<JSX.PdDatepicker> = /*@__PURE__*/ defineContainer<JSX.PdDatepicker>('pd-datepicker', definePdDatepicker, [
  'date',
  'config',
  'disabled',
  'readonly',
  'required',
  'icon',
  'label',
  'error',
  'placeholder',
  'allowInput',
  'verticalAdjust',
  'size',
  'hideClearIcon',
  'pd-change',
  'pd-open',
  'pd-close',
  'pd-month-change',
  'pd-year-change',
  'pd-ready',
  'pd-value-update'
], [
  'pd-change',
  'pd-open',
  'pd-close',
  'pd-month-change',
  'pd-year-change',
  'pd-ready',
  'pd-value-update'
]);


export const PdDropdown: StencilVueComponent<JSX.PdDropdown> = /*@__PURE__*/ defineContainer<JSX.PdDropdown>('pd-dropdown', definePdDropdown, [
  'placeholder',
  'items',
  'selected',
  'itemCount',
  'emptyItem',
  'emptyItemData',
  'disabled',
  'viewOnly',
  'label',
  'readonly',
  'required',
  'error',
  'verticalAdjust',
  'textWrap',
  'pd-change'
], [
  'pd-change'
]);


export const PdDropdownItem: StencilVueComponent<JSX.PdDropdownItem> = /*@__PURE__*/ defineContainer<JSX.PdDropdownItem>('pd-dropdown-item', definePdDropdownItem, [
  'value',
  'selected',
  'multiselect',
  'highlight',
  'iconName',
  'iconSrc'
]);


export const PdIcon: StencilVueComponent<JSX.PdIcon> = /*@__PURE__*/ defineContainer<JSX.PdIcon>('pd-icon', definePdIcon, [
  'src',
  'name',
  'size',
  'lazy',
  'rotate',
  'flip',
  'spin',
  'spinReverse',
  'iconTitle',
  'iconDescription'
]);


export const PdInput: StencilVueComponent<JSX.PdInput> = /*@__PURE__*/ defineContainer<JSX.PdInput>('pd-input', definePdInput, [
  'accept',
  'autocapitalize',
  'autocomplete',
  'autocorrect',
  'autofocus',
  'clearInput',
  'clearOnEdit',
  'disabled',
  'viewOnly',
  'inputmode',
  'max',
  'maxlength',
  'min',
  'minlength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readonly',
  'required',
  'step',
  'size',
  'type',
  'value',
  'label',
  'error',
  'verticalAdjust',
  'pd-input',
  'pd-change',
  'pd-blur',
  'pd-focus'
], [
  'pd-input',
  'pd-change',
  'pd-blur',
  'pd-focus'
]);


export const PdRadio: StencilVueComponent<JSX.PdRadio> = /*@__PURE__*/ defineContainer<JSX.PdRadio>('pd-radio', definePdRadio, [
  'checked',
  'value',
  'label',
  'name',
  'disabled',
  'readonly',
  'verticalAdjust',
  'error'
]);


export const PdRadioGroup: StencilVueComponent<JSX.PdRadioGroup> = /*@__PURE__*/ defineContainer<JSX.PdRadioGroup>('pd-radio-group', definePdRadioGroup, [
  'name',
  'value',
  'disabled',
  'error',
  'readonly',
  'pd-change'
], [
  'pd-change'
]);


export const PdSlider: StencilVueComponent<JSX.PdSlider> = /*@__PURE__*/ defineContainer<JSX.PdSlider>('pd-slider', definePdSlider, [
  'max',
  'min',
  'step',
  'name',
  'disabled',
  'readonly',
  'error',
  'value',
  'pd-input',
  'pd-change'
], [
  'pd-input',
  'pd-change'
]);


export const PdTextarea: StencilVueComponent<JSX.PdTextarea> = /*@__PURE__*/ defineContainer<JSX.PdTextarea>('pd-textarea', definePdTextarea, [
  'autocapitalize',
  'autofocus',
  'disabled',
  'viewOnly',
  'inputmode',
  'enterkeyhint',
  'maxlength',
  'minlength',
  'placeholder',
  'readonly',
  'required',
  'spellcheck',
  'cols',
  'rows',
  'wrap',
  'label',
  'error',
  'autoGrow',
  'value',
  'pd-change',
  'pd-input',
  'pd-blur',
  'pd-focus'
], [
  'pd-change',
  'pd-input',
  'pd-blur',
  'pd-focus'
]);

