class LoginPage {

    constructor(page) {
        this.page = page;
        // this.username = page.locator("#userEmail");
        // this.password = page.locator("#userPassword");
        // // this.loginBtuun = page.locator("[name='login']");
        // this.loginButton = page.getByRole('button', {id: "login"});


        this.username = page.locator('[name="uid"]');
        this.password = page.locator('[name="password"]');
        this.loginButton = page.locator('[name="btnLogin"]');

    }

    async launchApplication(url) {
        await this.page.goto(url);
    }

    async userLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}

export { LoginPage };