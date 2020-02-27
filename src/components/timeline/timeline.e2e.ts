import { newE2EPage } from '@stencil/core/testing';

describe('pd-timeline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-timeline></pd-timeline>');

    const element = await page.find('pd-timeline');
    expect(element).toHaveClass('hydrated');
  });
});
