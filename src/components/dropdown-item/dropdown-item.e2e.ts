import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-item></dropdown-item>');

    const element = await page.find('dropdown-item');
    expect(element).toHaveClass('hydrated');
  });
});
