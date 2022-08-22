export class SignUpPage {
    
    // Sign Up page web elements
    elements = {
        getFirstNameField: () => cy.get('[data-test="signup-first-name"]'),
        getLastNameField: () => cy.get('[data-test="signup-last-name"]'),
        getUserNameField: () => cy.get('[data-test="signup-username"]'),
        getPasswordField: () => cy.get('[data-test="signup-password"]'),
        getConfirmPasswordField: () => cy.get('[data-test="signup-confirmPassword"]'),
        getSignUpButton: () => cy.get('[data-test="signup-submit"')

    }

    // Type first name in the sign up form
    typeFirstName(firstName: string) {
        return this.elements.getFirstNameField().clear().type(firstName)
    }
    
    // Type last name in the sign up form
    typeLastName(lastName: string) {
        return this.elements.getLastNameField().clear().type(lastName)
    }
    
    // Type username in the sign up form
    typeUserName(userName: string) {
        return this.elements.getUserNameField().clear().type(userName)
    }
    
    // Type password in the sign up form
    typePassword(password: string) {
        return this.elements.getPasswordField().clear().type(password)
    }
    
    // Type confirm password in the sign up form
    typeConfirmPassword(confirmPassword: string) {
        return this.elements.getConfirmPasswordField().clear().type(confirmPassword)
    }
    
    // Click the sign up button in the sign up form
    clickSignUpButton() {
        return this.elements.getSignUpButton().click()
    }
    
}

export const SignUp = new SignUpPage()