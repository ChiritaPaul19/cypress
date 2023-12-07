describe('screenshot and record', () => {
    it('screenshot', () => {

        cy.visit('https://www.opencart.com/')
        cy.screenshot('HomePage_screenshot')
        cy.wait(5000)
        cy.get('#business').screenshot('Partners_screenshot')
    })

    //  works on executing by CLI (coomand prompt or terminal)
    it('automatically screenshot on fail', () => {

        cy.visit('https://www.opencart.com/')
        cy.get('li:nth-child(7)>a:nth-child(1)').click()
        cy.get("div[id='content']>h2").should('have.text', 'Tablets')
    })
})