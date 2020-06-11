import { Dropdown } from '../pd-dropdown';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-dropdown', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Dropdown],
            html: `<pd-dropdown></pd-dropdown>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-dropdown>
            <mock:shadow-root>
                <div class="pd-dropdown">
                    <button aria-expanded="false" aria-haspopup="true" class="pd-dropdown-button" type="button">
                        <span class="pd-dropdown-text">
                            Placeholder
                        </span>
                        <pd-icon class="pd-dropdown-caret" name="dropdown" rotate="0" size="2"></pd-icon>      
                    </button>
                    <div class="pd-dropdown-menu" tabindex="-1" style="display: none; max-height: calc(3em * 5 + 0.25em); position: absolute; left: 0; top: 0; margin: 0;"></div>                
                </div>
            </mock:shadow-root>
          </pd-dropdown>
        `);
    });
});
