import { newE2EPage } from '@stencil/core/testing';

describe('pd-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-column></pd-column>');

    const element = await page.find('pd-column');
    expect(element).toHaveClass('hydrated');
  });
});
