import { PdList } from '../pd-list';
import { newSpecPage } from '@stencil/core/testing';

describe('pd-list', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [PdList],
            html: `<pd-list>Content</pd-list>`,
        });
        expect(page.root).toEqualHtml(`
          <pd-list>
            Content
          </pd-list>
        `);
    });
});
