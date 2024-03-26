import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

const defaultArgs = {
    label: 'Label',
    placeholder: 'search...',
    disabled: false,
    highlight: false,
    results: ['Sample Result 1', 'Sample Result 2', 'Sample Result 3', 'Sample Result 4', 'Sample Result 5'],
};

type SearchArgs = typeof defaultArgs;

const defaultArgTypes = {
    results: { control: { type: 'array' } },
};

const meta: Meta<SearchArgs> = {
    title: 'Forms + Inputs/Search',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change', 'pd-search', 'pd-focus', 'pd-blur'],
        },
    },
    decorators: [withActions],
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const search = args => {
    const search = document.createElement('pd-search');
    search.classList.add('m-3');
    search.results = args.results;
    search.disabled = args.disabled;
    search.label = args.label;
    search.placeholder = args.placeholder;
    search.highlight = args.highlight;

    return search;
};

export const Search: StoryObj = {
    render: search,
    args: defaultArgs,
    argTypes: defaultArgTypes,
};
