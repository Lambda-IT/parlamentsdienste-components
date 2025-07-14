import { NavbarItem } from '../pd-navbar-item';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-navbar-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [NavbarItem],
            html: `<pd-navbar-item></pd-navbar-item>`,
        });
        expect(page.root).toEqualHtml(`
      <pd-navbar-item>
        <mock:shadow-root>
          <button class="pd-navbar-item">
            <div class="pd-navbar-text"></div>
          </button>
        </mock:shadow-root>
      </pd-navbar-item>
    `);
    });
});
