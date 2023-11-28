describe('explicitAssertions', () => {
    it('explicit assertion of webpage element', () => {

        let expectedUserDropdownName = 'Paul CollingsBrenna';

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()

        cy.get(".oxd-userdropdown-name").then( (userDropdownName) =>{
            let actualDropdownName = userDropdownName.text()

            //BDD style assertions
            expect(actualDropdownName).to.equal(expectedUserDropdownName)
            expect(actualDropdownName).to.not.contain('Admin')

            //TDD style assertion
            assert.equal(actualDropdownName, expectedUserDropdownName)
            assert.notEqual(actualDropdownName, 'Admin')
        })
    })
})