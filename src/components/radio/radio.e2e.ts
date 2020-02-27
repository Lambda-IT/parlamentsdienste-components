import { newE2EPage } from '@stencil/core/testing';

describe('pd-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-radio></pd-radio>');

    const element = await page.find('pd-radio');
    expect(element).toHaveClass('hydrated');
  });
});
