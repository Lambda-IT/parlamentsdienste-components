import { newE2EPage } from '@stencil/core/testing';

describe('pd-card-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-card-header></pd-card-header>');

    const element = await page.find('pd-card-header');
    expect(element).toHaveClass('hydrated');
  });
});
