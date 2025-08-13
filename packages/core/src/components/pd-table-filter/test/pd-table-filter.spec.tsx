import { newSpecPage } from '@stencil/core/testing';
import { TableFilter } from '../pd-table-filter';

describe('pd-table-filter', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [TableFilter],
            html: `<pd-table-filter></pd-table-filter>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-table-filter>
            <mock:shadow-root>
              <div class="pd-table-filter-wrapper">
                <div class="pd-table-search-input-wrapper">
                  <input class="pd-table-search-input" data-test="pd-table-filter-input" placeholder="Stichwort, Name …" value="">
                  <button class="pd-table-search-button" tabindex="-1">
                    <pd-icon class="pd-table-search-button-icon" name="search" size="2.375"></pd-icon>
                  </button>
                </div>
                <button class="pd-table-filter-clear" data-test="pd-table-filter-clear">
                  <pd-icon class="pd-table-filter-close" name="close" size="2.375"></pd-icon>
                </button>
              </div>
            </mock:shadow-root>
          </pd-table-filter>
        `);
    });
});
