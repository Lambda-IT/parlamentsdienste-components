import { PanelFooter } from '../pd-panel-footer';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-panel-footer', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PanelFooter],
            html: `<pd-panel-footer></pd-panel-footer>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-panel-footer>
            <mock:shadow-root>
              <slot></slot>
            </mock:shadow-root>
          </pd-panel-footer>
        `);
    });
});
