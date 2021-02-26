import { newSpecPage } from '@stencil/core/testing';
import { Chip } from '../pd-chip';

describe('pd-chip', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Chip],
            html: `<pd-chip></pd-chip>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-chip>
            <mock:shadow-root>
            <pd-chip id="pd-chip-0">Text Chip</pd-chip>
            </mock:shadow-root>
          </pd-chip>
        `);
    });
});
