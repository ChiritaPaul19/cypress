describe('Hooks and tags', () => {

    before(()=>{
        cy.log('***** Application started *****')
    })

    after(()=>{
        cy.log('***** Application closed *****')
    })

    beforeEach(()=>{
        cy.log('*** User logged in for testing ***')
    })

    afterEach(()=>{
        cy.log('*** User logged out for testing ***')
    })

    it('Search', () => {
        cy.log('..... searching .....')
    })

    it('Advanced search', () => {
        cy.log('..... advanced searching .....')
    })

    it('List products', () => {
        cy.log('All the products you got ')
    })
})