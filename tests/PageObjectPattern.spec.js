import { test, expect } from '@playwright/test';
import {PageObjectManager} from '../pageobject/PageObjectManager';

test("Verify user is able to complete new registration", async ({ page }) => {
    const PageObjManager = new PageObjectManager(page);
    await PageObjManager.getRegistrationPage().launchApplication('https://rahulshettyacademy.com/client/#/auth/register');
    await PageObjManager.getRegistrationPage().fillRegitrationForm();
    await expect(page.locator('h1.headcolor')).toHaveText("Account Created Successfully");
})

// test("POM - Verify user is able to order any product successfuly", async ({ page }) => {
//     // const pageObjManager = new PageObjManager(page);
//     // const username = "ajaykr.mailbox@gmail.com";
//     // const password = "Automation@123";
//     // const productName = "ZARA COAT 3"

//     // await pageObjManager.getLoginPage().launchApplication();
//     // await pageObjManager.getLoginPage().userLogin(username, password);

//     // await pageObjManager.getDashboardPage().addProduct(productName);
//     // await pageObjManager.getDashboardPage().navigateToCart();

//     // await page.locator(".cart h3").first().waitFor();
//     // const order_present = await page.locator(`h3:has-text('${productName}')`).isVisible();
//     // console.log(order_present);
//     // expect(order_present).toBeTruthy();
//     // await page.click("li button.btn-primary[type='button']");
//     // await expect(page.locator(".user__name label")).toHaveText(usrname);
//     // await page.locator("[placeholder='Select Country']").pressSequentially("Ind");
//     // const country = page.locator("button.ta-item");
//     // await country.first().waitFor();
//     // for (let i = 0; i < await country.count(); i++) {
//     //     let countryName = await country.nth(i).textContent();
//     //     if (countryName.trim() === "India") {
//     //         await country.nth(i).click();
//     //         break;
//     //     }
//     // }
//     // await page.click(".action__submit");

//     // await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
//     // let orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
//     // orderid = orderid.replaceAll("|", " ");
//     // console.log(orderid);
//     // await page.click("label[routerlink*='myorders']");
//     // const row = page.locator("tr.ng-star-inserted");
//     // await row.first().waitFor();
//     // for (let i = 0; i < await row.count(); i++) {
//     //     let order = await row.nth(i).locator("th").textContent();
//     //     if (order === orderid.replace("|", "").trim()) {
//     //         await row.nth(i).locator(".btn-primary").click();
//     //         break;
//     //     }
//     // }
//     // await expect(page.locator("div.col-text.-main")).toHaveText(orderid);

// })

