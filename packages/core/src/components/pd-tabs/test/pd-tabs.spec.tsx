import { newSpecPage } from '@stencil/core/testing';
import { Tabs } from '../pd-tabs';

describe('pd-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Tabs],
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
