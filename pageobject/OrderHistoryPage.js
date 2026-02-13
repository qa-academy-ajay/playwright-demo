import { expect } from '@playwright/test';

class OrderHistoryPage {


    constructor(page) {
        this.page = page;
       
        this.myorder = page.locator("button[routerlink*='myorders']");
    }


    async verifyOrderHistory(productname, generatedOrder) {
        await this.myorder.click();
        const rows = await this.page.locator("tbody tr");
        await rows.first().waitFor();
        for (let j = 0; j < await rows.count(); ++j) {
            console.log(j);
            const rowOrder = await rows.nth(j).locator("th").textContent();
            console.log(rowOrder);
            if (generatedOrder.includes(rowOrder)) {
                await rows.nth(j).locator("button").first().click();
                break;
            }
        }
        expect(await this.page.locator("div.title").first().textContent()).toContain(productname);
    }
}

export { OrderHistoryPage };

