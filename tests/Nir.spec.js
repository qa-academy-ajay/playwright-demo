import { test, expect } from '@playwright/test';

test.only('verify user registration', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm', {
    waitUntil: 'domcontentloaded'
  });

  await page.locator("a[href='register.htm']").click();

  const values = [
    "Nirmal",
    "Mehra",
    "Motihari",
    "Champaran",
    "Bihar",
    "12311185",
    "7856890680",
    "12468732",
    "Nir@256",
    "Nir@123",
    "Nir@123"
  ];

  const fields = page.locator('#customerForm input');

  for (let i = 0; i < values.length; i++) {
    await fields.nth(i).fill(values[i]);
  }

  await page.locator("input[value='Register']").click();

  await expect(page.locator('#rightPanel')).toBeVisible();
});
