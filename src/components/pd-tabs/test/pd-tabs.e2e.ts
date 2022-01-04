import { newE2EPage } from '@stencil/core/testing';

describe('pd-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-tabs></pd-tabs>');

    const element = await page.find('pd-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
