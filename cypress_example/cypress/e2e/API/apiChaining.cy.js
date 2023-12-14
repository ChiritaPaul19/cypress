describe('API Chaining', () => {

    it('Chaining', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                const postId = response.body[0].id
                return postId
            })
            .then((postId) => {
                cy.request({
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/comments',
                    qs: {
                        postid: postId
                    }
                })
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.length.gt(5)
                    })
            })
    })
})