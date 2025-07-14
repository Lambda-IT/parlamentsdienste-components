import { newE2EPage } from '@stencil/core/testing';

describe('pd-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-sidebar></pd-sidebar>');

    const element = await page.find('pd-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
