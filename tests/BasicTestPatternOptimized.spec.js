import { expect, test } from '@playwright/test';
import { LoginPage } from '../pageobject/LoginPage';
import { ProductPage } from '../pageobject/ProductPage';
import { CheckoutPage } from '../pageobject/CheckoutPage';


test("Verify user is able to order any product successfuly", async ({ page }) => {
    const username = "ajaykr.mailbox@gmail.com";
    const password = "Automation@123";
    const product_name = "iphone 13 pro";
    const country = 'India'

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);


    await loginPage.launchApplication('https://rahulshettyacademy.com/client/#/auth/login')
    await loginPage.userLogin(username, password);
    let price = await productPage.addProduct(product_name);
    await productPage.navigateToCheckout();

    expect(await page.locator('.totalRow:nth-child(2) .value').textContent()).toEqual(price)//$55000
    await checkoutPage.checkoutOrder(country)
    // await page.locator('.totalRow:nth-child(3) button').click();


    

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    let orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();


    orderid = orderid.replaceAll("|", " ");
    await page.click("label[routerlink*='myorders']");
    const row = page.locator("tr.ng-star-inserted");
    await row.first().waitFor();
    for (let i = 0; i < await row.count(); i++) {
        let order = await row.nth(i).locator("th").textContent();
        if (order === orderid.replace("|", "").trim()) {
            await row.nth(i).locator(".btn-primary").click();
            break;
        }
    }
    await expect(page.locator("div.col-text.-main")).toHaveText(orderid);

})







