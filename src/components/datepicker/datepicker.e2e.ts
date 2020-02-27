import { newE2EPage } from '@stencil/core/testing';

describe('pd-datepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pd-datepicker></pd-datepicker>');

    const element = await page.find('pd-datepicker');
    expect(element).toHaveClass('hydrated');
  });
});
