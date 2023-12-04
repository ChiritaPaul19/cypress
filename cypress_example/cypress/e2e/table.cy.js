describe('table', () => {

    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('Check number of rows and columns', () => {

        cy.get("table[name='BookTable']>tbody>tr").should('have.length', '7') // verify the number of rows
        cy.get("table[name='BookTable']>tbody>tr>th").should('have.length', '4') //verify th enumber of columns
    })

    it('Check if a box has a specific value', () => {

        cy.get("table[name='BookTable']>tbody>tr:nth-child(4)>td:nth-child(3)").should('contain', 'script')
    })
})