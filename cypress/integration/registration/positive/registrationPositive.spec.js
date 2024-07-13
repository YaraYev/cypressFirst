const { userData } = require('../../../support/userData')

describe('Registration and Login Tests', () => {

    it('should create a new user for valid inputs and display success message', () => {
        cy.visit('/')
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupName').type(userData.name)
        cy.get('#signupLastName').type(userData.lastName)
        cy.get('#signupEmail').type(userData.email)
        cy.get('#signupPassword').type(userData.password, { sensitive: true })
        cy.get('#signupRepeatPassword').type(userData.password, { sensitive: true })
        cy.get('button.btn-primary[type="button"]').should('not.be.disabled')
        cy.get('button.btn-primary[type="button"]').click()
        cy.contains('Registration complete')
    })

    it('should login with created user credentials', () => {
        cy.login(userData.email, userData.password)
        cy.contains('You have been successfully logged in')
    })
})