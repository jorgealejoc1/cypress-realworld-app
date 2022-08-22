export class TransactionsPage {

    // Transactions page web elements
    elements = {
        getAccountBalanceLabel: () => cy.get('[data-test="sidenav-user-balance"]'),
        getContactList: () => cy.get('[data-test="users-list"]').find('li'),
        getAmountField: () => cy.get('#amount'),
        getAddNoteField: () => cy.get('#transaction-create-description-input'),
        getPayButton: () => cy.get('[data-test="transaction-create-submit-payment"]'),
    }

    // Get initial account balance
    getAccountBalance() {
        return this.elements.getAccountBalanceLabel().invoke('text')
    }

    // Select the first contact to send a payment
    selectFirstContact() {
        return this.elements.getContactList().then((contacts) => {
            cy.wrap(contacts).first().click()
        })
    }

    // Type the amount of the transaction
    enterAmount(amount: number) {
        return this.elements.getAmountField().clear().type(amount.toString())
    }
    
    // Type the a note of the transaction
    enterNote(note: string) {
        return this.elements.getAddNoteField().clear().type(note)
    }

    // Click the Pay button
    clickPayButton() {
        return this.elements.getPayButton().click()
    }


}

export const Transactions = new TransactionsPage()