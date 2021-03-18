describe('Request', () => {
    it('displays random drink from the API', () => {
        cy.request('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.drinks).to.have.length(1)
                expect(response).to.have.property('headers')
            })
    })
})