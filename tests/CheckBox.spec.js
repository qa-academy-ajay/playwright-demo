import { test, expect } from '@playwright/test';

test("how to handle checkboxes", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.irctc.co.in/nget/train-search');
    await page.locator('[class$="later"]').click();

    await page.getByRole('button', { name: 'Confirmation' }).click();
    page.locator('[for="dateSpecific"]').check();
    await expect(page.locator('[for="dateSpecific"]')).toBeChecked();
    await page.locator('[for="dateSpecific"]').uncheck();
    await expect(page.locator('[for="dateSpecific"]')).not.toBeChecked();
    await page.locator('[for="dateSpecific"]').setChecked(true);
    await expect(page.locator('[for="dateSpecific"]')).toBeChecked();
    await page.locator('[for="dateSpecific"]').setChecked(false);
    await expect(page.locator('[for="dateSpecific"]')).not.toBeChecked();
    await page.locator('[for="dateSpecific"]').waitFor({ state: 'attached' });
    await page.locator('[for="dateSpecific"]').check();
    await expect(page.locator('[for="dateSpecific"]')).toBeChecked();
    await page.locator('[for="dateSpecific"]').click();
    await expect(page.locator('[for="dateSpecific"]')).not.toBeChecked();
    expect(await page.locator('[for="dateSpecific"]').isChecked()).toBeFalsy();
    // expect(page.locator('[for="dateSpecific"]').isChecked()).toBeTruthy();
    // expect(page.locator('[for="dateSpecific"]').isDisabled()).toBeTruthy();
    // expect(page.locator('[for="dateSpecific"]').isDisabled()).toBeFalsy();
    // expect(page.locator('[for="dateSpecific"]').isVisible()).toBeTruthy();
    // expect(page.locator('[for="dateSpecific"]').isVisible()).toBeFalsy();
    // expect(page.locator('[for="dateSpecific"]').isEnabled()).toBeTruthy();
    // expect(page.locator('[for="dateSpecific"]').isEnabled()).toBeFalsy();
    // expect(page.locator('[for="dateSpecific"]').isHidden()).toBeTruthy();
    // expect(page.locator('[for="dateSpecific"]').isHidden()).toBeFalsy();
})


