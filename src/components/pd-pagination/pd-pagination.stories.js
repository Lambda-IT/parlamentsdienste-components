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
        items: { controls: { type: 'object' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Pagination = (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.cssText = '--pd-dropdown-vertical-padding: 0.125em; display: flex';
    wrapper.classList = ['m-3'];

    const pdPagination = document.createElement('pd-pagination');
    pdPagination.totalPages = args.totalPages;
    pdPagination.visiblePages = args.visiblePages;
    pdPagination.currentPage = args.currentPage;
    pdPagination.separator = args.separator;
    if (args.showPageButtons) pdPagination.showPageButtons = true;
    pdPagination.classList = ['mr-3'];

    const pdDropdown = document.createElement('pd-dropdown');
    pdDropdown.items = args.items;
    pdDropdown.style.minWidth = '100px';

    wrapper.appendChild(pdPagination);
    wrapper.appendChild(pdDropdown);

    return wrapper;
};

Pagination.args = {
    currentPage: 3,
    totalPages: 10,
    visiblePages: 5,
    showPageButtons: false,
    separator: 'von',
    items: [
        { id: '1', label: '25', value: 25, selected: true },
        { id: '2', label: '50', value: 50 },
        { id: '3', label: '100', value: 100 },
    ],
};
