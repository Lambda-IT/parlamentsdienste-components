import { ProgressBar } from '../pd-progress-bar';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-progress-bar', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [ProgressBar],
            html: `<pd-progress-bar></pd-progress-bar>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-progress-bar>
            <mock:shadow-root>
                <div class="pd-progress-bar-background">
                    <div class="pd-progress-bar pd-progress-bar-primary" style="width: 0%;"></div>
                </div>
            </mock:shadow-root>
          </pd-progress-bar>
        `);
    });
});
