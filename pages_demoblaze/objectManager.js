import { Homepage } from './Homepage';
import { ProductPage } from './ProductPage';

class objectManager {

    constructor(page) {
        this.page = page;
        this.homepage = new Homepage(page);
        this.productPage = new ProductPage(page);

    }

    getProductPage() {
        return this.loginPage;
    }
    getHomepage() {
        return this.homepage;
    }

}

export { objectManager };