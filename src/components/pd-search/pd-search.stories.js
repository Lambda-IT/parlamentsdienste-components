import notes from './readme.md';
import { withKnobs, radios, array, text } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

export default {
    title: 'Forms + Inputs|Search',
    decorators: [withActions('pd-on-input', 'pd-on-change', 'pd-on-search', 'pd-on-focus', 'pd-on-blur'), withKnobs()],
    parameters: {
        notes,
    },
};

export const search = () => {
    const disabled = radios('disabled', { yes: 'true', no: 'false' }, 'false');
    const label = text('label', 'Label');
    const placeholder = text('placeholder', 'search...');
    const highlight = radios('highlight', { yes: 'true', no: 'false' }, 'false');
    const results = array('search results', [
        'Sample Result 1',
        'Sample Result 2',
        'Sample Result 3',
        'Sample Result 4',
        'Sample Result 5',
    ]);

    const search = document.createElement('pd-search');
    search.classList = ['m-3'];
    search.results = results;
    search.disabled = disabled;
    search.label = label;
    search.placeholder = placeholder;
    search.highlight = highlight;

    return search;
};
