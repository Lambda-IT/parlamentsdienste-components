import { newE2EPage } from '@stencil/core/testing';

describe('pd-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-list></pd-list>');

    const element = await page.find('pd-list');
    expect(element).toHaveClass('hydrated');
  });
});
