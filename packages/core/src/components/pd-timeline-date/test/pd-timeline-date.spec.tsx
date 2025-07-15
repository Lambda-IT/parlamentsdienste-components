import { newSpecPage } from '@stencil/core/testing';
import { TimelineDate } from '../pd-timeline-date';

describe('pd-timeline-date', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TimelineDate],
      html: `<pd-timeline-date></pd-timeline-date>`,
    });
    expect(page.root).toEqualHtml(`
      <pd-timeline-date>
        <mock:shadow-root>
          <div class="pd-timeline-date">
            <div class="pd-timeline-date-dot"></div>
            <div class="pd-timeline-date-text"></div>
          </div>
          <div class="pd-timeline-content pd-timeline-content-notitle">
            <div class="pd-timeline-content-text">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </pd-timeline-date>
    `);
  });
});
