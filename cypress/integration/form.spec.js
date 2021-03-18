describe('Form', () => {
    beforeEach(() => {
        cy.visit('/search')
    })
    
    it('react-select', () => {
        cy.get('.css-tj5bde-Svg')
            .click()
        cy.contains('Drink Name').click({force:true})

    })

    it('allows input', () => {
        cy.get('.css-tj5bde-Svg')
            .click()
        // cy.get('.css-yk16xz-control')
        //     .click()
        cy.get('input')
            .type("Old Fashioned")
            .should('have.value', "Old Fashioned")
    })
    
})