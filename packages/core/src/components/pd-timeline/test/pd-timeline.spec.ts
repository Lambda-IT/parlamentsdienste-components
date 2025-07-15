import { Timeline } from '../pd-timeline';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-timeline', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Timeline],
            html: `<pd-timeline></pd-timeline>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-timeline>
            <mock:shadow-root>
                <div class="pd-timeline-line"></div>
                <div class="pd-timeline-container">
                    <slot></slot>
                </div>
            </mock:shadow-root>
          </pd-timeline>
        `);
    });
});
