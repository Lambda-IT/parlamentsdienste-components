import { ButtonGroup } from '../pd-button-group';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-button-group', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [ButtonGroup],
            html: `<pd-button-group></pd-button-group>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-button-group>
            <mock:shadow-root>
              <slot></slot>
            </mock:shadow-root>
          </pd-button-group>
        `);
    });
});
