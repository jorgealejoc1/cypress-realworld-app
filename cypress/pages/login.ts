export class LoginPage {
    
    // Login page web elements
    elements = {
        getUsernameField: () => cy.get('#username'),
        getPasswordField: () => cy.get('#password'),
        getRememberMeCheck: () => cy.get('form').contains('Remember me'),
        getSignInButton: () => cy.get('[data-test="signin-submit"]'),
        getErrorMsgSignIn: () => cy.get('main').find('[data-test="signin-error"]'),
        getSignUpLink: () => cy.get('[data-test="signup"]')

    }

    // Type username in the login form
    typeUserName(username: string) {
        return this.elements.getUsernameField().clear().type(username)
    }
    
    // Type password in the login form
    typePassword(password: string) {
        return this.elements.getPasswordField().clear().type(password)
    }
    
    // Click the Sign in button
    clickSignInButton() {
        return this.elements.getSignInButton().click()
    }
    
    // Click the Sign up button
    clickSignUpLink() {
        return this.elements.getSignUpLink().click()
    }


}

export const Login = new LoginPage()