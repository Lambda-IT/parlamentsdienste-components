import { newE2EPage } from '@stencil/core/testing';

describe('pd-sidebar-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-sidebar-item></pd-sidebar-item>');

    const element = await page.find('pd-sidebar-item');
    expect(element).toHaveClass('hydrated');
  });
});
