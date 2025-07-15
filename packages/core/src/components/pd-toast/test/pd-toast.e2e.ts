import { newE2EPage } from '@stencil/core/testing';

describe('pd-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-toast></pd-toast>');

    const element = await page.find('pd-toast');
    expect(element).toHaveClass('hydrated');
  });
});
