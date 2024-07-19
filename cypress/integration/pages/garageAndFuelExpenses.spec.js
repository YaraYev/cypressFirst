import garagePage from './../pages/garagePage';
import fuelExpensesPage from '../pages/fuelExpPage';

describe('Garage and Fuel Expenses Tests', () => {

    const car = { brand: 'Audi', model: 'TT', mileage: 300 }
    const expense = { mileage: 1500, liters: 50, totalCost: 100 }

    beforeEach(() => {
        garagePage.visit()
    })

    it('should add a new car', () => {
        garagePage.addCar(car.brand, car.model, car.mileage)
        garagePage.verifyCarAdded(car.brand, car.model)
    })

    it('should add a new fuel expense for the added car', () => {
        fuelExpensesPage.addExpense(`${car.brand} ${car.model}`, expense.mileage, expense.liters, expense.totalCost)
        fuelExpensesPage.verifyExpenseAdded()
    })

    after(() => {
        garagePage.deleteCar(car.brand, car.model)
    })
})