const RegistrationForm = require('../../../support/RegistrationForm')

describe('Registration Form Negative Tests', () => {
    const form = new RegistrationForm()

    beforeEach(() => {
        form.visitRegistrationPage()
    })

    it('should have title registration', () => {
        cy.contains('.modal-title', 'Registration')
    })

    // Name field tests
    it('should display an error for empty name field', () => {
        form.checkError(form.firstNameId, 'Name required')
        form.verifySubmitButtonDisabled();
    })

    it('should display an error for invalid name length (too short)', () => {
        form.fillField(form.firstNameId, 'Y')
        form.checkError(form.firstNameId, 'Name has to be from 2 to 20 characters long')
        form.verifySubmitButtonDisabled()
    })

    it('should display an error for invalid name length (too long)', () => {
        form.fillField(form.firstNameId, 'Yaneyanayaalesyavasya')
        form.checkError(form.firstNameId, 'Name has to be from 2 to 20 characters long')
        form.verifySubmitButtonDisabled()
    })

    // Last name field tests
    it('should display an error for empty last name field', () => {
        form.checkError(form.lastNameId, 'Last name required')
        form.verifySubmitButtonDisabled()
    })

    it('should display an error for invalid last name length (too long)', () => {
        form.fillField(form.lastNameId, 'Abdulahmanabdulahmana')
        form.checkError(form.lastNameId, 'Last name has to be from 2 to 20 characters long')
        form.verifySubmitButtonDisabled()
    })

    it('should display an error for invalid last name length (too short)', () => {
        form.fillField(form.lastNameId, 'Y')
        form.checkError(form.lastNameId, 'Last name has to be from 2 to 20 characters long')
        form.verifySubmitButtonDisabled()
    })

    // Email field tests
    it('should display an error for invalid email', () => {
        form.fillField(form.emailId, 'invalidemail')
        form.checkError(form.emailId, 'Email is incorrect')
        form.verifySubmitButtonDisabled()
    })

    it('should display an error for empty email field', () => {
        form.checkError(form.emailId, 'Email required');
        form.verifySubmitButtonDisabled();
    })

    // Password field tests
    it('should display an error for empty password field', () => {
        form.checkError(form.passwordId, 'Password required')
        form.verifySubmitButtonDisabled()
    })

    it('should display an error for invalid password (too short)', () => {
        form.fillField(form.passwordId, 'Kara1')
        form.checkError(form.passwordId, 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        form.verifySubmitButtonDisabled()
    })

    it('should display an error for invalid password (too long)', () => {
        form.fillField(form.passwordId, 'Kara1Kara1Kara11')
        form.checkError(form.passwordId, 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        form.verifySubmitButtonDisabled()
    })

    // Re-enter password field tests
    it('should display an error for empty re-enter password field', () => {
        form.checkError(form.repeatPasswordId, 'Re-enter password required')
        form.verifySubmitButtonDisabled()
    })

    it('should display an error for non-matching passwords', () => {
        form.fillField(form.passwordId, 'Password123!')
        form.fillField(form.repeatPasswordId, 'Password12!')
        form.checkError(form.repeatPasswordId, 'Passwords do not match')
        form.verifySubmitButtonDisabled()
    })
})