import type { Meta, StoryObj } from '@storybook/html-vite';

const defaultArgs = {
    checked: false,
    value: '1',
    label: 'radio 1',
    name: 'radio-test',
    disabled: false,
    readonly: false,
    error: false,
    verticalAdjust: false,
};

type RadioArgs = typeof defaultArgs;

const meta: Meta<RadioArgs> = {
    title: 'Forms + Inputs/Radio',
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const radio = args => {
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

export const Radio: StoryObj = {
    render: radio,
    args: defaultArgs,
};
