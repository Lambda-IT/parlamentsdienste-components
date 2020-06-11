import { newSpecPage } from '@stencil/core/testing';
import { PdToast } from '../pd-toast';

describe('pd-toast', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdToast],
            html: `<pd-toast></pd-toast>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-toast style="max-width:550px;">
            <mock:shadow-root>
              <div class="pd-toast-header">
                <div class="pd-toast-header-left">
                  <span class="pd-toast-title"></span>
                </div>
                <div class="pd-toast-header-right">
                  <pd-icon class="pd-toast-close" name="close" size="2"></pd-icon>
                </div>
              </div>
              <div class="pd-toast-body">
                <slot></slot>
              </div>
            </mock:shadow-root>
          </pd-toast>
        `);
    });
});
