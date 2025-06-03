/** @type { import('@storybook/html-vite').Preview } */
import { defineCustomElements } from '@parlamentsdienste-components/core/loader';

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
