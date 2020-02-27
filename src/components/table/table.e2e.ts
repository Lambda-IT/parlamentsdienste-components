import { newE2EPage } from '@stencil/core/testing';

describe('pd-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-table></pd-table>');

    const element = await page.find('pd-table');
    expect(element).toHaveClass('hydrated');
  });
});
