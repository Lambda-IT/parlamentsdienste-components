import { newE2EPage } from '@stencil/core/testing';

describe('pd-skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-skeleton></pd-skeleton>');

    const element = await page.find('pd-skeleton');
    expect(element).toHaveClass('hydrated');
  });
});
