describe('Query', () => {
    const queryParam = {
        foo1: 'bar1',
        foo2: 'bar2'
    }

    it('Passing query parameters', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/get',
            qs: queryParam
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.args.foo1).to.eq('bar1')
                expect(response.body.args.foo2).to.contain('bar2')
            })
    })
})