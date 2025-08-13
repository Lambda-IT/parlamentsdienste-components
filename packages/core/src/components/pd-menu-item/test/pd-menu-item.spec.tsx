import { newSpecPage } from '@stencil/core/testing';
import { MenuItem } from '../pd-menu-item';

describe('menu-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [MenuItem],
            html: `<pd-menu-item></pd-menu-item>`,
        });
        expect(page.root).toEqualHtml(`
                    <pd-menu-item>
                        <mock:shadow-root>
                            <button class="pd-menu-item">
                                <slot></slot>
                                <div class="pd-menu-item-text" data-test="pd-menu-item-text"></div>
                            </button>
                        </mock:shadow-root>
                    </pd-menu-item>
                `);
    });
});
