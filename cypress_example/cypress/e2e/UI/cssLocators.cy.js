describe('cssLocators', () =>{

    it('searchbox_test', () =>{
        
        cy.visit("https://ro.wikipedia.org") //go to Wiki page
        cy.title().should('eq', "Wikipedia") //verify that the user is on Wiki page

        cy.get("input.cdx-text-input__input").type("Romania") //use the searchbox
        cy.get("button[class='cdx-button cdx-button--action-default cdx-button--weight-normal cdx-button--size-medium cdx-button--framed cdx-search-input__end-button']").click() //use the search button
        cy.get("td[class='antet harta']").contains("Rom") //verify the user is on correct page
    })

    it('createaccount_test', () =>{

        cy.visit("https://ro.wikipedia.org")
        cy.title().should('eq', "Wikipedia")

        cy.get("#pt-createaccount-2").click()
        cy.get("#wpName2").should('exist')


    })
})