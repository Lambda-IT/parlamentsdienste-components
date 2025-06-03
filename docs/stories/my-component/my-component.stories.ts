import type { Meta, StoryObj } from '@storybook/html-vite';

const meta: Meta = {
  title: 'Components/MyComponent',
  render: (args) => {
    return `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;
  },
  argTypes: {
    first: { control: 'text' },
    middle: { control: 'text' },
    last: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  args: {
    first: 'John',
    middle: 'Q.',
    last: 'Public',
  },
};
