describe('xpathLocators', () =>{
    it('find the number of news', () =>{

        cy.visit("https://ro.wikipedia.org")
        cy.title().should('eq', "Wikipedia")

        cy.xpath("//td[@id='mp-itn']/ul/li").should('have.length', 5)
        cy.xpath("//td[@id='mp-itn']/ul/li").should('have.length.gt', 4) //greater
        cy.xpath("//td[@id='mp-itn']/ul/li").should('have.length.gte', 5) //greater or equal
        cy.xpath("//td[@id='mp-itn']").xpath("ul").xpath("li").should('have.length.lt', 6) //less
        cy.xpath("//td[@id='mp-itn']/ul/li").should('have.length.lte', 5) //less or equal
    })
})