import notes from './readme.md';

export default {
    title: 'Typography|Text',
    parameters: { notes },
};

export const Heading = () => {
    return `
      <h1 class="mt-3 ml-3">Header 1</h1>
      <h2 class="mt-3 ml-3">Header 2</h2>
      <h3 class="mt-3 ml-3">Header 3</h3>
      <h4 class="mt-3 ml-3">Header 4</h4>
      <h5 class="mt-3 ml-3">Header 5</h5>
      <h6 class="mt-3 ml-3">Header 6</h6>
  `;
};
export const InlineTextElements = () => {
    return `
    <div class="m-3">
      <p>You can use the <mark>mark</mark> tag to highlight text.</p>
      <p><del>This line of text is meant to be treated as deleted text.</del></p>
      <p><del>This line of text is meant to be treated as no longer accurate.</del></p>
      <p style="text-decoration: underline">This line of text is meant to be treated as an addition to the document.</p>
      <p style="text-decoration: underline">This line of text will render as underlined</p>
      <p style="font: 14px/20px Avenir">This line of text is meant to be treated as fine print.</p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><i>This line rendered as italicized text.</i></p>
    </div>
    `;
};
