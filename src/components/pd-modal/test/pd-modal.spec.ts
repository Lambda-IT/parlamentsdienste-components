import { Modal } from '../pd-modal';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-modal', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [Modal],
            html: `<pd-modal></pd-modal>`,
        });
        expect(page.root).toEqualHtml(`
            <pd-modal style="display: none;">
                <mock:shadow-root>
                    <focus-trap>
                        <pd-backdrop></pd-backdrop>
                        <div class="pd-modal-wrapper" role="dialog" tabindex="0">
                            <div class="pd-modal-header">
                                <span class="pd-modal-title"></span>
                                <button class="pd-modal-close">
                                    <pd-icon name="close" size="2"></pd-icon>
                                </button>
                            </div>
                            <div class="pd-modal-content">
                                <slot></slot>
                            </div>
                            <div class="pd-modal-footer">
                                <slot name="footer"></slot>
                            </div>
                        </div>
                    </focus-trap>
                </mock:shadow-root>
            </pd-modal>
        `);
    });
});
