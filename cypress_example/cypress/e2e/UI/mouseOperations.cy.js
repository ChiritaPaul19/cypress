describe('Mouse Operation', () => {
    it('Mouse hover', () => {

        cy.visit('https://demo.opencart.com/')

        // verify that the submenu is not visible
        cy.get('.nav-item:nth-child(1)>.dropdown-menu>.dropdown-inner>.list-unstyled:nth-child(1)>li:nth-child(1)>a.nav-link')
            .should('not.be.visible')

        // hover on the menu element
        cy.get('.nav-item:nth-child(1)>a.nav-link:nth-child(1)').trigger('mouseover').click()

        // element shoul now be visible
        cy.get('.nav-item:nth-child(1)>.dropdown-menu>.dropdown-inner>.list-unstyled:nth-child(1)>li:nth-child(1)>a.nav-link')
            .should('be.visible')
    })

    it('Double click', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[ondblclick='myFunction1()']").dblclick()
        cy.get('#field2').should('contain.value', 'Hello')
    })

    it('Drag and dorp', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#cookieChoiceDismiss').click()
        cy.get('div#draggable').drag('div#droppable', { force: true })
    })

    it('Scroll', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#Attribution1').scrollIntoView()
    })
})