describe('checkbox', ()=>{
    it('test checkboxes', () =>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        //visibility of checkboxes
        cy.get('#sunday').should('be.visible')
        cy.get('#monday').should('be.visible')

        //select a single checkbox
        cy.get('#sunday').check().should('be.checked')

        //unselect checkbox
        cy.get('#sunday').uncheck().should('not.be.checked')

        //select all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //unselect all checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    })

    it('test radio buttons',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('div.titlewrapper').should('exist')

        //visibility of radio buttons
        cy.get("input#male").should('be.visible') 
        cy.get("input#female").should('be.visible')

        //state of radio buttons
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

    })
})