import { LoginPage } from '../pageobject/LoginPage';
import { DashboardPage } from '../pageobject/DashboardPage';
import { CartPage } from '../pageobject/CartPage';
import { CheckoutPage } from '../pageobject/CheckoutPage';
import { ConfirmationPage } from '../pageobject/ConfirmationPage';
import { OrderHistoryPage } from '../pageobject/OrderHistoryPage';

class PageObjectManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.confirmationPage = new ConfirmationPage(page);
        this.orderHistoryPage = new OrderHistoryPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
    getCartPage() {
        return this.cartPage;
    }
    getCheckoutPage() {
        return this.checkoutPage;
    }
    getConfirmationPage() {
        return this.confirmationPage;
    }
    getOrderHistoryPage() {
        return this.orderHistoryPage;
    }
}

export {PageObjectManager};