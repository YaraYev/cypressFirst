describe('Header and Footer tests', () => {
    beforeEach(() => {
        const url = `https://guest:welcome2qauto@qauto.forstudy.space`

        cy.visit(url, {
            failOnStatusCode: false
        });

        cy.wait(5000)
    })

    it('should find all header buttons', () => {
        cy.get('body').should('be.visible')

        cy.get('button.hero-descriptor_btn').contains('Sign up').should('be.visible');

    })

    it('should find all footer links and buttons', () => {
        cy.get('body').should('be.visible')

        cy.get('.contacts_socials a').each(($el) => {
            cy.wrap($el).should('be.visible')
        })

        cy.get('.contacts a[href*="ithillel.ua"]').should('be.visible')
        cy.get('.contacts a[href*="mailto:developer@ithillel.ua"]').should('be.visible')
    })
})