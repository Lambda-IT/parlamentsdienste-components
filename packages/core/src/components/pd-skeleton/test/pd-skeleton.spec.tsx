import { newSpecPage } from '@stencil/core/testing';
import { PdSkeleton } from '../pd-skeleton';

describe('pd-skeleton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdSkeleton],
      html: `<pd-skeleton></pd-skeleton>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-skeleton>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-skeleton>
    `);
  });
});
