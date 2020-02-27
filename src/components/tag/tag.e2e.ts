import { newE2EPage } from '@stencil/core/testing';

describe('pd-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-tag></pd-tag>');

    const element = await page.find('pd-tag');
    expect(element).toHaveClass('hydrated');
  });
});
