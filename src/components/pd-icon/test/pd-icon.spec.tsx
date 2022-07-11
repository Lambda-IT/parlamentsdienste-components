import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../pd-icon';

describe('pd-icon', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Icon],
            html: `<pd-icon></pd-icon>`,
        });
        expect(page.root).toEqualHtml(`
      <pd-icon role="img">
        <mock:shadow-root>
          <div class="pd-icon-inner"></div>
        </mock:shadow-root>
      </pd-icon>
    `);
    });
});