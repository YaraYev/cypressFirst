class RegistrationForm {
    constructor() {
        this.firstNameId = '#signupName'
        this.lastNameId = '#signupLastName'
        this.emailId = '#signupEmail'
        this.passwordId = '#signupPassword'
        this.repeatPasswordId = '#signupRepeatPassword'
        this.submitButtonSelector = 'button.btn-primary[type="button"]'
        this.errorSelector = '.invalid-feedback > p'
    }

    visitRegistrationPage() {
        cy.visit('/')
        cy.get('.hero-descriptor_btn').click()
    }

    fillField(selector, value) {
        cy.get(selector).type(value)
    }

    checkError(selector, message) {
        cy.get(selector).focus().blur();
        cy.get(this.errorSelector).should('be.visible').and('contain', message)
    }

    verifySubmitButtonDisabled() {
        cy.get(this.submitButtonSelector).should('be.disabled')
    }
}

module.exports = RegistrationForm