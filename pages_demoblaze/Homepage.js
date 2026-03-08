class Homepage{

    constructor(page){
        this.page = page;
        this.signup = page.locator('#signin2');
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.signupBtn = page.locator('[onclick^="register"]');
        this.loginBtn1 = page.locator('#login2');
        this.loginusername = page.locator('#loginusername');
        this.loginPassword = page.locator('#loginpassword');
        this.loginBtn = page.locator('[onclick^="logIn"]');
    }

    async launchApplication(url){
        await this.page.goto(url);
    }
    async userSignup(){
        await this.signup.click();
        await this.username.fill("qaacademy");
        await this.password.fill("qaacademy@123");
        await this.signupBtn.click();
    }

    async userLogin(){
        await this.loginBtn1.click();
        await this.loginusername.fill("qaacademy");
        await this.loginPassword.fill("qaacademy@123");
        await this.loginBtn.click();
    }

}
export {Homepage}