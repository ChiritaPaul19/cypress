describe('Navigation', () => {
    it('navigation test', () => {

        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store')

        cy.get('li:nth-child(7)>a:nth-child(1)').click()
        cy.get("div[id='content']>h2").should('have.text', 'Cameras')

        cy.go('back') // go back to the previous page
        cy.title().should('eq', 'Your Store')

        cy.go('forward')
        cy.get("div[id='content']>h2").should('have.text', 'Cameras')

        cy.go(-1) // go to the home page
        cy.title().should('eq', 'Your Store')

        cy.go(1)
        cy.get("div[id='content']>h2").should('have.text', 'Cameras')
    })
})