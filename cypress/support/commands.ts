/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add('login', (username, password) => {
  
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('Sign In').click();
    cy.get('[data-test="sidenav-username"]').should('contain', username);
  
    //cy.getCookie('your-session-cookie').should('exist')
  
})

Cypress.Commands.add('prepareContext', function<T>(type: new (...args: any[]) => T){
    // delete token
    cy.visit('/');
    cy.login(Cypress.env('username'), Cypress.env('password')).then((token) => {
    // set token
  
        const ctx: T = new type(token);
        cy.wrap(ctx, {log: false }).as('ctx');
    });
})

Cypress.Commands.add('apiRequest', function(method: string, path: string, token: string, body?: object) {
    return cy.request({
      method: method,
      url: `${Cypress.env('apiUrl')}${path}`,
      // headers: 
      body: body,
    });
})

Cypress.Commands.add('getByDT', (dataTest: string) => {
    return cy.get(`[data-test="${dataTest}"]`);
})

// Cypress.Commands.add('loginViaAPI', (username, password) => {
//   cy.request('POST', `${Cypress.env('apiUrl')}/login`, {
//     "type": "LOGIN",
//     "username": username,
//     "password": password
// }).then((response) => {
//     return cy.getCookie("connect.sid")
//   })
// })