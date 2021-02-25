import { Button } from '../pd-button';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-button', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Button],
            html: `<pd-button></pd-button>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-button>
            <mock:shadow-root>
                <button class="pd-button pd-button-normal pd-button-primary" role="button" type="button">  
                    <slot></slot>
                </button>
            </mock:shadow-root>
          </pd-button>
        `);
    });
});
