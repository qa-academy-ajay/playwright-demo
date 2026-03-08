
class RegistrationPage {

    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.userEmail = page.locator('#userEmail');
        this.userMobile = page.locator('#userMobile');
        this.occupation = page.locator('.custom-select');
        this.gender_male = page.locator('[value="Male"]');
        this.userPassword = page.locator('#userPassword');
        this.confirmPassword = page.locator('#confirmPassword');
        this.checkbox = page.locator('[type="checkbox"]');
        this.register_button = page.locator('#login');
    }

    async launchApplication(url) {
        await this.page.goto(url);
    }

    async fillRegitrationForm() {

        await this.firstName.fill("QA Academy");
        await this.lastName.fill("Ajay Kumar")
        await this.userEmail.fill("qaacademyajay+2@gmail.com");
        await this.userMobile.fill("4375867364");
        await this.occupation.selectOption("Student");
        await this.gender_male.check();
        await this.userPassword.fill("Password@123");
        await this.confirmPassword.fill("Password@123");
        await this.checkbox.check();
        await this.register_button.click();
    }

}

export {RegistrationPage}