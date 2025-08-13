import { newSpecPage } from '@stencil/core/testing';
import { Combobox } from '../pd-combobox';

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
                        <input aria-expanded="false" aria-haspopup="true" class="pd-combobox-input" data-test="pd-combobox-input" placeholder="" size="1" value="">
                        <button class="left pd-combobox-icon" tabindex="-1">
                            <pd-icon class="pd-combobox-icon-search pd-icon" name="search" size="2.4"></pd-icon>
                        </button>
                        <button class="pd-combobox-icon right" data-test="pd-combobox-toggle" tabindex="-1">
                            <pd-icon class="pd-combobox-icon-toggle pd-icon" name="dropdown" rotate="0" size="2.4"></pd-icon>
                        </button>
                    </div>
                </label>
               <div class="pd-combobox-dropdown" style="display: none; max-height: calc(3rem * 5 + 0.25rem); position: absolute; left: 0; top: 0; margin: 0;"></div>
                </mock:shadow-root>
            </pd-combobox>
        `);
    });
});
