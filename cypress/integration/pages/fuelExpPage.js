import moment from 'moment'

class FuelExpensesPage {

    addExpense(car, mileage, liters, totalCost) {
        cy.get('[routerlink="expenses"]').click()
        cy.contains('button', 'Add an expense').click()
        cy.get('#addExpenseCar').should('not.be.disabled').contains('option', car)
        const formattedDate = moment().format('DD.MM.YYYY')
        cy.get('#addExpenseDate').should('have.value', formattedDate)
        cy.get('#addExpenseMileage').clear().type(mileage)
        cy.get('#addExpenseLiters').clear().type(liters)
        cy.get('#addExpenseTotalCost').clear().type(totalCost)
        cy.get('.modal-footer > .btn-primary').click()
    }

    verifyExpenseAdded() {
        cy.contains('Fuel expense added')
    }
}

export default new FuelExpensesPage()