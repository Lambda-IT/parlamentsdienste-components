import { newSpecPage } from '@stencil/core/testing';
import { PdTimelineDate } from './pd-timeline-date';

describe('pd-timeline-date', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PdTimelineDate],
      html: `<pd-timeline-date></pd-timeline-date>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-timeline-date>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pd-timeline-date>
    `);
  });
});
