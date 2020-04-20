import { newSpecPage } from '@stencil/core/testing';
import { PdList } from '../list';

describe('pd-list', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdList],
            html: `<pd-list></pd-list>`,
        });
        expect(page.root).toEqualHtml(`
      <pd-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-list>
    `);
    });
});
