import notes from './readme.md';
import { number, withKnobs, } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Forms + Inputs/Pagination',
    parameters: {
        notes,
        decorators: [withActions('pd-change'), withKnobs()],
    },
};

export const pagination = () => {
    const currentPage = number('current-page', 3);
    const totalPages = number('total-pages', 10);
    const visiblePages = number('visible-pages', 5);
    
    return `
        <pd-pagination total-pages="${totalPages}" visible-pages="${visiblePages}" current-page="${currentPage}"></pd-pagination>
    `;
};
