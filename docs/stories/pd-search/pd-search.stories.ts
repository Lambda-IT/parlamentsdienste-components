import type { ArgTypes, Meta, StoryObj } from '@storybook/html-vite';
import { addEventlisteners } from '../utils/eventListeners';

const defaultArgs = {
    label: 'Label',
    placeholder: 'search...',
    disabled: false,
    highlight: false,
    results: ['Sample Result 1', 'Sample Result 2', 'Sample Result 3', 'Sample Result 4', 'Sample Result 5'],
};

type SearchArgs = typeof defaultArgs;

const defaultArgTypes: ArgTypes = {
    results: { control: { type: 'select' } },
};

const meta: Meta<SearchArgs> = {
    title: 'Forms + Inputs/Search',
    args: defaultArgs,
    argTypes: defaultArgTypes,
};

export default meta;

const events = ['pd-input', 'pd-change', 'pd-search', 'pd-focus', 'pd-blur'];
addEventlisteners('pd-search', events);

///////////////////////////////////////////////////////////////////////////

const search = (args: SearchArgs) => {
    const search = document.createElement('pd-search') as HTMLPdSearchElement;
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
};
