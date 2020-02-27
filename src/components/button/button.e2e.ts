import { newE2EPage } from '@stencil/core/testing';

describe('pd-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-button></pd-button>');

    const element = await page.find('pd-button');
    expect(element).toHaveClass('hydrated');
  });
});
