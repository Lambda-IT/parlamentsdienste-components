import { Textarea } from '../pd-textarea';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-textarea', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Textarea],
            html: `<pd-textarea></pd-textarea>`,
        });
        expect(page.root).toEqualHtml(`
            <pd-textarea>
                <mock:shadow-root>
                    <label class="pd-textarea-label">
                        <textarea autocapitalize="none" class="pd-textarea" placeholder="" data-test="pd-textarea" rows="1"></textarea>
                    </label>
                </mock:shadow-root>
            </pd-textarea>
        `);
    });
});
