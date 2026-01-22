import { expect, test} from '@playwright/test';

test.only('new user register1', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  //await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
  await page.locator('a[href="register.htm"]').click();
    await page.locator('input[name="customer.firstName"]').fill('Puja');
    await page.locator('input[name="customer.lastName"]').fill('Kumari');
    await page.locator('input[name="customer.address.street"]').fill('Moradabad,244001');
    await page.locator('input[name="customer.address.city"]').fill('Moradabad');
    await page.locator('input[name="customer.address.state"]').fill('Uttar Pradesh');
    await page.locator('input[name="customer.address.zipCode"]').fill('244001');
    await page.locator('input[name="customer.phoneNumber"]').fill('9661070184');
    await page.locator('input[name="customer.ssn"]').fill('abc');
    await page.locator('input[name="customer.username"]').fill('pujamehta9661');
    await page.locator('input[name="customer.password"]').fill('puja@7722');
    await page.locator('input[name="repeatedPassword"]').fill('puja@7722');
    await page.locator('input[value="Register"]').click();

    //await page.locator('input[name="username"]').fill('pujamehta9661');


    //await page.pause();

})



