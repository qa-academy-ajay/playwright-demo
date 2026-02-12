
class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.countryListbox =  page.locator("[placeholder='Select Country']")
        this.submitBtn = page.locator('.action__submit');
    }

 

    async checkoutOrder(country) {
        await countryListbox.pressSequentially(country);
        const countryList = page.locator("button.ta-item");
        await countryList.first().waitFor();
        for (let i = 0; i < await countryList.count(); i++) {
            let countryName = await countryList.nth(i).textContent();
            if (countryName.trim() === country) {
                await countryList.nth(i).click();
                break;
            }
        }
        await submitBtn.click();

    }

}

export { CheckoutPage }