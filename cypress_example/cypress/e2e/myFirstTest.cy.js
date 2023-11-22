describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    it('Site verification', () => {
        cy.visit("https://www.youtube.com")
        cy.title().should('eq', "YouTube")
      })
  })