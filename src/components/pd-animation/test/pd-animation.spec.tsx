import { newSpecPage } from '@stencil/core/testing';
import { PdAnimation } from '../pd-animation';

describe('pd-animation', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdAnimation],
            html: `<pd-animation></pd-animation>`,
        });
        expect(page.root).toEqualHtml(`
      <pd-animation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-animation>
    `);
    });
});
