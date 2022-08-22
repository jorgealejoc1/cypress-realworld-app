/// <reference types="Cypress" />

import { Login } from "../../../pages/login"
import { MainDashboard } from "../../../pages/main-dashboard"
import { MyAccount } from "../../../pages/my-account"
import { Notifications } from "../../../pages/notifications"
import { Transactions } from "../../../pages/transactions"

describe('Dashboard page', () => {

    // Go to the app and login with a valid account
    beforeEach(() => {
        cy.visit('/')
        const user: string = Cypress.env('user')
        const pass: string = Cypress.env('pass')
        cy.signIn(user, pass)
    })

    // TC 6. [Option Menu] Validate the option list
    it('Should have a list of options in the side menu', () => {
        
        let index: number  = 0
        // Test data to the menu options
        const testData = [
            "Home",
            "My Account",
            "Bank Accounts",
            "Notifications"
        ]
        
        MainDashboard.elements.getMenuOptions().each((menuOption) => {
            console.log('option: ',menuOption)
            expect(menuOption).to.contain(testData[index])
            index++
        })

    })

    // TC 7. [Logout] Validate successful logout
    it('Should logout to the app', () => {                
        let index: number  = 0
        MainDashboard.clickLogoutOption()
        cy.url().should('include', '/signin')
    })

    // TC 8. [My Account] Validate user settings
    it('Should user settings match the user data', () => {
        
        let index: number  = 0
        // Test data to user setting
        const testData = [
            "Edgar",
            "Johns",
            "Norene39@yahoo.com",
            "625-316-9882"
        ]
        
        MainDashboard.clickMyAccountOption()
        MyAccount.elements.getUserSettingsForm().each((userData) => {
            console.log('datauser: ',userData)
            expect(userData.attr('value')).to.contain(testData[index])
            index++
        })
    })

    // TC 9. [Notifications] Validate the amount of notifications on top bar match the list of notifications on the notification page
    it('Should match the number of notifications on the top of the page with the list of notifications', () => {
        let index: number  = 0
        MainDashboard.clickNotificationsOption()
        MainDashboard.elements.getNotificationsCountLabel().invoke('text').then((numberOfNotifications) => {
            Notifications.elements.getNotificationList().should('have.length', numberOfNotifications)  
        })
        
    })

    // TC 10. [Transactions] Validate that a payment transaction decreases the account balance
    it('Should decrease the account balance when you do a payment transaction', () => {
        let index: number  = 0
        const amountValue = 100
        const note = 'Note test'
        MainDashboard.clickNewButton()
        Transactions.selectFirstContact()
        Transactions.enterAmount(amountValue)
        Transactions.enterNote(note)
        Transactions.getAccountBalance().then((accountBalance) => {                       
            let initialBalance = accountBalance.replace(/\$|,/g, '')
            let finalBalance = '$'+(parseFloat(initialBalance) - amountValue).toLocaleString().toString()
            Transactions.clickPayButton()
            // Varify if the current is equal to initial value minus amount to pay
            Transactions.getAccountBalance().should('equal', finalBalance)
        })
    })

})