import { newE2EPage } from '@stencil/core/testing';

describe('pd-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-dropdown></pd-dropdown>');

    const element = await page.find('pd-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
