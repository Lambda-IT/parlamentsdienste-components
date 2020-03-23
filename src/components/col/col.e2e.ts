import { newE2EPage } from '@stencil/core/testing';

describe('pd-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-col></pd-col>');

    const element = await page.find('pd-col');
    expect(element).toHaveClass('hydrated');
  });
});
