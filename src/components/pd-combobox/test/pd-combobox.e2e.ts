import { newE2EPage } from '@stencil/core/testing';

describe('pd-combobox', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-combobox></pd-combobox>');

        const element = await page.find('pd-combobox');
        expect(element).toHaveClass('hydrated');
    });
});
