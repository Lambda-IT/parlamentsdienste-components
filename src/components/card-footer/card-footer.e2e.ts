import { newE2EPage } from '@stencil/core/testing';

describe('pd-card-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-card-footer></pd-card-footer>');

    const element = await page.find('pd-card-footer');
    expect(element).toHaveClass('hydrated');
  });
});
