// import notes from './readme.md';

export default {
  title: 'Forms + Inputs/Radio',
  parameters: {
    // notes,
  },
  argTypes: {
    checked: { control: { type: 'boolean' } },
    value: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    verticalAdjust: { control: { type: 'boolean' } },
  },
};

export const radio = args => {
  return `
        <div class="m-3">
            <pd-radio
            name="${args.name}"
            value="${args.value}"
            label="${args.label}"
            ${args.checked ? 'checked' : ''}
            ${args.disabled ? 'disabled' : ''}
            ${args.readonly ? 'readonly' : ''}
            ${args.error ? 'error' : ''}
            ${args.verticalAdjust ? 'vertical-adjust' : ''}
            ></pd-radio>
            <pd-radio name="radio-test" value="2" label="radio 2" ${args.disabled ? 'disabled' : ''}
            ${args.readonly ? 'readonly' : ''}
            ${args.error ? 'error' : ''}
            ${args.verticalAdjust ? 'vertical-adjust' : ''}></pd-radio>
            <pd-radio name="radio-test" value="3" label="radio 3" ${args.disabled ? 'disabled' : ''}
            ${args.readonly ? 'readonly' : ''}
            ${args.error ? 'error' : ''}
            ${args.verticalAdjust ? 'vertical-adjust' : ''}></pd-radio>
        </div>
    `;
};

radio.args = {
  checked: false,
  value: '1',
  label: 'radio 1',
  name: 'radio-test',
  disabled: false,
  readonly: false,
  error: false,
  verticalAdjust: false,
};
