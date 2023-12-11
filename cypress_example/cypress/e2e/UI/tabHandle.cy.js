describe('tabHandle', () => {
    it('handle new tab behaviour', () => {

        cy.visit('https://www.webpagetest.org/')

        cy.get('.wptheader_menubtn').click()
        cy.xpath("//li[@class='wptheader_nav_menu'][1]").click()

        // for redirecting on new tab it is a must to use .invoke('removeAttr', ...)
        cy.get("li>a[href='https://product.webpagetest.org/experiments']").invoke('removeAttr', 'target').click()
        cy.title().should('contain', 'Opportunities')
    })
})