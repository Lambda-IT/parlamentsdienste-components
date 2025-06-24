import { Combobox } from '../pd-combobox';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-combobox', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Combobox],
            html: `<pd-combobox></pd-combobox>`,
        });
        expect(page.root).toEqualHtml(`
            <pd-combobox role="combobox">
                <mock:shadow-root>
                <label class="pd-combobox-label">
                    <div class="pd-combobox-input-wrapper">
                        <button class="left pd-combobox-icon" tabindex="-1">
                            <pd-icon class="pd-combobox-icon-search pd-icon" name="search" size="2.4"></pd-icon>
                        </button>
                        <input class="pd-combobox-input" placeholder="" value="">
                        <button class="pd-combobox-icon right" tabindex="-1">
                            <pd-icon class="pd-combobox-icon-toggle pd-icon" name="dropdown" size="2.4"></pd-icon>
                        </button>
                    </div>
                </label>
                <div class="pd-combobox-dropdown" style="display: none; position: absolute; left: 0; top: 0; margin: 0;"></div>
                </mock:shadow-root>
            </pd-combobox>
        `);
    });
});
