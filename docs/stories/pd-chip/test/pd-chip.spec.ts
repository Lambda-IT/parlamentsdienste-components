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
                <button class="pd-chip pd-chip-text" role="button">
                    <slot></slot>
                </button>
                </mock:shadow-root>
            </pd-chip>
        `);
    });
});
