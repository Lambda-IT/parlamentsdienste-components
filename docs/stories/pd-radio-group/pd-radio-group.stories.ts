import type { Meta, StoryObj } from '@storybook/html-vite';

const defaultArgs = {
    name: 'radio-group',
    value: '2',
    disabled: false,
    error: false,
    readonly: false,
};

type RadioGroupArgs = typeof defaultArgs;

const meta: Meta<RadioGroupArgs> = {
    title: 'Forms + Inputs/Radio-Group',
    args: defaultArgs,
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const radio = (args: RadioGroupArgs) => {
    return `
        <pd-radio-group name="${args.name}" id="radio-group-1" value="${args.value}">
            <pd-radio value="1" label="Radio 1" ${args.disabled && 'disabled'} ${args.error && 'error'} ${
        args.readonly && 'readonly'
    }></pd-radio>
            <pd-radio value="2" label="Radio 2" ${args.disabled && 'disabled'} ${args.error && 'error'} ${
        args.readonly && 'readonly'
    }></pd-radio>
            <pd-radio value="3" label="Radio 3" ${args.disabled && 'disabled'} ${args.error && 'error'} ${
        args.readonly && 'readonly'
    }></pd-radio>
        </pd-radio-group>
    `;
};

export const Radio: StoryObj<RadioGroupArgs> = {
    render: radio,
};
