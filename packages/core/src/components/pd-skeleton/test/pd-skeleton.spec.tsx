import { newSpecPage } from '@stencil/core/testing';
import { PdSkeleton } from '../pd-skeleton';

describe('pd-skeleton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdSkeleton],
      html: `<pd-skeleton></pd-skeleton>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-skeleton style="height: 32px; width: 100%;">
        <mock:shadow-root>
          <div class="pd-skeleton-animation"></div>
        </mock:shadow-root>
      </pd-skeleton>
    `);
  });
});
