/// <reference types="Cypress" />

import { Login } from "../../../pages/login"
import { MainDashboard } from "../../../pages/main-dashboard"

describe('Login page', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    // TC 1. [Login page] Validate the username and password required to enable the SIGN IN button
    it('Should the username and password required to enable the SIGN IN button', () => {
        const user: string = Cypress.env('user')
        const pass: string = Cypress.env('pass')
        Login.typeUserName(user)
        Login.typePassword(pass)
        Login.elements.getSignInButton().should('be.enabled')
    })

    // TC 2. [Login page] Validate error message when username is invalid
    it('Should an error message appears when username is invalid', () => {
        const user: string = 'invalid_username'
        const pass: string = Cypress.env('pass')
        Login.typeUserName(user)
        Login.typePassword(pass)
        Login.clickSignInButton()
        Login.elements.getErrorMsgSignIn().should('contain', 'Username or password is invalid')
    })

    // TC 3. [Login page] Validate error message when password is invalid
    it('Should an error message appears when password is invalid', () => {
        const user: string = Cypress.env('user')
        const pass: string = 'invalid_password'
        Login.typeUserName(user)
        Login.typePassword(pass)
        Login.clickSignInButton()
        Login.elements.getErrorMsgSignIn().should('contain', 'Username or password is invalid')
    })

    // TC 4. [Login page] Validate successful login
    it('Should be able to login to the app', () => {
        const user: string = Cypress.env('user')
        const pass: string = Cypress.env('pass')
        Login.typeUserName(user)
        Login.typePassword(pass)
        Login.clickSignInButton()
        
        // The username should be displayed at the top left of the page
        MainDashboard.elements.getUsernameLabel(user).should('contain', user)
    })

})