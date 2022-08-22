/// <reference types="Cypress" />

import { Login } from "../../../pages/login"
import { MainDashboard } from "../../../pages/main-dashboard"
import { SignUp } from "../../../pages/signup"

describe('Signup page', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    // TC 5. [Signup page] Validate new user is able to signup into the app
    it('Should be able to create a new user in the app', () => {

        // Test data to the new user
        const testData = {
            firstName: "Test Name 1",
            lastName: "Test lastname 1",
            userName: "Test_UserName_1",
            password: "Test_Password_1",
            bankName: "Test_Bank_1",
            routingNumber: 123456789,
            accountNumber: 123456789
        }

        Login.clickSignUpLink()
        SignUp.typeFirstName(testData.firstName)
        SignUp.typeLastName(testData.lastName)
        SignUp.typeUserName(testData.userName)
        SignUp.typePassword(testData.password)
        SignUp.typeConfirmPassword(testData.password)
        SignUp.clickSignUpButton()
        cy.signIn(testData.userName, testData.password)
        MainDashboard.clickNextButton()
        MainDashboard.createBankAccount(testData.bankName, testData.routingNumber, testData.accountNumber)
        MainDashboard.clickDoneButton()
        MainDashboard.elements.getUsernameLabel(testData.userName).should('contain', testData.userName)

    })

})