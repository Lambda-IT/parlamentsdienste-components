import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../pd-input';

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
                   <input autocapitalize="off" autocomplete="off" autocorrect="off" class="pd-input" data-test="pd-input" placeholder="" size="1" type="text" value="">
                </label>
                </mock:shadow-root>
            </pd-input>
        `);
    });
});
