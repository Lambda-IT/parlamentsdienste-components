import { newE2EPage } from '@stencil/core/testing';

describe('pd-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-radio-group></pd-radio-group>');

    const element = await page.find('pd-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
