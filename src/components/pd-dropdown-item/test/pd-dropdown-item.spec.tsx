import { newSpecPage } from '@stencil/core/testing';
import { DropdownItem } from '../pd-dropdown-item';

describe('dropdown-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [DropdownItem],
            html: `<dropdown-item></dropdown-item>`,
        });
        expect(page.root).toEqualHtml(`
          <dropdown-item></dropdown-item>
        `);
    });
});
