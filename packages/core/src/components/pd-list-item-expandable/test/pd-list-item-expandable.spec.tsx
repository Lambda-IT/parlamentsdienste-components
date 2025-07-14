import { newSpecPage } from '@stencil/core/testing';
import { ListItemExpandable } from '../pd-list-item-expandable';

describe('pd-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListItemExpandable],
      html: `<pd-list-item-expandable></pd-list-item-expandable>`,
    });
    expect(page.root).toEqualHtml(`
          <pd-list-item-expandable>
            <mock:shadow-root>
              <div class="pd-list-item-content">
                <slot></slot>
              </div>
            </mock:shadow-root>
          </pd-list-item-expandable>
        `);
  });
});
