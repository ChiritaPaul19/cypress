import Login from "../../PageObjects/LoginPage"
import Login2 from "../../PageObjects/LoginPage2"

describe('POM example - first approach', () => {
    it('Log in with POM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const ln = new Login;

        ln.setUsername('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit()
        ln.verifyLogin()
    })

    it('Log in with POM -second approach', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const ln = new Login2;

        ln.setUsername('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit()
        ln.verifyLogin()
    })
})