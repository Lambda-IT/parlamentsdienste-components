import { newE2EPage } from '@stencil/core/testing';

describe('pd-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-row></pd-row>');

    const element = await page.find('pd-row');
    expect(element).toHaveClass('hydrated');
  });
});
