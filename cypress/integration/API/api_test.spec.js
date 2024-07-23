import testData from '../../fixtures/posts_data.json'

describe('JSONPlaceholder API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    it('GET - get post by id', () => {
        cy.request('GET', `${baseUrl}/posts/1`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', 1)
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('body')
            expect(response.body).to.have.property('userId')
        })
    })

    it('GET - get posts list', () => {
        cy.request('GET', `${baseUrl}/posts`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body.length).to.be.greaterThan(0)
            expect(response.body[0]).to.have.all.keys('id', 'title', 'body', 'userId')
        })
    })

    it('POST - create new posts', () => {
        testData.newPosts.forEach((newPost) => {
            cy.request('POST', `${baseUrl}/posts`, newPost).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.include(newPost)
                expect(response.body).to.have.property('id')
            })
        })
    })

    it('PUT - update post by id', () => {
        cy.request('PUT', `${baseUrl}/posts/1`, testData.updatePost).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.equal(testData.updatePost)
        })
    })

    it('DELETE - delete post by id', () => {
        cy.request('DELETE', `${baseUrl}/posts/1`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.equal({})
        })
    })
})