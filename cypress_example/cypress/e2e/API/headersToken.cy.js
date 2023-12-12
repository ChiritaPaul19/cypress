describe('Books flow - API testing', () => {

    let authenticationToken = null;

    before('Create token', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: { 'Content-Type': 'application/json' },
            body: {
                clientName: 'Test',
                clientEmail: Math.random(25).toString().substring(2) + '@gmail.com'
            }
        })
            .then((response) => {
                authenticationToken = response.body.accessToken;
            })
    })

    before('Create order', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authenticationToken
            },
            body: {
                "bookId": 1,
                "customerName": "xyzabd"
            }
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.created).to.eq(true)
                expect(response.body).to.have.property('orderId')
            })
    })

    it('Get order', () => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Authorization': 'Bearer ' + authenticationToken
            }
        })
            .then((response => {
                expect(response.status).to.eq(200)
                expect(response.body).has.length(1)
            }))
    })
})