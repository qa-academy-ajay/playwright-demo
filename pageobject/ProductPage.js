
class ProductPage {

    constructor(page) {
        this.page = page;
        this.card_body = page.locator('div.card-body');
        this.cartBtn = page.locator('[routerlink$="cart"]');
    }

   
    async addProduct(product_name) {
        let price = '';
        await card_body.first().waitFor({ state: 'attached' });
            for (let i = 0; i < await card_body.count(); i++) {
                if (await card_body.nth(i).locator('b').textContent() == product_name) {
                    price = await card_body.nth(i).locator('.text-muted').textContent();//$ 55000
                    price = price.replaceAll(" ", "");//$55000
                    await card_body.nth(i).locator('button:has-text("Cart")').click();
                }
            }
            return price;
        

    }

    async navigateToCheckout(){
        await cartBtn.click();
    }

}


export { ProductPage }