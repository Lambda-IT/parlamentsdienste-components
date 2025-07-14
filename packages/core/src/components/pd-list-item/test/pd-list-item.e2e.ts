import { newE2EPage } from '@stencil/core/testing';

describe('pd-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-list-item></pd-list-item>');

    const element = await page.find('pd-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
