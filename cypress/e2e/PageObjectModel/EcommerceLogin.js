/// <reference types="Cypress" />

class LoginPage {
    // Method to visit the Ecommerce website
    VisitPage() {
        cy.visit("https://magento.softwaretestingboard.com/")
    }

    // Method to navigate to the sign-in page
    NagivateSigninPage() {
        const ClickSigninButton = cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a")
        ClickSigninButton.click()
    }

    // Method to enter an email address
    EnterEmail(value) {
        const email = cy.get('#email')
        email.clear()
        email.type(value)
        return this
    }

    // Method to enter a password
    EnterPassword(value) {
        const password = cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass')
        password.clear()
        password.type(value)
        return this
    }

    // Method to click the "Sign In" button
    ClickSignIn() {
        const Signin = cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
        Signin.click()
    }
}

export default LoginPage
