export class MyAccountPage {

    // My account page web elements
    elements = {
        getUserSettingsForm: () => cy.get('form').find('input')
    }


}

export const MyAccount = new MyAccountPage()