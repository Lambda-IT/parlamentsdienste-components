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
};

export const datepicker = () => {
    return `
        <pd-datepicker class="m-3"></pd-datepicker>
    `;
};
