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
          <div class="pd-list-item-expandable-header">
            <div class="pd-list-item-expandable-content">
              <slot></slot>
            </div>
            <div data-test="pd-list-item-expandable-actions">
              <slot name="action-left"></slot>
              <slot name="action-right"></slot>
            </div>
          </div>
          <div class="pd-list-item-expandable-additional-content-wrapper" style="height: 0; overflow: hidden;">
            <div class="pd-list-item-expandable-additional-content">
              <slot name="expandable"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </pd-list-item-expandable>
    `);
    });
});
