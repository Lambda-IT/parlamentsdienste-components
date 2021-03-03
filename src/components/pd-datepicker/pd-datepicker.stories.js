import notes from './readme.md';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Forms + Inputs/Datepicker',
    decorators: [
        withActions(
            'pd-change',
            'pd-open',
            'pd-close',
            'pd-month-change',
            'pd-year-change',
            'pd-ready',
            'pd-value-update',
        ),
    ],
    parameters: {
        notes,
    },
    argTypes: {
        disabled: { control: { type: 'boolean' } },
    },
};

export const datepicker = (args) => {
    const datepicker = document.createElement('pd-datepicker');
    datepicker.classList = ['m-3'];
    datepicker.label = args.label;
    datepicker.disabled = args.disabled;
    return datepicker;
};

datepicker.args = {
    label: 'Label Text',
    disabled: false,
};
