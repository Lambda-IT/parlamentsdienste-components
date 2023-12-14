// import notes from './readme.md';

export default {
    title: 'Forms + Inputs/Search',
    parameters: {
        actions: {
            handles: ['pd-input', 'pd-change', 'pd-search', 'pd-focus', 'pd-blur'],
        },
        // notes,
    },
    argTypes: {
        label: { control: { type: 'text' } },
        placeholder: { control: { type: 'text' } },
        disabled: { control: { type: 'boolean' } },
        highlight: { control: { type: 'boolean' } },
        results: { control: { type: 'array' } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Search = args => {
    const search = document.createElement('pd-search');
    search.classList.add('m-3');
    search.results = args.results;
    search.disabled = args.disabled;
    search.label = args.label;
    search.placeholder = args.placeholder;
    search.highlight = args.highlight;

    return search;
};

Search.args = {
    label: 'Label',
    placeholder: 'search...',
    disabled: false,
    highlight: false,
    results: ['Sample Result 1', 'Sample Result 2', 'Sample Result 3', 'Sample Result 4', 'Sample Result 5'],
};
