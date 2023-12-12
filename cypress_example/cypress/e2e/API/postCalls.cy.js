describe('Different post calls', () => {

    const requestBody = {
        someHash: Math.random().toString(10).substring(2),
        secondHash: Math.random().toString(25).substring(2)
    }

    it('POST - approach 1 hardcoded', () => {
        cy.request({
            method: 'POST',
            url: 'https://postman-echo.com/post',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.url).to.contain('postman')
            })
    })

    it('POST - approach 2 dynamic', () => {
        cy.request({
            method: 'POST',
            url: 'https://postman-echo.com/post',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.url).to.contain('postman')
                expect(response.body.data.someHash).to.eq(requestBody.someHash)
                expect(response.body.data.secondHash).to.eq(requestBody.secondHash)
            })
    })

    it('POST - approach 3 fixture usage', () => {

        // get data from fixture
        cy.fixture('postCall.json').then((callData) => {
            const requestBody = callData;
            cy.request({
                method: 'POST',
                url: 'https://postman-echo.com/post',
                body: requestBody
            })
                .then((response) => {
                    // validating response
                    expect(response.status).to.eq(200)

                    // validating data
                    expect(response.body.url).to.contain('postman')
                    expect(response.body.data.someHash).to.eq(requestBody.someHash)
                    expect(response.body.data.secondHash).to.eq(requestBody.secondHash)

                    // validating property
                    expect(response.body).has.property('args') // verify that a response has a property
                    expect(response.body).to.have.property('files')
                })
        })
    })
})