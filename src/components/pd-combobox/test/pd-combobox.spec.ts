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
                  <input class="pd-combobox-input" placeholder="" value="">
                  <button class="pd-combobox-clear" tabindex="-1">
                    <pd-icon class="pd-combobox-clear-icon" name="cancel" size="2.4"></pd-icon>
                  </button>
                  <button class="pd-combobox-button" tabindex="-1">
                    <pd-icon class="pd-combobox-button-icon" name="combobox" size="2.4"></pd-icon>
                  </button>
                </div>
              </label>
              <div class="pd-combobox-dropdown" style="display: none; position: absolute; left: 0; top: 0; margin: 0;"></div>
            </mock:shadow-root>
          </pd-combobox>
        `);
    });
});
