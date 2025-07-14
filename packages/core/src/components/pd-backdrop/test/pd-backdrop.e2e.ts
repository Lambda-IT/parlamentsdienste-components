import { newE2EPage } from '@stencil/core/testing';

describe('pd-backdrop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-backdrop></pd-backdrop>');

    const element = await page.find('pd-backdrop');
    expect(element).toHaveClass('hydrated');
  });
});
