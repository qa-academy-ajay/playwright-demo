import { LoginPage } from '../pages_rahulshettyacademy/LoginPage';
import { DashboardPage } from '../pages_rahulshettyacademy/DashboardPage';
import { CartPage } from '../pages_rahulshettyacademy/CartPage';
import { CheckoutPage } from '../pages_rahulshettyacademy/CheckoutPage';
import { ConfirmationPage } from '../pages_rahulshettyacademy/ConfirmationPage';
import { OrderHistoryPage } from '../pages_rahulshettyacademy/OrderHistoryPage';

class PageObjectManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homepage = new Homepage(page);
        this.newCustPage = new NewCustPage(page);
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

export { PageObjectManager };