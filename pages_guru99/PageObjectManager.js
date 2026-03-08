import { LoginPage } from '../pages_guru99/LoginPage';
import { Homepage } from '../pages_guru99/HomePage';
import { NewCustPage } from '../pages_guru99/NewCustPage';

class PageObjectManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homepage = new Homepage(page);
        this.newCustPage = new NewCustPage(page);

    }

    getLoginPage() {
        return this.loginPage;
    }
    getHomepage() {
        return this.homepage;
    }

    getNewCustPage() {
        return this.newCustPage;
    }

}

export { PageObjectManager };