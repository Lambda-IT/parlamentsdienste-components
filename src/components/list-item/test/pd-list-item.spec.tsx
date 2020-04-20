import { newSpecPage } from '@stencil/core/testing';
import { PdListItem } from './pd-list-item';

describe('pd-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdListItem],
      html: `<pd-list-item></pd-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-list-item>
    `);
  });
});
