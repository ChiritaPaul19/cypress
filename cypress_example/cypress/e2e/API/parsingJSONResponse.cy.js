describe('Parsing JSON response', () => {
    it('Parse simple JSON response', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/get'
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.headers.host).to.contain('echo')
                expect(response.body.headers.accept).to.eq('*/*')
            })
    })

    // it('Parse complex JSON response', () => {

    //     let totalHosts;

    //     cy.request({
    //         method: 'GET',
    //         url: 'https://postman-echo.com/get'
    //     })
    //         .then((response) => {
    //             expect(response.status).to.eq(200)
    //             response.body.headers.forEach(element => {
    //                 totalHosts = totalHosts + element.host
    //             });
    //             expect(totalHosts).to.eq('postman-echo.com')
    //         })
    // })
})