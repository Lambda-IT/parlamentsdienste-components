import { Preview } from '@storybook/html-vite';

import '@parlamentsdienste-components/core/styles/parlamentsdienstecore.css';
import '@parlamentsdienste-components/core/styles/typography.css';
import 'https://unpkg.com/@popperjs/core@2';
import 'https://unpkg.com/tippy.js@6';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: ['Welcome', '*'],
            },
        },
    },
};

export default preview;
