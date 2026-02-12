
class LoginPage {

    constructor(page) {
        this.page = page;
        this.userEmail = page.locator('#userEmail');
        this.userPassword = page.locator('#userPassword');
        this.loginBtn = page.locator('#login');
    }

    async launchApplication(url) {
        await this.page.goto(url);
    }

    async userLogin(username, password) {
    await userEmail.fill(username);
    await userPassword.fill(password);
    await loginBtn.click();

}

}

// module.exports = { RegistrationPage };

export { LoginPage }