import { newSpecPage } from '@stencil/core/testing';
import { PdBreadcrumbs } from '../pd-breadcrumbs';

describe('pd-breadcrumbs', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdBreadcrumbs],
            html: `<pd-breadcrumbs></pd-breadcrumbs>`,
        });
        expect(page.root).toEqualHtml(`
      <pd-breadcrumbs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-breadcrumbs>
    `);
    });
});
