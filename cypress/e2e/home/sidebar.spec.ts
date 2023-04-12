describe('Home sidebar test', function() {
    beforeEach(function(){
      cy.visit('/');
      cy.login(Cypress.env('username'), Cypress.env('password'));
    })

    it('opens and closes sidebar', function() {
        cy.get('[data-test="sidenav-user-full-name"]').should('be.visible');
        cy.get('[data-test="sidenav-home"]').should('be.visible');
        cy.get('[data-test="sidenav-toggle"]').click();
        cy.get('[data-test="sidenav-home"]').should('not.be.visible');
        cy.get('[data-test="sidenav-user-full-name"]').should('not.be.visible');
    })

})