import { expect } from'@playwright/test';

class CheckoutPage {


    constructor(page) {
        this.page = page;
       
        this.checkout = page.locator("text=Checkout");
        this.country = page.locator("[placeholder='Select Country']");
        this.countries = page.locator(".ta-results");
        this.messege = page.locator(".hero-primary");
        this.submit = page.locator(".action__submit");
       
    }

 
    async placeOrder() {
        await this.checkout.click();
        await this.country.pressSequentially("Ind");
        await this.countries.waitFor();
        const count = await this.countries.locator("button").count();
        console.log(count);
        console.log(await this.countries.allTextContents());
        for (let i = 0; i < count; ++i) {
            if (await this.countries.locator("button").nth(i).textContent() === " India") {
                await this.countries.locator("button").nth(i).click();
                break;
            }
        }
        console.log("country selected");

        expect(await this.submit.isVisible()).toBeTruthy();
        await this.submit.click();
    }


}

export { CheckoutPage };

