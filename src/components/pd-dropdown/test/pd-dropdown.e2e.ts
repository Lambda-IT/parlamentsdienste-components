import { newE2EPage } from '@stencil/core/testing';

describe('pd-dropdown', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<pd-dropdown></pd-dropdown>');

        const element = await page.find('pd-dropdown');
        expect(element).toHaveClass('hydrated');
    });

    it('opens dropdown', async () => {
        const page = await newE2EPage();
        await page.setContent(`<pd-dropdown></pd-dropdown>`);

        const element = await page.find('pd-dropdown');
        element.setProperty('items', ['item1', 'item2']);
        await page.waitForChanges();

        const button = await page.find('pd-dropdown >>> .pd-dropdown-button');
        const menu = await page.find('pd-dropdown >>> .pd-dropdown-menu');

        expect(button).not.toBeNull();
        expect(menu).not.toBeNull();

        expect(await button.isVisible()).toBeTruthy();
        expect(await menu.isVisible()).toBeFalsy();

        await button.click();

        expect(await menu.isVisible()).toBeTruthy();

        let dropdownItems = await page.findAll('pd-dropdown >>> pd-dropdown-item');
        expect(dropdownItems.length).toBe(2);
    });

    it('adds empty item', async () => {
        const page = await newE2EPage();
        await page.setContent(`<pd-dropdown></pd-dropdown>`);

        const element = await page.find('pd-dropdown');

        const button = await page.find('pd-dropdown >>> .pd-dropdown-button');
        const menu = await page.find('pd-dropdown >>> .pd-dropdown-menu');

        expect(await menu.isVisible()).toBeFalsy();
        await button.click();
        expect(await menu.isVisible()).toBeTruthy();

        let dropdownItems = await page.findAll('pd-dropdown >>> pd-dropdown-item');
        expect(dropdownItems.length).toBe(0);

        element.setProperty('emptyItem', true);
        await page.waitForChanges();

        dropdownItems = await page.findAll('pd-dropdown >>> pd-dropdown-item');
        expect(dropdownItems.length).toBe(1);
    });

    it('should trigger change event', async () => {
        const page = await newE2EPage();
        await page.setContent(`<pd-dropdown></pd-dropdown>`);

        const changeEventSpy = await page.spyOnEvent('pd-change', 'window');

        const element = await page.find('pd-dropdown');
        element.setProperty('items', [
            { id: '0', label: 'item0', value: 'item0' },
            { id: '1', label: 'item1', value: 'item1' },
        ]);
        await page.waitForChanges();

        const button = await page.find('pd-dropdown >>> .pd-dropdown-button');
        await button.click();

        let dropdownItems = await page.findAll('pd-dropdown >>> pd-dropdown-item');
        const item1 = dropdownItems[1]; // pick item1
        await item1.click();

        expect(changeEventSpy).toHaveReceivedEventDetail({ id: '1', label: 'item1', value: 'item1' });
    });
});
