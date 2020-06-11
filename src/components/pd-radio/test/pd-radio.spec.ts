import { Radio } from '../pd-radio';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-radio', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Radio],
            html: `<pd-radio></pd-radio>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-radio aria-checked="false" aria-disabled="false" role="radio">
            <label class="pd-radio-label">
                <input class="pd-radio-input" type="radio">
                <div class="pd-radio-inner"></div>
                <div class="pd-radio-text"></div>
            </label>
          </pd-radio>
        `);
    });
});
