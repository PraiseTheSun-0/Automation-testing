describe('Login tests', function(){
    it('displays username helper text', function(){
        cy.visit('/');
        cy.contains('Sign in').click();
        cy.get('#username-helper-text').should('contain', 'Username is required');
    })

    it('displays password helper text', function(){
        cy.visit('/');
        cy.get('#username').type('1');
        cy.get('#password').type('1').blur();
        cy.get('#password-helper-text').should('contain', 'Password must contain');
    })

    it('logs in and out', function(){
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));

        cy.contains("Logout").click();
        cy.url().should('contain', "signin");
    })

})