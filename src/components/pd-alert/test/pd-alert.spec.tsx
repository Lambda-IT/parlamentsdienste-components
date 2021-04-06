import { newSpecPage } from '@stencil/core/testing';
import { PdAlert } from '../pd-alert';

describe('pd-alert', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdAlert],
            html: `<pd-alert></pd-alert>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-alert>
            <mock:shadow-root>
              <div class="pd-alert pd-alert-primary">
                <div class="pd-alert-text">
                  <div>
                    <slot></slot>
                  </div>
                </div>
                <div class="pd-alert-action"></div>
              </div>
            </mock:shadow-root>
          </pd-alert>
        `);
    });
});
