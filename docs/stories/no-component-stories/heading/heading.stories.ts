import type { Meta, StoryObj } from '@storybook/html-vite';

const meta: Meta = {
    title: 'Typography/Heading',
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const heading = () => {
    return `
      <h1 class="mt-3 ml-3">h1. Heading</h1>
      <h2 class="mt-3 ml-3">h2. Heading</h2>
      <h3 class="mt-3 ml-3">h3. Heading</h3>
      <h4 class="mt-3 ml-3">h4. Heading</h4>
      <h5 class="mt-3 ml-3">h5. Heading</h5>
      <h6 class="mt-3 ml-3">h6. Heading</h6>
  `;
};

export const Heading: StoryObj = {
    render: heading,
};
