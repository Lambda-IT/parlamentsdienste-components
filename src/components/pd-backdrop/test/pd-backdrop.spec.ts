import { Backdrop } from '../pd-backdrop';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-backdrop', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Backdrop],
            html: `<pd-backdrop></pd-backdrop>`,
        });
        expect(page.root).toEqualHtml(`
      <pd-backdrop class="pd-backdrop-visible" tabindex="-1">
        <mock:shadow-root>
        </mock:shadow-root>
      </pd-backdrop>
    `);
    });
});
