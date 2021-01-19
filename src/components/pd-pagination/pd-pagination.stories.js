import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Pagination',
    parameters: {
        actions: {
            handles: ['pd-change'],
        },
        notes,
    },
    argTypes: {
        currentPage: { control: { type: 'number' } },
        totalPages: { control: { type: 'number' } },
        visiblePages: { control: { type: 'number' } },
        showPageButtons: { control: { type: 'boolean' } },
        separator: { control: { type: 'text' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Pagination = (args) => `
    <pd-pagination 
    total-pages="${args.totalPages}" 
    visible-pages="${args.visiblePages}" 
    current-page="${args.currentPage}" 
    separator="${args.separator}"
    ${args.showPageButtons ? 'show-page-buttons' : ''}></pd-pagination>
`;

Pagination.args = {
    currentPage: 3,
    totalPages: 10,
    visiblePages: 5,
    showPageButtons: false,
    separator: 'von',
};
