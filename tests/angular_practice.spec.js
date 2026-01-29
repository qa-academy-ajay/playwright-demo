import{test, expect} from '@playwright/test'

test("special locators in playwright", async({page})=>{
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Student").check();
    await page.getByLabel("Gender").selectOption("Female");

    await page.getByPlaceholder("Password").fill("username");

    await page.getByRole('button', {name: "Submit"}).click();

    expect( await page.getByText("Success! The Form has been submitted successfully!.").isVisible()).toBeTruthy();
    
    await page.getByRole('link', {name: "Shop"}).click();

    await page.waitForLoadState('domcontentloaded');
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();
    // await page.getByRole('textbox', {name: "name"}).fill("ajay kumar");
    await page.pause();
})