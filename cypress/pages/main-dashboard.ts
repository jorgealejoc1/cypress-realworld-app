export class MainDashboardPage {

    // Main dashboard page web elements
    elements = {
        getUsernameLabel: (username: string) => cy.contains(username),

        // Get started with Real World App popup modal
        getNextButton: () => cy.get('[data-test="user-onboarding-next"]'),
        getCreateBankForm: () => cy.get('[data-test="user-onboarding-dialog-content"]').find('form'),
        getDoneButton: () => cy.get('[data-test="user-onboarding-next"]'),

        // Get menu options
        getMenuOptions: () => cy.get('[data-test="sidenav"]').find('.MuiList-root.MuiList-padding a'),
        getLogoutOption: () => cy.get('[data-test="sidenav-signout"]'),
        getMyAccountOption: () => cy.get('[data-test="sidenav-user-settings"]'),
        getNotificationsOption: () => cy.get('[data-test="sidenav-notifications"]'),
        getNotificationsCountLabel: () => cy.get('[data-test="nav-top-notifications-count"]').find('span'),
        getNewButton: () => cy.get('[data-test="nav-top-new-transaction"]')
    }

    // Click the Next button in the Get Started popup
    clickNextButton() {
        return this.elements.getNextButton().click()
    }

    // Create a bank account to a new user
    createBankAccount(bankName: string, routingNumber: number, accountNumber: number) {
        return this.elements.getCreateBankForm().then((form) => {
            cy.wrap(form).get('[data-test="bankaccount-bankName-input"]').type(bankName)
            cy.wrap(form).get('[data-test="bankaccount-routingNumber-input"]').type(routingNumber.toString())
            cy.wrap(form).get('[data-test="bankaccount-accountNumber-input"]').type(accountNumber.toString())
            cy.wrap(form).submit()
        })
    }

    // Click the Done button in the Get Started popup
    clickDoneButton() {
        return this.elements.getDoneButton().click()
    }

    // Click My Account option in the side menu
    clickMyAccountOption() {
        return this.elements.getMyAccountOption().click()
    }
    
    // Click Notifications option in the side menu
    clickNotificationsOption() {
        return this.elements.getNotificationsOption().click()
    }

    // Return the number of notification count
    notificationsCount() {
        console.log('Count: ',this.elements.getNotificationsCountLabel())
        //return this.elements.getNotificationsCountLabel().invoke('text').then((noti) => {
          //  noti.length
        //})
    }

    // Click the New transaction button
    clickNewButton() {
        return this.elements.getNewButton().click()
    }
    
    // Click the Logout option
    clickLogoutOption() {
        return this.elements.getLogoutOption().click()
    }


}

export const MainDashboard = new MainDashboardPage()