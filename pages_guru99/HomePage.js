class Homepage{

    constructor(page){
        this.page = page;
        this.newCust = page.locator('[href="addcustomerpage.php"]');
    }

    async navigateToNewCust(){
        await this.newCust.click();
    }

}
export {Homepage}