import { newE2EPage } from '@stencil/core/testing';

describe('pd-radio-alt', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-radio-alt></pd-radio-alt>');

    const element = await page.find('pd-radio-alt');
    expect(element).toHaveClass('hydrated');
  });
});
