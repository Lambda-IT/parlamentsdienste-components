import { newE2EPage } from '@stencil/core/testing';

describe('pd-input', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-input></pd-input>');

        const element = await page.find('pd-input');
        expect(element).toHaveClass('hydrated');
    });
});
