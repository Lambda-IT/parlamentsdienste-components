import { expect, test } from '@playwright/test';

test('pd-input', async ({ page }) => {
    await page.goto('/');
    const input = await page.locator('[data-test="pd-input"] input');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            // msg.args()[1] is the actual object logged
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    await input.fill('Playwright test value');
    await page.waitForTimeout(500);

    expect(formValue.input).toBe('Playwright test value');
});

test('pd-dropdown', async ({ page }) => {
    await page.goto('/');
    const dropdown = await page.locator('[data-test="pd-dropdown"] button');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    // Open dropdown and select a new item
    await dropdown.click();
    await page.waitForTimeout(500);

    const option = await page.locator('pd-dropdown-item').nth(2); // Select second item
    await option.click();
    await page.waitForTimeout(500);

    expect(formValue.dropdown.label).toBe('Pa.Iv. Semadeni. Fakultatives');
});

test('pd-combobox selectable', async ({ page }) => {
    await page.goto('/');
    const combobox = await page.locator('[data-test="pd-combobox-selectable"] input');

    let formValue: any = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('Form value changed:')) {
            const valueHandle = msg.args()[1];
            formValue = await valueHandle.jsonValue();
        }
    });

    await combobox.fill('Mitt');
    await page.waitForTimeout(500);

    const option = await page.locator('[data-test="pd-combobox-selectable"] pd-dropdown-item').nth(0); // Select first item
    await option.click();
    await page.waitForTimeout(500);

    expect(formValue.comboboxSelectable.label).toBe('Mitteilungen und Verschiedenes');
});
