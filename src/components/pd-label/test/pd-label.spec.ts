import { newSpecPage } from '@stencil/core/testing';
import { PdLabel } from '../pd-label';

describe('pd-label', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdLabel],
            html: `<pd-label></pd-label>`,
        });
        expect(page.root).toEqualHtml(`
            <pd-label>
                <mock:shadow-root>
                </mock:shadow-root>
            </pd-label>
        `);
    });
});
