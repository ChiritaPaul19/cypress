class Login2 {

    usernameText = "input[placeholder='Username']"
    passwordText = "input[placeholder='Password']"
    sumbitButton = "button[type='submit']"
    validationMessage = ".oxd-topbar-header-breadcrumb>.oxd-text"


    setUsername(username) {
        cy.get(this.usernameText).type(username)
    }

    setPassword(password) {
        cy.get(this.passwordText).type(password)
    }

    clickSubmit() {
        cy.get(this.sumbitButton).click()
    }

    verifyLogin() {
        cy.get(this.validationMessage).should('have.text', 'Dashboard')
    }
}

export default Login2;