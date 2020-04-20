import { newSpecPage } from '@stencil/core/testing';
import { PdIcon } from '../pd-icon';

describe('pd-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdIcon],
      html: `<pd-icon></pd-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-icon>
    `);
  });
});
