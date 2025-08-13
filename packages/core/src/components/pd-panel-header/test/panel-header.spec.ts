import { PanelHeader } from '../pd-panel-header';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-panel-header', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PanelHeader],
            html: `<pd-panel-header></pd-panel-header>`,
        });
        expect(page.root).toEqualHtml(`
                    <pd-panel-header>
                        <mock:shadow-root>
                            <div class="pd-panel-header-content">
                                <slot></slot>
                                <div class="pd-panel-header-subtitle">
                                    <slot name="subtitle"></slot>
                                </div>
                            </div>
                            <div class="pd-panel-header-icons">
                                <slot name="icons"></slot>
                            </div>
                        </mock:shadow-root>
                    </pd-panel-header>
                `);
    });
});
