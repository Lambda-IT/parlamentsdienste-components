import { Sidebar } from '../pd-sidebar';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-sidebar', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Sidebar],
            html: `<pd-sidebar></pd-sidebar>`,
        });
        expect(page.root).toEqualHtml(`
      <pd-sidebar role="navigation">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-sidebar>
    `);
    });
});
