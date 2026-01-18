import { expect, test } from '@playwright/test';

async function login(username, password){
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");//navigate to URL
    await page.pause();//pause execution and start playwright debugger
    await page.locator("#username").fill("ajaykumar");//enter username in text box
    await page.locator("#username").fill('');//enter nothing to clear existing value from text box
    await page.locator("#username").fill(username);//enter text to textbox
    await page.fill("#password", password);//enter text to textbox
    await page.locator('//select').selectOption("teach");// Single selection matching the value or label
    await page.locator('#terms').check();//Check the checkbox
    await expect(page.locator('#terms')).toBeChecked();//verify if checkbox checked
    await page.locator('#terms').uncheck();//uncheck the checkbox
    await expect(page.locator('#terms')).not.toBeChecked();//verify if checkbox checked
    await page.click('#signInBtn');//click on button
}
test.only("Test 01", async ({ browser }) => {
    let context = await browser.newContext();//create browser context without any cookies/session information
    let page = await context.newPage();//create new page
    login("rahulshettyacademy", "learning");
     login("rahulshettyacademy1", "learning1");
      login("rahulshettyacademy3", "learning3");
    await expect(page).toHaveTitle("ProtoCommerce");//verify page title

})



test.only("Test 02", async ({ browser }) => {
    let context = await browser.newContext();//create browser context without any cookies/session information
    let page = await context.newPage();//create new page
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");//navigate to URL
    await page.getByRole('textbox', { name: "username" }).fill("rahulshettyacademy");
    await page.pause();
    await page.locator("#username").fill("rahulshettyacademy");//enter text to textbox
    await page.fill("#password", "learning");//enter text to textbox
    await page.locator('select.form-control').selectOption("Teacher");// Single selection matching the value or label
    await page.locator('#terms').check();//Check the checkbox
    await expect(page.locator('#terms')).toBeChecked();//verify if checkbox checked
    await page.click('#signInBtn');//click on button
    // await page.waitForEvent('domcontentloaded');
    let products = page.locator(".card-title a");
    await products.first().waitFor();

    // using :has() – Parent Selector
    // let addBtns = page.locator("div.card:has(.card-title a) button");
    // for (let i = 0; i < await products.count(); i++) {
    //     if (await products.nth(i).allInnerTexts() == "iphone X") {
    //         await addBtns.nth(i).click({clickCount: 2});
    //         break;
    //     }
    // }

    // using playwright filter method
    let addBtns = page.locator("div.card").filter({ hasText: "iphone X" }).locator("button");
    await addBtns.click({ clickCount: 2 });
    await page.locator("a.btn-primary").click();
    await page.pause()

    let count = await page.locator("#exampleInputEmail1").inputValue();
    console.log(count);


})


test("order place", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const username = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const loginBtn = page.locator("input.login-btn");

    await username.fill("ajaykr.mailbox@gmail.com");
    await password.fill("Automation@123");
    await loginBtn.click();

    const card_body = page.locator(".card-body");
    await card_body.first().waitFor();
    let price;
    for (let i = 0; i < await card_body.count(); i++) {
        if (await card_body.locator("b").nth(i).textContent() == "iphone 13 pro") {
            price = await card_body.nth(i).locator(".text-muted").textContent();
            await card_body.nth(i).locator("text= Add To Cart").click();
        }
    }
    await page.waitForLoadState('networkidle');
    await page.click("[routerlink*='cart']")
    
    await page.pause();

})


//actions: navigation, element selection, wait, element state, extract element text, assertion, 
//click, hover, drag-drop, mouse action, input, keyboard, element interaction, file upload-download, 
//Alert / Prompt / Confirmation Dialogs, Screenshots
// https://total-qa.com/selenium-webdriver/demo-sites/
//https://demo.guru99.com/
//https://demoqa.com/
// https://www.letskodeit.com/practice
//
//






