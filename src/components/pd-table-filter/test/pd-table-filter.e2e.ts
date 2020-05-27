import { newE2EPage } from '@stencil/core/testing';

describe('pd-table-filter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-table-filter></pd-table-filter>');

    const element = await page.find('pd-table-filter');
    expect(element).toHaveClass('hydrated');
  });
});
