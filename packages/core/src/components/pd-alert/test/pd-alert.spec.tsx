import { newSpecPage } from '@stencil/core/testing';
import { Alert } from '../pd-alert';

describe('pd-alert', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Alert],
            html: `<pd-alert></pd-alert>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-alert>
            <mock:shadow-root>
              <div class="pd-alert pd-alert-primary">
                <div class="pd-alert-top-section">
                  <div class="pd-alert-message-action">
                    <slot></slot>
                  </div>
                </div>
                <div class="pd-alert-expandable-content-wrapper" style="height: 0; overflow: hidden;"></div>
              </div>
            </mock:shadow-root>
          </pd-alert>
        `);
    });
});
