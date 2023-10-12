import { Preview } from '@storybook/html';
import DocumentationTemplate from '../src/stories/DocumentationTemplate.mdx';

import 'https://unpkg.com/@popperjs/core@2';
import 'https://unpkg.com/tippy.js@6';
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
