import { expect, test } from '@playwright/test';

test("how to using browser fixture", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    let title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});

test("how to using page fixture", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    let title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});


test("how to perform basic ui actions", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")//navigate to url
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");//verifying page title

    //textbox
    await page.locator("#username").fill("username");//providing correct username 
    await page.locator("[name='password']").fill("password");//providing incorrect password
    await page.locator("[value='Sign In']").click();//click action performed
    await expect(page.locator("[style*='block']")).toHaveText("Incorrect username/password.")//full text validation
    // await expect(page.locator("[style*='block']")).toContainText("Incorrect");//partial text validation
    const username = await page.locator('p b i').nth(0).textContent();
    const password = await page.locator('p b i').nth(1).textContent();
    await page.locator("#username").fill(username);//providing correct username 
    await page.locator("[name='password']").fill(password);//providing correct password

    //radio button
    await expect(page.locator("[value='admin']")).toBeChecked();
    await page.check("[value='user']");
    await page.click("#okayBtn");
    await expect(page.locator("[value='user']")).toBeChecked();
    await page.locator('.radiotextsty:has-text("Admin")').click();//filtering locator based on text

    //dropdown
    await page.locator("select.form-control").selectOption("Teacher");
    await page.locator("select.form-control").selectOption("consult");
    await page.locator("select.form-control").selectOption({ label: "Student" });
    await page.locator("select.form-control").selectOption({ value: "teach" });

    //checkbox
    await page.locator('#terms').check();
    await expect(page.locator("#terms")).toBeChecked();
    await page.uncheck("#terms");
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(page.locator("#terms")).not.toBeChecked();
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class', 'blinkingText')

    await page.locator("[value='Sign In']").click();//click action performed
    await expect(page).toHaveTitle("ProtoCommerce");
});

test("how to deal with list of elements", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    const username = page.locator("#username");
    const password = page.locator("[name='password']");
    const dropdowns = page.locator("select.form-control");
    const radioBtn = page.locator("[value='user']");
    const signBtn = page.locator("[value='Sign In']");
    await username.fill("rahulshettyacademy");
    await password.fill("learning");
    await expect(radioBtn).toBeChecked();
    await dropdowns.selectOption("Teacher");
    await signBtn.click();
    const products = page.locator(".card-body a");
    console.log(await products.first().textContent());
    console.log(await products.nth(1).textContent());
    console.log(await products.last().textContent());
    await products.first().waitFor("attached");//wait for element to be attached to dom
    console.log(await products.allTextContents());
});

test.only("how to handle child window", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const [documents_request_page] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.locator("[href*='documents-request']").click()
        ]
    )

    let text = await documents_request_page.textContent("p.red");
    console.log(text);
    let textArray = text.split("@");
    let usernameText = textArray[1].split(" ")[0];

    await page.locator("#username").fill(usernameText);
    console.log(await page.locator("#username").inputValue());

});

test("how to use wait mechanism", async ({ page }) => {
    // await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // const username = page.locator("#userEmail");
    // const password = page.locator("#userPassword");
    // const loginBtn = page.locator("input.login-btn");

    // await username.fill("ajaykr.mailbox@gmail.com");
    // await password.fill("Automation@123");
    // await loginBtn.click();

    // // await page.waitForLoadState('networkidle');//not recomended
    // await page.locator(".card-body b").first().waitFor();
    // const productTitles = page.locator(".card-body b");
    // console.log(await productTitles.allTextContents());

    // await page.screenshot({ path: `${test.info().title}.png` });//capture screenshot


    await page.goto("https://www.irctc.co.in/");
    await page.locator('[class$="later"]').click();
    await page.getByRole('button', { name: 'Confirmation' }).click();
    await page.locator('#origin input').pressSequentially("Delhi");
    await page.locator('[role="option"] span:has-text(" NEW DELHI - NDLS (NEW DELHI)")').click();
    await page.locator('#destination input').pressSequentially("Patna");
    await page.locator('[role="option"] span:has-text(" PATNA JN - PNBE BIHAR")').click();
    await page.locator('.ui-calendar input').fill("27/03/2026");

    //27/03/2026
    // await page.locator('.ui-calendar input').click();
    // const month = "March";
    // let month_found = false;
    // while (!month_found) {
    //     await page.locator('.ui-datepicker-next').click();
    //     if (month == await page.locator('.ui-datepicker-month').textContent()) {
    //         month_found = true;
    //         break
    //     }
    // }
    // const days = page.locator('.ui-datepicker-calendar tr td a');
    // for(let i = 0; i<days.count(); i++){
    //     if(days.nth(i)=="27"){
    //         days.nth(i).click()
    //         break;
    //     }
    // }
    // await page.locator('.ui-calendar input').click();
    // await page.locator('.ui-datepicker-calendar tr td a:has-text("26")').click();
    await page.locator('#journeyClass .ui-dropdown').click();
    await page.getByRole('option', { name: "AC First Class (1A) " }).click();
    await page.locator('#journeyQuota [role="button"]').click();
    await page.getByRole('option', { name: 'TATKAL', exact: true }).click();
    await page.pause()

});


test.only("how to use wait mechanism irctc", async ({ page }) => {
    await page.goto("https://www.irctc.co.in/");
    await page.locator('[class$="later"]').click();

    //[aria-label^="Confirmation"]
    // await page.locator('[aria-label^="Confirmation"]').click();
    await page.getByRole('button', { name: 'Confirmation' }).click();//getByRole()

    await page.locator('#origin input').pressSequentially("Delhi");
    // await page.locator('#origin input').fill("Delhi");

    await page.locator('[role="option"]>span:has-text(" NEW DELHI - NDLS (NEW DELHI)")').click();//how to use has-text
    await page.locator('#destination input').pressSequentially("Patna");
    await page.locator('[role="option"] span:has-text(" PATNA JN - PNBE BIHAR")').click();


    // // await page.locator('.ui-calendar input').fill("27/03/2026");

    // //27/03/2026
    await page.locator('.ui-calendar input').click();

    const month = "March";

    let month_found = false;
    while (!month_found) {
        await page.locator('.ui-datepicker-next').click();
        if (month == await page.locator('.ui-datepicker-month').textContent()) {
            month_found = true;
        }
    }

    // const days = page.locator('.ui-datepicker-calendar a');
    // for(let i = 0; i<await days.count(); i++){
    //     if(await days.nth(i).textContent()=="28"){//how to use index
    //         await days.nth(i).click()
    //         break;
    //     }
    // }

    await page.locator('.ui-datepicker-calendar a:has-text("26")').click();


    // let jclass = ['All Classes', 'Anubhuti Class (EA)', 'AC First Class (1A) ',];
    let jclass = 'AC First Class (1A) ';
    await page.locator('#journeyClass .ui-dropdown').click();
    await page.getByRole('option', { name: `${jclass}` }).click();//getByRole(), how to use variable

    // for (let i = 0; i < jclass.length; i++) {
    //     await page.locator('#journeyClass .ui-dropdown').click();
    //     await page.getByRole('option', { name: `${jclass[i]}` }).click();//getByRole(), how to use variable

    // }

    const journeyQuota = page.locator('#journeyQuota [role="button"]');
    const category = page.getByRole('option', { name: 'LADIES', exact: true });

    
    await journeyQuota.click();
    await category.click();
    // await page.pause()

});







