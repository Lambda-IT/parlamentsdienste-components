import { Input } from '../pd-input';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-input', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Input],
            html: `<pd-input></pd-input>`,
        });
        expect(page.root).toEqualHtml(`
            <pd-input>
                <mock:shadow-root>
                <label class="pd-input-label">
                   <input autocapitalize="off" autocomplete="off" autocorrect="off" class="pd-input" placeholder="" type="text" value="">
                </label>
                </mock:shadow-root>
            </pd-input>
        `);
    });
});
