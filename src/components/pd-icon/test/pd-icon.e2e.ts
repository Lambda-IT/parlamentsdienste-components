import { newE2EPage } from '@stencil/core/testing';

describe('pd-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-icon></pd-icon>');

    const element = await page.find('pd-icon');
    expect(element).toHaveClass('hydrated');
  });
});