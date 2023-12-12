describe('Cookies', () => {

    const queryParam = {
        foo1: 'bar1',
        foo2: 'bar2'
    }

    it('Cookies dunctionality', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/get',
            qs: queryParam,
            cookie: {
                'Cookie': 'sails.sid=s%3AOQbKo0yGP9TV8BX5vUbZ85ZOKs00yQgm.mPaHxenZ4bm1erXui1E%2B%2Fo1jojumqqq%2F53kbIFnDX9Y'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })
})