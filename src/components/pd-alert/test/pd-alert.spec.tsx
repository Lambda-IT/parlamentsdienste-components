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
          <slot></slot>
        </mock:shadow-root>
      </pd-alert>
    `);
    });
});
