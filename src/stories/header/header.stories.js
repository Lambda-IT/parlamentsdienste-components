import notes from './readme.md';

export default {
    title: 'Typography|Header',
    parameters: { notes },
};

export const basic = () => {
    return `
      <h1 class="mt-3 ml-3">Header 1</h1>
      <h2 class="mt-3 ml-3">Header 2</h2>
      <h3 class="mt-3 ml-3">Header 3</h3>
      <h4 class="mt-3 ml-3">Header 4</h4>
      <h5 class="mt-3 ml-3">Header 5</h5>
      <h6 class="mt-3 ml-3">Header 6</h6>
  `;
};
