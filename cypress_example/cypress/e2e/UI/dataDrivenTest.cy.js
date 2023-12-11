describe('DataDrivenTest', () => {

    it('Data driven test', () => {

        cy.fixture('orangeHRM_multiple.json').then((data) => {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((userdata) => {

                //log in user
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='Submit']").click()

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userdata.expected)

                    cy.wait(4000)

                    //log out user
                    cy.get('.oxd-userdropdown-tab').click()
                    cy.get('.oxd-dropdown-menu>li:nth-child(4)>.oxd-userdropdown-link').click()
                } else {
                    cy.get('p.oxd-alert-content-text').should('have.text', userdata.expected)
                }
            })
        })
    })
})