import { test, expect } from '@playwright/test';


test.skip("get session info", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.pause();
    await context.storageState({ path: 'auth/flipkart_auth.json' });
})

test.only("cookies and session", async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'auth/flipkart_auth.json' });
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    // await page.pause();

    //steps
    await page.getByRole('link', { name: 'My Profile My Profile' }).click();
    await page.getByRole('link', { name: 'Profile Information' }).click();
    await page.locator('span').filter({ hasText: 'Edit' }).click();
    await page.locator('input[name="firstName"]').clear();
    await page.locator('input[name="firstName"]').fill('Ajay');
    await page.locator('input[name="lastName"]').clear();
    await page.locator('input[name="lastName"]').fill('Kumar');
    await page.getByRole('button', { name: 'SAVE' }).click();
})

