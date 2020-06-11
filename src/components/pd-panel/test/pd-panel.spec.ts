import { Panel } from '../pd-panel';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-panel', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Panel],
            html: `<pd-panel></pd-panel>`,
        });
        expect(page.root).toEqualHtml(`
            <pd-panel>
                <mock:shadow-root>
                    <slot name="header"></slot>
                    <div aria-expanded="true" class="pd-panel-content-expanded pd-panel-content-wrapper">      
                        <slot></slot>
                        <slot name="footer"></slot>
                    </div>
                </mock:shadow-root>
            </pd-panel>
        `);
    });
});
