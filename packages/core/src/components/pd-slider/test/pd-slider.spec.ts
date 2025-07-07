import { Slider } from '../pd-slider';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-slider', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Slider],
            html: `<pd-slider></pd-slider>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-slider>
            <mock:shadow-root>
                <input class="pd-slider" max="100" min="0" multiple="" step="1" type="range" value="0">
            </mock:shadow-root>
          </pd-slider>
        `);
    });
});
