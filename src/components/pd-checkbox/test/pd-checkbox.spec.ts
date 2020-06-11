import { Checkbox } from '../pd-checkbox';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-checkbox', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Checkbox],
            html: `<pd-checkbox></pd-checkbox>`,
        });
        expect(page.root).toEqualHtml(`
            <pd-checkbox aria-checked="false" aria-disabled="false" role="checkbox">
                <mock:shadow-root>
                    <label class="pd-checkbox-label">
                        <input class="pd-checkbox-input" type="Checkbox" value="false">
                        <div class="pd-checkbox-inner">
                            <div class="pd-checkbox-checkmark"></div>
                        </div>
                        <div class="pd-checkbox-text"></div>
                    </label>
                </mock:shadow-root>
            </pd-checkbox>
        `);
    });
});
