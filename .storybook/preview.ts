import { Preview } from '@storybook/html';
import DocumentationTemplate from '../src/stories/DocumentationTemplate.mdx';

import '../dist/parlamentsdienstecore/parlamentsdienstecore.css';
import '../dist/parlamentsdienstecore/parlamentsdienstecore.esm.js';
import '../dist/parlamentsdienstecore/typography.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export default preview;
