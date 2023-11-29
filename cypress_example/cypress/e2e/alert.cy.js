describe('alert', () => {
    it('test alert', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionAlert()']").click()

        //trigger an alert event
        cy.on('window:alert', (alertWindow) => {
            expect(alertWindow).to.contain('I am an alert box!')
        })
    })

    it('confirmation box alert - OK button', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionConfirm()']").click()

        cy.on('window:confirm', (confirmAlert) => {
            expect(confirmAlert).to.contain('Press a button!')
        })

        cy.get('#demo').should('contain', 'OK!')
    })

    it('confirmation box alert - Cancel button', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionConfirm()']").click()

        cy.on('window:confirm', (confirmAlert) => {
            expect(confirmAlert).to.contain('Press a button!')
        })

        cy.on('window:confirm', () => false)  // use cancel button

        cy.get('#demo').should('contain', 'Cancel')
    })

    it('prompt alert - using OK', () => {
        let user = 'Paul'
        cy.visit('https://testautomationpractice.blogspot.com/')

        // for prompt alerts, the event must be triggerd before clicking the button 
        // and the string must be sent too because Cypress manages the alerts by itself
        cy.window().then((promptWindow) => {
            cy.stub(promptWindow, 'prompt').returns(user)
        })

        cy.get("button[onclick='myFunctionPrompt()']").click()
        cy.get('#demo').should('contain', user)
    })

    it('prompt alert - using cancel', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        //method for using cancel button on prompt alerts
        cy.window().then(win => {
            cy.stub(win, 'prompt').callsFake(() => null)
        })
        cy.get("button[onclick='myFunctionPrompt()']").click()

        cy.get('#demo').should('contain', 'cancel')
    })
})