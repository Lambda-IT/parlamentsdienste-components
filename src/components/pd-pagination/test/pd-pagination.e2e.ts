import { newE2EPage } from '@stencil/core/testing';

describe('pd-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-pagination></pd-pagination>');

    const element = await page.find('pd-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
