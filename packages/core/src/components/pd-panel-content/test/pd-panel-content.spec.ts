import { PanelContent } from '../pd-panel-content';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-panel-content', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PanelContent],
            html: `<pd-panel-content>Content</pd-panel-content>`,
        });
        expect(page.root).toEqualHtml(`
            <pd-panel-content>
                Content
            </pd-panel-content>`);
    });
});
