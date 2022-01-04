import { newSpecPage } from '@stencil/core/testing';
import { PdTabs } from '../pd-tabs';

describe('pd-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdTabs],
      html: `<pd-tabs></pd-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-tabs>
    `);
  });
});
