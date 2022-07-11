import { Navbar } from '../pd-navbar';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-navbar', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Navbar],
            html: `<pd-navbar></pd-navbar>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-navbar role="navigation">
            <mock:shadow-root>
                <pd-icon class="pd-navbar-icon" name="parlament" size="2.4"></pd-icon>
                <slot></slot>
            </mock:shadow-root>
          </pd-navbar>
        `);
    });
});
