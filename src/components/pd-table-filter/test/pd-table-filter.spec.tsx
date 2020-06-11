import { newSpecPage } from '@stencil/core/testing';
import { PdTableFilter } from '../pd-table-filter';

describe('pd-table-filter', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdTableFilter],
            html: `<pd-table-filter></pd-table-filter>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-table-filter>
            <mock:shadow-root>
              <div class="pd-table-filter-wrapper">
                <div class="pd-table-search-input-wrapper">
                  <input class="pd-table-search-input" placeholder="Stichwort, Name …" value="">
                  <button class="pd-table-search-button" tabindex="-1">
                    <pd-icon class="pd-table-search-button-icon" name="search" size="2.4"></pd-icon>
                  </button>
                </div>
                <button class="pd-table-filter-clear">
                  <pd-icon class="pd-table-filter-close" name="close" size="2.5"></pd-icon>      
                </button>
              </div>
              <button class="pd-table-filter-confirm">
                <pd-icon name="confirm" size="2.8"></pd-icon>
              </button>
            </mock:shadow-root>
          </pd-table-filter>
        `);
    });
});
