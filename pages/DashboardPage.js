import { expect } from '@playwright/test';

class DashboardPage {


    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.title = page.locator(".card-body").locator("b");
        this.cart = page.locator("[routerlink*='cart']");
        this.productlist = page.locator("div li");
        this.cartSection = page.locator(".cartSection h3");
        this.checkout = page.locator("text=Checkout");
        this.country = page.locator("[placeholder='Select Country']");
        this.countries = page.locator(".ta-results");
        this.submit = page.locator(".action__submit");
        this.orderid = page.locator("label.ng-star-inserted");
        this.myorder = page.locator("button[routerlink*='myorders']");
    }

    async selectProduct(productname) {
        await this.products.first().waitFor();
        const titles = await this.products.locator("b").allTextContents();//multiple elements present so need to wait for first element to visible
        console.log(titles);
        const totalProduct = await this.products.count();
        for (let i = 0; i < totalProduct; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productname) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
        console.log("item selected");

    }

    async reviewCart(productname) {
        await this.cart.click();
        await this.productlist.first().waitFor();
        expect(await this.cartSection.textContent()).toContain(productname);
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


    async verifyOrder() {
        await expect(this.messege).toHaveText(" Thankyou for the order. ");
        const orderidgenerated = await this.orderid.textContent();
        console.log(orderidgenerated);
        return orderidgenerated;
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

export {DashboardPage};

