import { expect, test } from '@playwright/test';

test.only('verify user registration', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator("a[href='register.htm']").click();
  let fields = page.locator('#customerForm tr input');
  await fields.nth(0).fill("Nirmal");
  await fields.nth(1).fill("Mehra");
  await fields.nth(2).fill("Motihari");
  await fields.nth(3).fill("Champaran");
  await fields.nth(4).fill("Bihar");
  await fields.nth(5).fill("12311185");
  await fields.nth(6).fill("7856890680");
  await fields.nth(7).fill("12468732");
  await fields.nth(8).fill("Nir@256");

  await fields.nth(9).fill("Nir@123");
  await fields.nth(10).fill("Nir@123");


  await page.locator("input[value='Register']").click();
  

})