import { expect } from '@playwright/test';

class ConfirmationPage {


    constructor(page) {
        this.page = page;
        this.messege = page.locator(".hero-primary");
        this.orderid = page.locator("label.ng-star-inserted");
        this.myorder = page.locator("button[routerlink*='myorders']");
    }

  


    async verifyOrder() {
        await expect(this.messege).toHaveText(" Thankyou for the order. ");
        const orderidgenerated = await this.orderid.textContent();
        console.log(orderidgenerated);
        return orderidgenerated;
    }

}

export { ConfirmationPage };

