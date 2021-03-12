import { Menu } from '../pd-menu';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-menu', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Menu],
            html: `<pd-menu></pd-menu>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-menu>
            <mock:shadow-root>
            </mock:shadow-root>
          </pd-menu>
        `);
    });
});
