import { SidebarItem } from '../pd-sidebar-item';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-sidebar-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [SidebarItem],
            html: `<pd-sidebar-item></pd-sidebar-item>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-sidebar-item>
            <mock:shadow-root>
              <button class="pd-sidebar-item">
                <div class="pd-sidebar-icon">
                  <pd-icon size="2"></pd-icon>
                </div>
                <div class="pd-sidebar-text"></div>
              </button>
            </mock:shadow-root>
          </pd-sidebar-item>
        `);
    });
});
