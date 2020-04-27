import { newE2EPage } from '@stencil/core/testing';

describe('pd-breadcrumbs', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-breadcrumbs></pd-breadcrumbs>');

        const element = await page.find('pd-breadcrumbs');
        expect(element).toHaveClass('hydrated');
    });
});
