describe('customComands', () => {
    it('handling links', () => {

        cy.visit('https://demo.nopcommerce.com/')

        // custom command for clicking links
        cy.clickLink('Apple MacBook Pro 13-inch')

        cy.get("div[class='product-name']>h1").should('contain.text', 'MacBook')
    })

    it('Log in command', () => {

        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink('Log in') // previous custom command
        cy.loginapp("testing@gmail.com", "test123")

        cy.get('.message-error').should('contain.text', 'customer')
    })
})