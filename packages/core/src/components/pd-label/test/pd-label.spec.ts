import { newSpecPage } from '@stencil/core/testing';
import { Label } from '../pd-label';

describe('pd-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Label],
      html: `<pd-label></pd-label>`,
    });
    expect(page.root).toEqualHtml(`
            <pd-label>
                <mock:shadow-root>
                </mock:shadow-root>
            </pd-label>
        `);
  });
});
