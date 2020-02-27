import { newE2EPage } from '@stencil/core/testing';

describe('pd-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-slider></pd-slider>');

    const element = await page.find('pd-slider');
    expect(element).toHaveClass('hydrated');
  });
});
