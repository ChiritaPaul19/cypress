describe('implicitAssertions', () => {
    it('implicit assertion of the url', () => {

        cy.visit("https://github.com/")

        //first way of using implicit assertions
        cy.url().should('include', 'https://')
        cy.url().should('contain', 'github.com')
        cy.url().should('eq', 'https://github.com/')

        //second way of using implicit assertions
        cy.url().should('include', 'https://')
            .should('contain', 'github.com')
            .should('eq', 'https://github.com/')

        //third way of using implicit assertions
        cy.url().should('include', 'https://')
            .and('contain', 'github.com')
            .and('eq', 'https://github.com/')
    })

    it('implicit negative assertion of the url', () => {

        cy.visit("https://github.com/")
        cy.url().should('not.contain', 'gitlab')
    })

    it('implicit assertion of the element', () => {

        cy.viewport(1500, 1320) // github page adapts on resolution
        cy.visit("https://github.com/")
        cy.xpath("//input[@id='user_email']").should('be.visible')
        cy.get('button.btn-mktg').should('exist')

        cy.get('a.HeaderMenu-link--sign-up').click()
        cy.get('input#email').should('be.visible')
        cy.get('input#email').type("myemail@gmail.com")
        cy.get('button.js-continue-button').should('be.disabled')
    })
})