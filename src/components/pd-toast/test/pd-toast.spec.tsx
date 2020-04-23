import { newSpecPage } from '@stencil/core/testing';
import { PdToast } from './pd-toast';

describe('pd-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdToast],
      html: `<pd-toast></pd-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-toast>
    `);
  });
});
