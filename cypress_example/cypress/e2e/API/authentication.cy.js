describe('Authentication', () => {
    it('Basic authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                user: 'postman',
                pass: 'password'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.authenticated).to.eq(true)
            })
    })

    it('Digest authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                password: 'password',
                method: 'digest'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.authenticated).to.eq(true)
            })
    })

    const token = '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'
    it('Token authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/users/repos',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(77416)
            })
    })

    it('API key authentication', () => {
        cy.request({
            method: 'GET',
            url: 'api.openweathermap.org/data/2.5/forecast/daily',
            qs: {
                appid: 'fe9c5cddb7e01d747b4611c3fc9eaf2c', //API key and value
                q: 'Iasi'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.city.id).to.eq(675810)
            })
    })
})