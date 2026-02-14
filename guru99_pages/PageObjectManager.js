import { LoginPage } from '../pageobject/LoginPage';
import { Homepage } from './HomePage';
import { NewCustPage } from './NewCustPage';

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