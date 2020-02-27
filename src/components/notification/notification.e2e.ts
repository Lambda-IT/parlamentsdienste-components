import { newE2EPage } from '@stencil/core/testing';

describe('pd-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-notification></pd-notification>');

    const element = await page.find('pd-notification');
    expect(element).toHaveClass('hydrated');
  });
});
