import { newSpecPage } from '@stencil/core/testing';
import { PdTableFilter } from './pd-table-filter';

describe('pd-table-filter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdTableFilter],
      html: `<pd-table-filter></pd-table-filter>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-table-filter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-table-filter>
    `);
  });
});
