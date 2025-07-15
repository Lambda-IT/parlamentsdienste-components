import { newE2EPage } from '@stencil/core/testing';

describe('pd-timeline-date', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-timeline-date></pd-timeline-date>');

    const element = await page.find('pd-timeline-date');
    expect(element).toHaveClass('hydrated');
  });
});
