import notes from './readme.md';

export default {
    title: 'Interactions|Breadcrumb',
    parameters: { notes },
};

export const breadcrumb = () => {
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
