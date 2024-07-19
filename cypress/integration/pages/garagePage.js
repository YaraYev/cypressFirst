class GaragePage {

    visit() {
        const user = Cypress.env('user')
        cy.login(user.email, user.password)
    }

    addCar(brand, model, mileage) {
        cy.get('.panel-page_heading > .btn').click()
        cy.get('#addCarBrand').select(brand)
        cy.get('#addCarModel').select(model)
        cy.get('#addCarMileage').type(mileage)
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('Car added')
    }

    verifyCarAdded(brand, model) {
        cy.contains(`${brand} ${model}`).should('be.visible')
    }
    deleteCar(brand, model) {
        cy.contains('Garage').click()
        cy.contains(`${brand} ${model}`).parents('.car').within(() => {
            cy.get('.car_edit > .icon').click()
        })
        cy.get('.btn-outline-danger').click()
        cy.contains(`Do you really want to remove ${brand} ${model} from your account?`).should('be.visible')
        cy.contains('button', 'Remove').click()
        cy.contains(`${brand} ${model}`).should('not.exist')
        cy.contains('Car removed')

    }
}

export default new GaragePage()