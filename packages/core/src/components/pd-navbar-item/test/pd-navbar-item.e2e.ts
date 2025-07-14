import { newE2EPage } from '@stencil/core/testing';

describe('pd-navbar-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-navbar-item></pd-navbar-item>');

    const element = await page.find('pd-navbar-item');
    expect(element).toHaveClass('hydrated');
  });
});
