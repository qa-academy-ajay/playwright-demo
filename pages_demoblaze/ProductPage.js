import { expect } from "allure-playwright";

class ProductPage {

    constructor(page) {
        this.page = page
        this.cardtitle = page.locator('.card-title');
        this.nextBtn = page.locator('button#next2');
        this.addToCart = page.locator('[onclick^="addToCart"]');
        this.price = page.locator('h3.price-container');

    }

    

    // async findProduct(productName) {
    //     while (true) {
    //         const product = this.page.locator('.card-title a', { hasText: productName });

    //         if (await product.count() > 0) {
    //             await product.first().click();
    //             break;
    //         }

    //         await this.nextBtn.click();
    //         await this.page.waitForLoadState('domcontentloaded');
    //     }
    // }

    async findProduct(productName) {
    await this.page123.waitForLoadState('domcontentloaded');

    let productFound = false;

    while (!productFound) {

        await this.cardtitle.first().waitFor({ state: 'visible' });

        let count = await this.cardtitle.count();

        for (let i = 0; i < count; i++) {

            let productTitle = await this.cardtitle.nth(i).locator('a').textContent();
            console.log(productTitle);

            if (productTitle.trim() === productName) {
                await this.cardtitle.nth(i).locator('a').click();
                productFound = true;
                break;
            }
        }

        if (!productFound) {
            await this.nextBtn.click();
            await this.page.waitForLoadState('domcontentloaded');
        }
    }
}

    async addProduct() {
        await this.page.waitForLoadState('load')
        await this.addToCart.click();
        this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByRole('button').click();

    }


}
export { ProductPage }