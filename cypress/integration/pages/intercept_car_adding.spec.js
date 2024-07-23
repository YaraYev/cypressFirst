import garagePage from './../pages/garagePage'

describe('Garage and Fuel Expenses Tests', () => {
    const car = { brand: 'Audi', model: 'TT', mileage: 300 }
    const brandMap = { 'Audi': 1 }
    const modelMap = { 'TT': 1 }

    before(() => {
        garagePage.visit()
    });

    it('should add a new car and verify request body', () => {

        cy.intercept('POST', '/api/cars').as('createCar')

        garagePage.addCar(car.brand, car.model, car.mileage)

        cy.wait('@createCar').then((interception) => {
            expect(interception.request.body).to.deep.equal({
                carBrandId: brandMap[car.brand],
                carModelId: modelMap[car.model],
                mileage: car.mileage
            })
        })

        garagePage.verifyCarAdded(car.brand, car.model)
    })

    after(() => {
        garagePage.deleteCar(car.brand, car.model)
    })
})

