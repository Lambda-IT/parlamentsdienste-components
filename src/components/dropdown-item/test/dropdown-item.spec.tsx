import { newSpecPage } from '@stencil/core/testing';
import { DropdownItem } from '../dropdown-item';

describe('dropdown-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownItem],
      html: `<dropdown-item></dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-item>
    `);
  });
});
