import { Table } from '../pd-table';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-table', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Table],
            html: `<pd-table></pd-table>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-table role="table">
            <mock:shadow-root>
                <pd-table-filter class="pd-table-filter-hidden" style="position: absolute; left: 0; top: 0; margin: 0;"></pd-table-filter>
                <div class="pd-table" role="grid" style="min-width: 300px;">
                    <div class="pd-table-fixed" style="flex: 0 0 0px; min-width: 0;">
                        <div class="pd-table-header-row" role="rowheader" style="height: 48px;"></div>
                        <div class="pd-table-body"></div>
                    </div>
                    <div class="pd-table-horizontal-scroll" style="flex: 0 1 0px;">
                        <div class="dark pd-table-header-row" role="rowheader" style="height: 48px;"></div>    
                        <div class="pd-table-body"></div>
                    </div>
                </div>
            </mock:shadow-root>
          </pd-table>
        `);
    });
});
