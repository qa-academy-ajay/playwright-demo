import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import { OrderHistoryPage } from '../pages/OrderHistoryPage';

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