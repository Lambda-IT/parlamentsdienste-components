import { newE2EPage } from '@stencil/core/testing';

describe('pd-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-alert></pd-alert>');

    const element = await page.find('pd-alert');
    expect(element).toHaveClass('hydrated');
  });
});
