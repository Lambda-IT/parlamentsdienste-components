import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';

const defaultArgs = {
    label: 'Label Text',
    disabled: false,
    readonly: false,
    placeholder: null,
    error: false,
    icon: true,
    hideClearIcon: false,
    config_allow_input: false,
};

type DatepickerArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    placeholder: { control: { type: 'text' } },
};

const meta: Meta<DatepickerArgs> = {
    title: 'Forms + Inputs/Datepicker',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const datepicker = args => {
    const datepicker = document.createElement('pd-datepicker');
    datepicker.classList.add('m-3');
    datepicker.label = args.label;
    datepicker.disabled = args.disabled;
    datepicker.readonly = args.readonly;
    datepicker.placeholder = args.placeholder;
    datepicker.error = args.error;
    datepicker.icon = args.icon;
    datepicker.hideClearIcon = args.hideClearIcon;
    datepicker.config = {
        allowInput: args.config_allow_input,
    };
    return datepicker;
};

export const Datepicker: StoryObj = {
    render: datepicker,
};
