import { newSpecPage } from '@stencil/core/testing';
import { PdPagination } from '../pd-pagination';

describe('pd-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdPagination],
      html: `<pd-pagination></pd-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-pagination>
    `);
  });
});
