import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Datepicker',
    parameters: {
        actions: {
            handles: [
                'pd-change',
                'pd-open',
                'pd-close',
                'pd-month-change',
                'pd-year-change',
                'pd-ready',
                'pd-value-update',
            ],
        },
        notes,
    },
    argTypes: {
        disabled: { control: { type: 'boolean' } },
        readonly: { control: { type: 'boolean' } },
        error: { control: { type: 'boolean' } },
        placeholder: { control: { type: 'text' } },
        icon: { control: { type: 'boolean' } },
        config_allow_input: { control: { type: 'boolean' } },
    },
};

export const datepicker = (args) => {
    const datepicker = document.createElement('pd-datepicker');
    datepicker.classList = ['m-3'];
    datepicker.label = args.label;
    datepicker.disabled = args.disabled;
    datepicker.readonly = args.readonly;
    datepicker.placeholder = args.placeholder;
    datepicker.error = args.error;
    datepicker.icon = args.icon;
    datepicker.config = {
        allowInput: args.config_allow_input,
    };
    return datepicker;
};

datepicker.args = {
    label: 'Label Text',
    disabled: false,
    readonly: false,
    placeholder: null,
    error: false,
    icon: true,
    config_allow_input: false,
};
