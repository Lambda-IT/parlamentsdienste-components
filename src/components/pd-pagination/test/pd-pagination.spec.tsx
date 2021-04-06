import { newSpecPage } from '@stencil/core/testing';
import { PdPagination } from '../pd-pagination';

describe('pd-pagination', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdPagination],
            html: `<pd-pagination></pd-pagination>`,
        });
        expect(page.root).toEqualHtml(`
        <pd-pagination>
            <mock:shadow-root>
                <button class="pd-pagination-first">
                    <span>
                        «
                    </span>
                </button>
                <button class="pd-pagination-prev">
                    <span>
                        ‹
                    </span>
                </button>
                <div class="pd-pagination-simple">
                    <span class="pd-pagination-number">
                        1
                    </span>
                    <span class="pd-pagination-separator">
                        von
                    </span>
                    <span class="pd-pagination-number">
                        5
                    </span>
                </div>
                <button class="pd-pagination-next">
                    <span>
                        ›
                    </span>
                </button>
                <button class="pd-pagination-last">
                    <span>
                        »
                    </span>
                </button>
            </mock:shadow-root>
        </pd-pagination>
    `);
    });
});
