import { newE2EPage } from '@stencil/core/testing';

describe('pd-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-search></pd-search>');

    const element = await page.find('pd-search');
    expect(element).toHaveClass('hydrated');
  });
});
