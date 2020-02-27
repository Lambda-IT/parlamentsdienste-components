import { newE2EPage } from '@stencil/core/testing';

describe('pd-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-card></pd-card>');

    const element = await page.find('pd-card');
    expect(element).toHaveClass('hydrated');
  });
});
