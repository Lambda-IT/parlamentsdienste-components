import { newSpecPage } from '@stencil/core/testing';
import { ListItem } from '../pd-list-item';

describe('pd-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListItem],
      html: `<pd-list-item></pd-list-item>`,
    });
    expect(page.root).toEqualHtml(`
          <pd-list-item>
            <mock:shadow-root>
              <div class="pd-list-item-content">
                <slot></slot>
              </div>
            </mock:shadow-root>
          </pd-list-item>
        `);
  });
});
