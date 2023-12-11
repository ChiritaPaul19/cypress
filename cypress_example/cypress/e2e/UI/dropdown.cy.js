describe('dropdown', () => {
    it('testing dropdown functionality using select', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#country').select('Japan')
            .should('have.value', 'japan')
            .and('not.have.value', ' ')

    })

    it('testing dropdown functionality without using select', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click() //display the values of dropdown
        cy.get('.select2-search__field').type('Iceland') //enter the value manually
            .type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Iceland')
    })

    it('testing dropdown with suggestion functilnality', () => {

        cy.visit('https://ro.wikipedia.org/wiki')
        cy.title().should('eq', 'Wikipedia')

        cy.get('.cdx-text-input__input').type('allianz') //search for a piece of information
        cy.get('.cdx-menu-item').contains('Arena').click() //select the relevant one
        cy.title().should('include', 'Allianz Arena')
    })

    it('test dropdown dynamic behaviour', () => {

        let searchValue = 'automation testing'

        cy.visit("https://www.google.com")

        cy.get('button#W0wltc').click()
        cy.get("textarea[name='q']").type('automation')
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == searchValue) {
                cy.wrap($el).click()
            }
        })

        cy.get("textarea[name='q']").should('have.value', searchValue)
    })
})