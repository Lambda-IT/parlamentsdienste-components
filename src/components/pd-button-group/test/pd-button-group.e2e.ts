import { newE2EPage } from '@stencil/core/testing';

describe('pd-button-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-button-group></pd-button-group>');

    const element = await page.find('pd-button-group');
    expect(element).toHaveClass('hydrated');
  });
});
