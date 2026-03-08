class NewCustPage{

    constructor(page){
        this.page = page;
        this.name = page.locator('[name="name"]');

    }

    async addNewCustomer(){
        await this.name.fill("name")
        // await click()
    }
}

export {NewCustPage};