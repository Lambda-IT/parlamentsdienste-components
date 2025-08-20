import { expect, test } from '@playwright/test';

test('pd-input', async ({ page }) => {
    await page.goto('/');
    const input = await page.locator('[data-test="pd-input"] input');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await input.fill('Playwright test value');
    await page.waitForTimeout(500);

    const state = formState as { input: string };
    expect(state.input).toBe('Playwright test value');
});

test('pd-dropdown', async ({ page }) => {
    await page.goto('/');
    const dropdown = await page.locator('[data-test="pd-dropdown"] button');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await dropdown.click();
    const option = await page.locator('pd-dropdown-item').nth(2); // Select second item
    await option.click();
    await page.waitForTimeout(500);

    const state = formState as { dropdown: { label: string } };
    expect(state.dropdown.label).toBe('Pa.Iv. Semadeni. Fakultatives');
});

test('pd-combobox selectable', async ({ page }) => {
    await page.goto('/');
    const combobox = await page.locator('[data-test="pd-combobox-selectable"] input');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await combobox.fill('Mitt');
    await page.waitForTimeout(500);
    const option = await page.locator('[data-test="pd-combobox-selectable"] pd-dropdown-item').nth(0); // Select first item
    await option.click();
    await page.waitForTimeout(500);

    const state = formState as { comboboxSelectable: { label: string } };
    expect(state.comboboxSelectable.label).toBe('Mitteilungen und Verschiedenes');
});

test('pd-combobox multiselect', async ({ page }) => {
    await page.goto('/');
    const combobox = await page.locator('[data-test="pd-combobox-multiselect"] [data-test="pd-combobox-input"]');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await combobox.click();
    const option1 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(1); // deselect first item
    const option2 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(3); // select third item
    const option3 = await page.locator('[data-test="pd-combobox-multiselect"] pd-dropdown-item').nth(4); // select fourth item
    await option1.click();
    await option2.click();
    await option3.click();
    await page.waitForTimeout(500);

    const state = formState as { comboboxMultiselect: Array<{ label: string }> };
    expect(Array.isArray(state.comboboxMultiselect)).toBe(true);
    expect(state.comboboxMultiselect.length).toBeGreaterThanOrEqual(2);
    expect(state.comboboxMultiselect[0].label).toBe('Pa.Iv. Semadeni. Fakultatives');
    expect(state.comboboxMultiselect[1].label).toBe('Obligatorisches');
    expect(state.comboboxMultiselect[2].label).toBe('Anfrage');
});

test('pd-datepicker', async ({ page }) => {
    await page.goto('/');
    const dateInput = await page.locator('[data-test="pd-datepicker"] [data-test="pd-datepicker-input"]');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await dateInput.click();
    await page.waitForTimeout(500);
    const day = await page.locator('.flatpickr-day[aria-label="July 16, 2025"]');
    await day.click();
    await page.waitForTimeout(500);

    const state = formState as { date: string };
    expect(state.date).toBe('2025-07-16');
});

test('pd-checkbox', async ({ page }) => {
    await page.goto('/');
    const checkbox = await page.locator('[data-test="pd-checkbox"]');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await checkbox.click();
    await page.waitForTimeout(200);
    const stateCheckboxFalse = formState as { checkbox: boolean };
    expect(stateCheckboxFalse.checkbox).toBe(false);
    await checkbox.click();
    await page.waitForTimeout(200);
    const stateCheckboxTrue = formState as { checkbox: boolean };
    expect(stateCheckboxTrue.checkbox).toBe(true);
});

test('pd-radio-group', async ({ page }) => {
    await page.goto('/');
    const radio1 = await page.locator('[data-test="pd-radio-1"]');
    const radio2 = await page.locator('[data-test="pd-radio-2"]');
    const radio3 = await page.locator('[data-test="pd-radio-3"]');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await radio1.click();
    await page.waitForTimeout(200);
    const stateRadio1 = formState as { radio: string };
    expect(stateRadio1.radio).toBe('1');
    await radio2.click();
    await page.waitForTimeout(200);
    const stateRadio2 = formState as { radio: string };
    expect(stateRadio2.radio).toBe('2');
    await radio3.click();
    await page.waitForTimeout(200);
    const stateRadio3 = formState as { radio: string };
    expect(stateRadio3.radio).toBe('3');
});

test('pd-slider', async ({ page }) => {
    await page.goto('/');
    const slider = await page.locator('[data-test="pd-slider"] input[type="range"]');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await slider.fill('70');
    await page.waitForTimeout(200);
    const stateSlider70 = formState as { slider: number };
    expect(stateSlider70.slider).toBe(70);
    await slider.fill('30');
    await page.waitForTimeout(200);
    const stateSlider30 = formState as { slider: number };
    expect(stateSlider30.slider).toBe(30);
});

test('pd-textarea', async ({ page }) => {
    await page.goto('/');
    const textarea = await page.locator('[data-test="pd-textarea"] textarea');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await textarea.fill('Playwright textarea value');
    await page.waitForTimeout(200);
    const stateTextarea1 = formState as { textarea: string };
    expect(stateTextarea1.textarea).toBe('Playwright textarea value');
    await textarea.fill('Another value');
    await page.waitForTimeout(200);
    const stateTextarea2 = formState as { textarea: string };
    expect(stateTextarea2.textarea).toBe('Another value');
});

test('pd-button', async ({ page }) => {
    await page.goto('/');
    const button = await page.locator('[data-test="pd-button"]');

    let formState: unknown = null;

    page.on('console', async msg => {
        if (msg.type() === 'log' && msg.text().startsWith('App component rendered with formState:')) {
            const valueHandle = msg.args()[1];
            formState = await valueHandle.jsonValue();
        }
    });

    await button.click();
    await page.waitForTimeout(500);
    const state = formState as { input: string };
    expect(state.input).toBe('');
});
