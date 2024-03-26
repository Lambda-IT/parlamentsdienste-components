import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
    title: 'Interactions/Breadcrumb',
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const breadcrumb = () => {
    return `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
`;
};

export const Breadcrumb: StoryObj = {
    render: breadcrumb,
};
