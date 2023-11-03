/// <reference types="Cypress" />

import LoginPage from "../PageObjectModel/EcommerceLogin";

const lg = new LoginPage();

describe('Login Test Suite', function () {

    // Positive test case - Valid Email & Password
    it('Valid Email & Password', function () {
        lg.VisitPage();
        lg.NagivateSigninPage();
        lg.EnterEmail("hasanriz.web@gmail.com");
        lg.EnterPassword("Google@321");
        lg.ClickSignIn();
        cy.wait(2000)

        // Assertion: Check if the welcome message is displayed for a successful login
        cy.get(':nth-child(2) > .greet > .logged-in')
            .should('have.text', 'Welcome, Hasan Rizwan!')
            .should('be.visible', { timeout: 10000 });
    });

    // Negative Test Cases

    // Negative test case - Invalid Email & Valid Password
    it('Invalid Email & Valid Password', function () {
        lg.VisitPage();
        lg.NagivateSigninPage();
        lg.EnterEmail("hasanrizwa@gmail.com");
        lg.EnterPassword("Google@321");
        lg.ClickSignIn();

        // Assertion: Check if the error message is displayed for an incorrect email

        cy.get('.message-error > div')
            .should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
    });

    // Negative test case - Valid Email & Invalid Password
    it('Valid Email & Invalid Password', function () {
        lg.VisitPage();
        lg.NagivateSigninPage();
        lg.EnterEmail("hasanrizwa24@gmail.com");
        lg.EnterPassword("Google@111");
        lg.ClickSignIn();

        // Assertion: Check if the error message is displayed for an incorrect password
        cy.get('.message-error > div')
            .should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
    });
});
