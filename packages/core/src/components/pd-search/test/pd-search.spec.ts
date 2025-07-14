import { Search } from '../pd-search';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-search', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Search],
            html: `<pd-search></pd-search>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-search role="search">
            <mock:shadow-root>
              <label class="pd-search-label">
                <div class="pd-search-input-wrapper">
                  <input class="pd-search-input" placeholder="" value="">
                  <button class="pd-search-clear" tabindex="-1">
                    <pd-icon class="pd-search-clear-icon" name="cancel" size="2.4"></pd-icon>
                  </button>
                  <button class="pd-search-button" tabindex="-1">
                    <pd-icon class="pd-search-button-icon" name="search" size="2.4"></pd-icon>
                  </button>
                </div>
              </label>
              <div class="pd-search-dropdown" style="display: none; position: absolute; left: 0; top: 0; margin: 0;"></div>
            </mock:shadow-root>
          </pd-search>
        `);
    });
});
