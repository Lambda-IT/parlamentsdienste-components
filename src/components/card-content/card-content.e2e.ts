import { newE2EPage } from '@stencil/core/testing';

describe('pd-card-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-card-content></pd-card-content>');

    const element = await page.find('pd-card-content');
    expect(element).toHaveClass('hydrated');
  });
});
