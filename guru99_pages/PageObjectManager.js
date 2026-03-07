import { LoginPage } from '../guru99_pages/LoginPage';
import { Homepage } from '../guru99_pages/HomePage';
import { NewCustPage } from '../guru99_pages/NewCustPage';

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