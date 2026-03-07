class ProductPage {

    constructor(page) {
        this.page = page;
        this.cardTitle = page.locator('.card-title');
        this.nextBtn = page.locator('button#next2');

    }

    async findProduct(productName) {
    await this.page.waitForLoadState('domcontentloaded');

    let productFound = false;

    while (!productFound) {

        await this.cardTitle.first().waitFor({ state: 'visible' });

        let count = await this.cardTitle.count();

        for (let i = 0; i < count; i++) {

            let productTitle = await this.cardTitle.nth(i).locator('a').textContent();
            console.log(productTitle);

            if (productTitle.trim() === productName) {
                await this.cardTitle.nth(i).locator('a').click();
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


}
export { ProductPage }