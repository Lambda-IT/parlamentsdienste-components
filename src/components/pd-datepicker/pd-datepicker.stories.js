import notes from './readme.md';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Forms + Inputs|Datepicker',
    decorators: [
        withActions(
            'pd-on-change',
            'pd-on-open',
            'pd-on-close',
            'pd-on-month-change',
            'pd-on-year-change',
            'pd-on-ready',
            'pd-on-value-update',
        ),
    ],
    parameters: {
        notes,
    },
};

export const datepicker = () => {
    return `
        <pd-datepicker class="m-3"></pd-datepicker>
    `;
};
