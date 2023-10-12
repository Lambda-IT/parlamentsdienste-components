import { newSpecPage } from '@stencil/core/testing';
import { List } from '../pd-list';

describe('pd-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [List],
      html: `<pd-list>Content</pd-list>`,
    });
    expect(page.root).toEqualHtml(`
          <pd-list>
            Content
          </pd-list>
        `);
  });
});
