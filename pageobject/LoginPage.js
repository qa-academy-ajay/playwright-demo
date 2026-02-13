class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginBtuun = page.locator("[name='login']");
    }
    async launchApplication(url) {
        await this.page.goto(url);
    }

    async userLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtuun.click();
    }

}

export { LoginPage };