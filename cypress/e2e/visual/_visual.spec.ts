describe('Visual tests', function(){
    it('visits signin page', function(){
        cy.visit('/');
        cy.wait(2000);
        cy.matchImageSnapshot();
    })

    it('visits home page', function(){
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(2000);
        cy.matchImageSnapshot();
    })

    it('visits user settings page', function(){
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.visit('/user/settings');
        cy.wait(2000);
        cy.matchImageSnapshot();
    })

    it('visits bankaccounts page', function(){
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.visit('/bankaccounts');
        cy.wait(2000);
        cy.matchImageSnapshot();
    })

    it('visits notifications page', function(){
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.visit('/notifications');
        cy.wait(2000);
        cy.matchImageSnapshot();
    })

    it('visits friends page', function(){
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.visit('/contacts');
        cy.wait(2000);
        cy.matchImageSnapshot();
    })

    it('visits mine page', function(){
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.visit('/personal');
        cy.wait(2000);
        cy.matchImageSnapshot();
    })
})