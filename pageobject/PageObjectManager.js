import { RegistrationPage } from '../pageobject/RegistrationPage'
class PageObjectManager {

    constructor(page) {
        this.page = page;
        this.RegistrationPage = new RegistrationPage(page);

    }

    getRegistrationPage() {
        return this.RegistrationPage;
    }

}

module.exports = { PageObjectManager };