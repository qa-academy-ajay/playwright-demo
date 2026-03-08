import { expect } from '@playwright/test';

class CartPage {


    constructor(page) {
        this.page = page;

        this.cart = page.locator("[routerlink*='cart']");
        this.productlist = page.locator("div li");
        this.cartSection = page.locator(".cartSection h3");

    }

    async reviewCart(productname) {
        await this.cart.click();
        await this.productlist.first().waitFor();
        expect(await this.cartSection.textContent()).toContain(productname);
    }

}

export { CartPage };

