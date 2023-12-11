describe('http Requests', () => {
    it('GET', () => {
        cy.request('GET', 'https://postman-echo.com/get?foo1=bar1&foo2=bar2')
            .its('status')
            .should('equal', 200)
    })

    it('POST', () => {
        cy.request({
            method: 'POST',
            url: 'https://postman-echo.com/post',
            body: {
                someHash: "7654321",
                secondHash: "987654321asdfgh"
            }
        }).its('status')
        .should('equal', 200)
    })

    it('PUT', () => {
        cy.request({
            method: 'PUT',
            url: 'https://postman-echo.com/put',
            body: 'This is expected to be sent back as part of response body.'
        }).its('status')
        .should('equal', 200)
    })

    it('DELETE', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://postman-echo.com/delete',
            body: 'This is expected to be sent back as part of response body.'
        }).its('status')
        .should('equal', 200)
    })
})