import { newE2EPage } from '@stencil/core/testing';

describe('pd-textarea', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-textarea></pd-textarea>');

        const element = await page.find('pd-textarea');
        expect(element).toHaveClass('hydrated');
    });
});
