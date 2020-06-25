class LoginPage {

    get usernameTextbox(){
        return $('input[name="username"]')
    }

    get passwordTextbox(){
        return $('input[name="password"]')
    }

    get logOutLink(){
        return $('*=Log Out')
    }

    loginWithValidCredentials(){
        this.usernameTextbox.setValue('john')
        this.passwordTextbox.setValue('demo')
        browser.keys('Enter')
    }

    logOutOfApplication(){
        this.logOutLink.click()
    }
}

export default new LoginPage()