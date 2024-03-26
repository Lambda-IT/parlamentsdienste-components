import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
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

type ButtonArgs = typeof defaultArgs;

const defaultArgTypes = {
    items: { controls: { type: 'object' } },
};

const meta: Meta<ButtonArgs> = {
    title: 'Forms + Inputs/Pagination',
    parameters: {
        actions: {
            handles: ['pd-change'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const pagination = args => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.cssText = '--pd-dropdown-vertical-padding: 0.125em; display: flex';
    wrapper.classList.add('m-3');

    const pdPagination = document.createElement('pd-pagination');
    pdPagination.totalPages = args.totalPages;
    pdPagination.visiblePages = args.visiblePages;
    pdPagination.currentPage = args.currentPage;
    pdPagination.separator = args.separator;
    if (args.showPageButtons) pdPagination.showPageButtons = true;
    pdPagination.classList.add('mr-3');

    const pdDropdown = document.createElement('pd-dropdown');
    pdDropdown.items = args.items;
    pdDropdown.style.minWidth = '100px';

    wrapper.appendChild(pdPagination);
    wrapper.appendChild(pdDropdown);

    return wrapper;
};

export const Pagination: StoryObj = {
    render: pagination,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};
