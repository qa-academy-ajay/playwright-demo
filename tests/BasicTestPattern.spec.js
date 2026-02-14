import { expect, test } from '@playwright/test';

test("how to use browser fixture", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.screenshot({path: 'screenshot/image.png'})
    await page.locator("#username").screenshot({path: 'usernmae.png'});

    let title = await page.title();
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});

test("how to use page fixture", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    let title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});

test("how to perform basic ui actions-1", async ({ page }) => {
    await page.goto("https://www.irctc.co.in/");
    await page.locator('[class$="later"]').click();
    // await page.locator('[aria-label^="Confirmation"]').click();
    await page.getByRole('button', { name: 'Confirmation' }).click();//getByRole()
    await page.locator('#origin input').pressSequentially("Delhi");
    // await page.locator('#origin input').fill("Delhi");
    await page.locator('[role="option"]>span:has-text(" NEW DELHI - NDLS (NEW DELHI)")').click();//how to use has-text
    await page.locator('#destination input').pressSequentially("Patna");

    console.log(await page.locator('[role="option"]>span').allTextContents());
    await page.locator('[role="option"]>span:has-text(" PATNA JN - PNBE BIHAR")').click();
    await page.locator('.ui-calendar input').fill("27/03/2026");
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
    // for (let i = 0; i < await days.count(); i++) {
    //     if (await days.nth(i).textContent() == "28") {//how to use index
    //         await days.nth(i).click()
    //         break;
    //     }
    // }

    //OR

    await page.locator('.ui-datepicker-calendar a:has-text("26")').click();
    await page.locator('#journeyClass .ui-dropdown').click();
    let jclass = 'First Class (FC)';
    await page.getByRole('option', { name: `${jclass}` }).click();//getByRole(), how to use variable
    const journeyQuota = page.locator('#journeyQuota [role="button"]');
    const category = page.getByRole('option', { name: 'LADIES', exact: true });
    await journeyQuota.click();
    await category.click();
    await page.pause()

});

test("how to perform basic ui actions-2", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")//navigate to url
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");//verifying page title

    //textbox
    await page.locator("#username").fill("username");//providing correct username 
    await page.locator("[name='password']").fill("password");//providing incorrect password
    await page.locator("[name='password']").clear();//providing incorrect password
    await page.locator("[name='password']").fill("password");//providing incorrect password
    await page.locator("[value='Sign In']").click();//click action performed
    await expect(page.locator("[style*='block']")).toHaveText("Incorrect username/password.")//full text validation
    // await expect(page.locator("[style*='block']")).toContainText("Incorrect");//partial text validation
    const username = await page.locator('p b i').nth(0).textContent();
    const password = await page.locator('p b i').nth(1).textContent();
    await page.locator("#username").fill(username);//providing correct username 
    await page.locator("[name='password']").fill(password);//providing correct password

    await page.locator('.card-body:has-text("iphone 13 pro")').locator('i:has-text(" Add To Cart")');
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

test("how to handle child window", async ({ browser }) => {
    const browser_context = await browser.newContext();
    const page1 = await browser_context.newPage();
    await page1.goto("https://rahulshettyacademy.com/loginpagePractise/");

    let new_page_promis = browser_context.waitForEvent('page');
    await page1.locator("[href*='documents-request']").click()
    const page2 = await new_page_promis;

    // const [new_page] = await Promise.all(
    //     [
    //         browser_context.waitForEvent('page'),
    //         await page1.locator("[href*='documents-request']").click()
    //     ]
    // )

    let text = await page2.locator('p.red').textContent();
    console.log(text);

    let textArray = text.split("@");
    let usernameText = textArray[1].split(" ")[0];

    await page1.locator("#username").fill(usernameText);
    console.log(await page1.locator("#username").inputValue());

});

test("special locators in playwright", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Student").check();
    await page.getByLabel("Gender").selectOption("Female");

    await page.getByPlaceholder("Password").fill("username");

    await page.getByRole('button', { name: "Submit" }).click();

    expect(await page.getByText("Success! The Form has been submitted successfully!.").isVisible()).toBeTruthy();

    await page.getByRole('link', { name: "Shop" }).click();

    await page.waitForLoadState('domcontentloaded');
    await page.locator("app-card").filter({ hasText: "Nokia Edge" }).getByRole("button").click();
    await page.pause();
})

test("Verify user is able to complete new registration", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/register');
    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const userEmail = page.locator('#userEmail');
    const userMobile = page.locator('#userMobile');
    const occupation = page.locator('.custom-select');
    await firstName.fill("QA Academy");
    await lastName.fill("Ajay Kumar")
    await userEmail.fill("qaacademyajay+1@gmail.com");
    await userMobile.fill("4375867364");
    await occupation.selectOption("Student");
    await page.selectOption('.custom-select', "Student")
    // await page.locator('[value="Male"]').check();
    await page.locator('#userPassword').fill("Password@123");
    await page.locator('#confirmPassword').fill("Password@123");
    await page.locator('[type="checkbox"]').check();
    await page.locator('#login').click();
    await expect(page.locator('h1.headcolor')).toHaveText("Account Created Successfully");
})

test("Verify same user gets error msg while trying to register multiple time", async ({ page }) => {

}

)

const obj = {
    username: "ajaykr.mailbox@gmail.com",
    password: "Automation@123",
    product_name: "iphone 13 pro"
}

test("Verify user is able to order any product successfuly", async ({ page }) => {
    const username = "ajaykr.mailbox@gmail.com";
    const password = "Automation@123";
    const product_name = "iphone 13 pro";
    let price = "";
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('#userEmail').fill(obj.username);
    await page.locator('#userPassword').fill(obj.password);
    await page.locator('#login').click();

    const card_body = page.locator('div.card-body');

    card_body.locator('b:has-text()')
    await card_body.first().waitFor({ state: 'attached' });

    for (let i = 0; i < await card_body.count(); i++) {
        if (await card_body.nth(i).locator('b').textContent() == obj.product_name) {
            price = await card_body.nth(i).locator('.text-muted').textContent();//$ 55000
            price = price.replaceAll(" ", "");//$55000
            await card_body.nth(i).locator('button:has-text("Cart")').click();
        }
    }


    await page.locator('[routerlink$="cart"]').click();
    expect(await page.locator('.totalRow:nth-child(2) .value').textContent()).toEqual(price)//$55000
    await page.locator('.totalRow:nth-child(3) button').click();


    await page.locator("[placeholder='Select Country']").pressSequentially("Ind");
    const country = page.locator("button.ta-item");
    await country.first().waitFor();
    for (let i = 0; i < await country.count(); i++) {
        let countryName = await country.nth(i).textContent();
        if (countryName.trim() === "India") {
            await country.nth(i).click();
            break;
        }
    }
    await page.click(".action__submit");

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

test("TC01", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('ajaykr.mailbox@gmail.com');
    await page.locator('#userPassword').fill('Automation@123');
    await page.locator('#login').click();

    //assertion, validation
    await expect(page.locator('nav button').nth(3)).toHaveText(' Sign Out ');
})

test("TC02", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('ajaykr@gmail.com');
    await page.locator('#userPassword').fill('Automation@123');

    await page.locator('#login').click();

    //assertion, validation
    await expect(page.locator('div[role="alert"]')).toHaveText(' Incorrect email or password. ');
})

test("TC03", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('ajaykr.mailbox@gmail.com');
    await page.locator('#userPassword').fill('Auton@123');
    await page.locator('#login').click();

    //assertion, validation
    await expect(page.locator('div[role="alert"]')).toHaveText(' Incorrect email or password. ');
})

test("TC04", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('ajaykrlbox@gmail.com');
    await page.locator('#userPassword').fill('Auton@123');
    await page.locator('#login').click();

    //assertion, validation
    await expect(page.locator('div[role="alert"]')).toHaveText(' Incorrect email or password. ');
})






