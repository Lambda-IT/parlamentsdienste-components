/** @type { import('@storybook/html-vite').Preview } */
import { defineCustomElements } from '@parlamentsdienste-components/core/loader';
import '@parlamentsdienste-components/core/styles/parlamentsdienstecore.css';
import '@parlamentsdienste-components/core/styles/typography.css';
defineCustomElements();

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
